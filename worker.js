export default {
  async fetch(request, env) {
    if (request.method !== 'POST' || new URL(request.url).pathname !== '/api/contact') {
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

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'mxmn.net Contact <noreply@maxi.io>',
          to: ['info@mxmn.net'],
          reply_to: email,
          subject: `[mxmn.net] ${name} — ${company}`,
          text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        return new Response(JSON.stringify({ error: 'Email send failed' }), { status: 500, headers: cors });
      }

      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: cors });
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Server error' }), { status: 500, headers: cors });
    }
  },
};
