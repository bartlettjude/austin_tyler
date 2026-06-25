"use client";

import { useState } from "react";

const PROJECT_TYPES = ["Live Show", "Promo Shoot", "Event", "Other"];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [sent, setSent] = useState(false);
  const [touched, setTouched] = useState(false);

  const valid =
    form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.type && form.message.trim();

  function update(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    // TODO: POST to your form handler / email service / CRM.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-ink text-paper p-10 md:p-14 text-center">
        <p className="font-display text-tan text-xl mb-3">✦ Got it</p>
        <h3 className="display text-4xl md:text-5xl mb-4">Talk soon, {form.name.split(" ")[0] || "friend"}.</h3>
        <p className="text-paper/70 max-w-md mx-auto leading-relaxed">
          Your message is in. I usually reply within 24–48 hours — keep an eye on your
          inbox (and your spam folder, just in case).
        </p>
        <button
          onClick={() => { setSent(false); setForm({ name: "", email: "", type: "", message: "" }); setTouched(false); }}
          className="btn btn-outline !border-paper/40 !text-paper mt-8"
        >
          <span>Send another</span>
        </button>
      </div>
    );
  }

  const errCls = "text-xs text-clay mt-1.5";
  const fieldCls =
    "w-full bg-paper border border-ink/15 rounded-xl px-4 py-3.5 text-ink placeholder:text-muted/70 focus:border-ink focus:outline-none focus:ring-2 focus:ring-gold/30 transition";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="eyebrow block mb-2">Name</label>
          <input
            id="name" type="text" value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name" className={fieldCls} autoComplete="name"
          />
          {touched && !form.name.trim() && <p className={errCls}>Please add your name.</p>}
        </div>
        <div>
          <label htmlFor="email" className="eyebrow block mb-2">Email</label>
          <input
            id="email" type="email" value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@email.com" className={fieldCls} autoComplete="email"
          />
          {touched && !/\S+@\S+\.\S+/.test(form.email) && <p className={errCls}>Add a valid email.</p>}
        </div>
      </div>

      <div>
        <label className="eyebrow block mb-3">Project type</label>
        <div className="flex flex-wrap gap-2.5">
          {PROJECT_TYPES.map((t) => {
            const on = form.type === t;
            return (
              <button
                type="button" key={t}
                onClick={() => update("type", t)}
                className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                  on
                    ? "bg-ink text-paper border-ink"
                    : "bg-paper text-ink-soft border-ink/15 hover:border-ink/40"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
        {touched && !form.type && <p className={errCls}>Pick a project type.</p>}
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block mb-2">Tell me about it</label>
        <textarea
          id="message" rows={5} value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Date, location, the artist or vibe, and what you need the photos for…"
          className={`${fieldCls} resize-none`}
        />
        {touched && !form.message.trim() && <p className={errCls}>A few details help a lot.</p>}
      </div>

      <button type="submit" className="btn btn-dark w-full sm:w-auto justify-center">
        <span>Send booking request</span>
        <span className="btn-arrow">→</span>
      </button>
    </form>
  );
}
