"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Send, LoaderCircle } from "lucide-react";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const inputClass =
  "w-full rounded-2xl border border-border bg-background px-4 py-3 font-roboto text-sm outline-none transition-colors placeholder:text-text-muted/60 focus-visible:border-accent-green/50 focus-visible:ring-2 focus-visible:ring-accent-green/20 aria-[invalid=true]:border-red-500";

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setSubmitStatus(null);

    try {
      // TODO: Apne contact API endpoint ko yahan connect karo.
      // Example:
      // await axiosInstance.post("/contact", data);

      console.log("Contact form data:", data);

      // Demo success state only. API connect hone ke baad
      // success tabhi set karo jab server request successful ho.
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <div>
        <p className="font-roboto text-sm font-medium text-accent-green">
          Send a message
        </p>

        <h2 className="mt-2 font-headline-mozi text-2xl font-semibold">
          Tell me what you&apos;re building.
        </h2>
      </div>

      <form
        className="mt-8 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-roboto text-sm font-medium"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={inputClass}
              {...register("name", {
                required: "Name is required.",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters.",
                },
                maxLength: {
                  value: 100,
                  message: "Name cannot exceed 100 characters.",
                },
                validate: (value) =>
                  value.trim().length >= 2 || "Please enter a valid name.",
              })}
            />

            {errors.name && (
              <p
                id="name-error"
                role="alert"
                className="mt-1.5 text-xs text-red-500"
              >
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-roboto text-sm font-medium"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={inputClass}
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address.",
                },
                maxLength: {
                  value: 254,
                  message: "Email cannot exceed 254 characters.",
                },
              })}
            />

            {errors.email && (
              <p
                id="email-error"
                role="alert"
                className="mt-1.5 text-xs text-red-500"
              >
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block font-roboto text-sm font-medium"
          >
            Subject
          </label>

          <input
            id="subject"
            type="text"
            placeholder="What would you like to discuss?"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={inputClass}
            {...register("subject", {
              required: "Subject is required.",
              minLength: {
                value: 3,
                message: "Subject must be at least 3 characters.",
              },
              maxLength: {
                value: 150,
                message: "Subject cannot exceed 150 characters.",
              },
              validate: (value) =>
                value.trim().length >= 3 || "Please enter a valid subject.",
            })}
          />

          {errors.subject && (
            <p
              id="subject-error"
              role="alert"
              className="mt-1.5 text-xs text-red-500"
            >
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block font-roboto text-sm font-medium"
          >
            Message
          </label>

          <textarea
            id="message"
            rows={6}
            placeholder="Tell me a little about your project..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputClass} resize-y`}
            {...register("message", {
              required: "Message is required.",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters.",
              },
              maxLength: {
                value: 5000,
                message: "Message cannot exceed 5000 characters.",
              },
              validate: (value) =>
                value.trim().length >= 10 ||
                "Please enter a meaningful message.",
            })}
          />

          {errors.message && (
            <p
              id="message-error"
              role="alert"
              className="mt-1.5 text-xs text-red-500"
            >
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submission feedback */}
        {submitStatus === "success" && (
          <p
            role="status"
            className="rounded-xl border border-accent-green/20 bg-accent-green/5 p-3 text-sm text-accent-green"
          >
            Demo submitted successfully. Connect the API to send your message.
          </p>
        )}

        {submitStatus === "error" && (
          <p role="alert" className="text-sm text-red-500">
            Something went wrong. Please try again.
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-green px-6 py-3 font-roboto text-sm font-medium text-black transition-colors duration-300 hover:bg-accent-green/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-green disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              Sending...
              <LoaderCircle className="size-4 animate-spin" />
            </>
          ) : (
            <>
              Send Message
              <Send className="size-4" aria-hidden="true" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
