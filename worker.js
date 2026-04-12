export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Redirect /sitemap.xml to /sitemap-index.xml
    if (url.pathname === '/sitemap.xml') {
      return Response.redirect(`${url.origin}/sitemap-index.xml`, 301);
    }

    if (request.method !== 'POST' || url.pathname !== '/api/contact') {
      return env.ASSETS.fetch(request);
    }

    const origin = request.headers.get('Origin') || '';
    const cors = {
      'Access-Control-Allow-Origin': origin,
      'Content-Type': 'application/json',
    };

    try {
      const form = await request.formData();
      const name = form.get('name')?.toString().trim();
      const email = form.get('email')?.toString().trim();
      const company = form.get('company')?.toString().trim() || '—';
      const message = form.get('message')?.toString().trim();

      if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400, headers: cors });
      }

      // Verify Turnstile token
      const token = form.get('cf-turnstile-response')?.toString();
      if (!token) {
        return new Response(JSON.stringify({ error: 'Captcha required' }), { status: 400, headers: cors });
      }

      const turnstileBody = new FormData();
      turnstileBody.append('secret', env.TURNSTILE_SECRET);
      turnstileBody.append('response', token);
      turnstileBody.append('remoteip', request.headers.get('CF-Connecting-IP') || '');

      const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: turnstileBody,
      });
      const turnstileOutcome = await turnstileRes.json();

      if (!turnstileOutcome.success) {
        return new Response(JSON.stringify({ error: 'Captcha verification failed' }), { status: 403, headers: cors });
      }

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'mxmn.net Contact <hello@mail.maxi.io>',
          to: ['tmaximini@gmail.com'],
          reply_to: email,
          subject: `[mxmn.net] ${name} — ${company}`,
          text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error('Resend error:', res.status, err);
        return new Response(JSON.stringify({ error: 'Email send failed', detail: err }), { status: 500, headers: cors });
      }

      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: cors });
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Server error' }), { status: 500, headers: cors });
    }
  },
};
