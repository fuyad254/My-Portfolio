"use client";

import { useState, type FormEvent } from "react";

import {
  AlertIcon,
  ArrowUpRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
} from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/config/site";

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const emptyForm: FormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const fieldOrder: (keyof FormFields)[] = [
  "name",
  "email",
  "subject",
  "message",
];

const placeholders: Record<keyof FormFields, string> = {
  name: "Your name",
  email: "you@example.com",
  subject: "What would you like to talk about?",
  message: "Tell me a little about your project or idea…",
};

export function Contact() {
  const [form, setForm] = useState<FormFields>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showFallback, setShowFallback] = useState(false);

  const updateField = (field: keyof FormFields, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setShowFallback(false);
  };

  const validate = (values: FormFields): FormErrors => {
    const next: FormErrors = {};

    if (values.name.trim().length < 2) {
      next.name = "Please enter your name (at least 2 characters).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (values.subject.trim().length < 3) {
      next.subject = "Please add a short subject (at least 3 characters).";
    }
    if (values.message.trim().length < 10) {
      next.message = "Please write at least 10 characters.";
    }

    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    const firstError = fieldOrder.find((field) => nextErrors[field]);
    if (firstError) {
      document.getElementById(`contact-${firstError}`)?.focus();
      setShowFallback(false);
      return;
    }

    // No email service or backend is configured yet, so the form does not send.
    // Instead we surface an honest notice and a prefilled mailto fallback.
    setShowFallback(true);
  };

  const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    form.subject,
  )}&body=${encodeURIComponent(
    `${form.message}\n\n— ${form.name} (${form.email})`,
  )}`;

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/4 size-[36rem] -translate-x-1/2 rounded-full bg-accent/[0.055] blur-[150px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-10">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Let&apos;s build something{" "}
                  <span className="text-gradient">together</span>.
                </>
              }
              description="Have a project, a role or an idea worth talking about? Send a note — I'd be glad to hear from you."
            />
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-9 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-4 transition hover:border-accent/30 hover:bg-white/[0.045]"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/15">
                    <MailIcon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                      Email
                    </span>
                    <span className="mt-1 block truncate text-sm font-medium text-fg transition-colors group-hover:text-accent">
                      {siteConfig.email}
                    </span>
                  </span>
                </a>
              </li>

              <li className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-2/10 text-accent-2 ring-1 ring-accent-2/15">
                  <PhoneIcon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm font-medium text-fg">
                    {siteConfig.phone.label}
                  </span>
                </span>
              </li>

              <li className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-3/10 text-accent-3 ring-1 ring-accent-3/15">
                  <MapPinIcon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                    Location
                  </span>
                  <span className="mt-1 block text-sm font-medium text-fg">
                    {siteConfig.location.label}
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted/80">
                Find me online
              </p>
              <SocialLinks variant="pill" className="mt-3" />
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 flex items-start gap-2 rounded-xl border border-accent-3/15 bg-accent-3/[0.04] px-3.5 py-3 text-[11px] leading-relaxed text-muted">
              <AlertIcon className="mt-0.5 size-3.5 shrink-0 text-accent-3" />
              Phone, location and some social links are placeholders. Update
              them in{" "}
              <code className="rounded bg-white/[0.06] px-1 py-0.5 font-mono text-[10px] text-fg/80">
                src/config/site.ts
              </code>
              .
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-white/10 bg-surface/70 p-6 shadow-[0_35px_100px_-50px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-fg">
                  Send a message
                </h3>
                <p className="mt-1 text-xs text-muted">
                  All fields are required.
                </p>
              </div>
              <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/15">
                <SendIcon className="size-4" />
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field
                id="contact-name"
                label="Name"
                value={form.name}
                error={errors.name}
                autoComplete="name"
                placeholder={placeholders.name}
                onChange={(value) => updateField("name", value)}
              />
              <Field
                id="contact-email"
                label="Email"
                type="email"
                value={form.email}
                error={errors.email}
                autoComplete="email"
                placeholder={placeholders.email}
                onChange={(value) => updateField("email", value)}
              />
            </div>

            <div className="mt-4">
              <Field
                id="contact-subject"
                label="Subject"
                value={form.subject}
                error={errors.subject}
                placeholder={placeholders.subject}
                onChange={(value) => updateField("subject", value)}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-xs font-medium text-fg/80"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder={placeholders.message}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                className={`w-full resize-y rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-fg placeholder:text-muted/45 outline-none transition focus:bg-white/[0.05] focus:ring-2 ${
                  errors.message
                    ? "border-rose-400/50 focus:border-rose-400/60 focus:ring-rose-400/15"
                    : "border-white/10 focus:border-accent/50 focus:ring-accent/15"
                }`}
              />
              {errors.message ? (
                <p
                  id="contact-message-error"
                  role="alert"
                  className="mt-1.5 text-[11px] text-rose-300"
                >
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-[#04211d] shadow-[0_18px_45px_-20px_rgba(94,234,212,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              Submit Message
              <SendIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {showFallback ? (
              <div
                role="status"
                className="animate-fade-in mt-5 rounded-2xl border border-accent-3/20 bg-accent-3/[0.05] p-4"
              >
                <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                  <AlertIcon className="size-4 text-accent-3" />
                  This form isn&apos;t connected to a backend yet.
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Your message was <span className="text-fg">not sent</span>.
                  Use the button below to open it in your email app, or email{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    {siteConfig.email}
                  </a>{" "}
                  directly.
                </p>
                <a
                  href={mailtoHref}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition hover:text-accent-strong"
                >
                  Open in email app
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
              </div>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: "text" | "email";
  autoComplete?: string;
  placeholder: string;
  onChange: (value: string) => void;
};

function Field({
  id,
  label,
  value,
  error,
  type = "text",
  autoComplete,
  placeholder,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-fg/80">
        {label}
      </label>
      <input
        id={id}
        name={id.replace("contact-", "")}
        type={type}
        required
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-fg placeholder:text-muted/45 outline-none transition focus:bg-white/[0.05] focus:ring-2 ${
          error
            ? "border-rose-400/50 focus:border-rose-400/60 focus:ring-rose-400/15"
            : "border-white/10 focus:border-accent/50 focus:ring-accent/15"
        }`}
      />
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-[11px] text-rose-300"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
