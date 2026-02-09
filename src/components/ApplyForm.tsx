"use client";

import { FormEvent, useState } from "react";
import {
  applyFormContent,
  applyGoalOptions,
  buildApplyWhatsApp,
  type ApplyFormValues
} from "@/lib/content";

type FormErrors = {
  name?: string;
  whatsappNumber?: string;
};

const initialValues: ApplyFormValues = {
  name: "",
  whatsappNumber: "",
  goal: ""
};

const validate = (values: ApplyFormValues) => {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = applyFormContent.requiredMessage;
  }

  if (!values.whatsappNumber.trim()) {
    errors.whatsappNumber = applyFormContent.requiredMessage;
  }

  return errors;
};

export default function ApplyForm() {
  const [values, setValues] = useState<ApplyFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage("");

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    const submitUrl = buildApplyWhatsApp(values);
    window.open(submitUrl, "_blank", "noopener,noreferrer");

    setIsSubmitting(false);
    setSuccessMessage(applyFormContent.successMessage);
    setValues(initialValues);
  };

  return (
    <div
      id="apply"
      className="relative rounded-3xl border border-white/40 bg-white/85 p-6 shadow-soft backdrop-blur scroll-mt-28 sm:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
        {applyFormContent.title}
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
        Reserve your seat in minutes
      </h2>
      <p className="mt-2 text-sm text-slate">{applyFormContent.subtitle}</p>

      <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
        <div>
          <label htmlFor="apply-name" className="text-sm font-semibold text-ink">
            {applyFormContent.nameLabel}
            <span className="ml-1 text-slate">*</span>
          </label>
          <input
            id="apply-name"
            name="name"
            type="text"
            value={values.name}
            onChange={(event) =>
              setValues((current) => ({ ...current, name: event.target.value }))
            }
            className="mt-2 w-full rounded-xl border border-slate/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-sapphire"
            placeholder="Enter your full name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "apply-name-error" : undefined}
          />
          {errors.name ? (
            <p id="apply-name-error" className="mt-1 text-xs text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="apply-whatsapp"
            className="text-sm font-semibold text-ink"
          >
            {applyFormContent.whatsappLabel}
            <span className="ml-1 text-slate">*</span>
          </label>
          <input
            id="apply-whatsapp"
            name="whatsapp"
            type="tel"
            value={values.whatsappNumber}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                whatsappNumber: event.target.value
              }))
            }
            className="mt-2 w-full rounded-xl border border-slate/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-sapphire"
            placeholder="Enter WhatsApp number"
            autoComplete="tel"
            aria-invalid={Boolean(errors.whatsappNumber)}
            aria-describedby={
              errors.whatsappNumber ? "apply-whatsapp-error" : undefined
            }
          />
          {errors.whatsappNumber ? (
            <p id="apply-whatsapp-error" className="mt-1 text-xs text-red-600">
              {errors.whatsappNumber}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="apply-goal" className="text-sm font-semibold text-ink">
            {applyFormContent.goalLabel}
          </label>
          <select
            id="apply-goal"
            name="goal"
            value={values.goal ?? ""}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                goal: event.target.value as ApplyFormValues["goal"]
              }))
            }
            className="mt-2 w-full rounded-xl border border-slate/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-sapphire"
          >
            <option value="">{applyFormContent.goalPlaceholder}</option>
            {applyGoalOptions.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-sapphire px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:shadow-glow focus-ring disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : applyFormContent.submitLabel}
        </button>
      </form>

      <p aria-live="polite" className="mt-4 min-h-5 text-sm font-medium text-slate">
        {successMessage}
      </p>
    </div>
  );
}