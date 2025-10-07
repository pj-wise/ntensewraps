"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactSchema } from "@/types/contact";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useForm as useFormspreeForm } from "@formspree/react";

const CONTACT_FORM_ID = "xqalwwjp";
const SUBSCRIPTION_FORM_ID = "xqalwwjp";

export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  const [contactFormState, contactSubmit] = useFormspreeForm(CONTACT_FORM_ID);
  const [subscriptionFormState, subscriptionSubmit] =
    useFormspreeForm(SUBSCRIPTION_FORM_ID);

  // Handle contact form success
  useEffect(() => {
    if (contactFormState.succeeded) {
      alert("Thank you! Your message has been sent successfully.");
      reset();
      window.location.reload();
    }
  }, [contactFormState.succeeded, reset]);

  // Handle subscription form success
  useEffect(() => {
    if (subscriptionFormState.succeeded) {
      alert("Thank you for subscribing to our newsletter!");
      window.location.reload();
    }
  }, [subscriptionFormState.succeeded]);

  return (
    <div id="contact" className="w-full layoutPadding py-">
      <h1 className="text-3xl font-bold sm:text-5xl text-center py-8">
        CONTACT US
      </h1>
      <div className="flex flex-col md:flex-row gap-5 justify-between text-background max-w-screen-format w-full tracking-wide rounded px-7 md:px-14 py-4 min-h-[318px] bg-[#040404] text-white">
        <form
          name="contact"
          onSubmit={contactSubmit}
          className="flex flex-col gap-y-1 w-full md:max-w-[354px]"
        >
          <Input
            label="Name"
            {...register("name")}
            placeholder="Enter your name"
            className="text-black"
          />
          <Input
            label="Email"
            {...register("email")}
            placeholder="Enter your email"
            className="text-black"
          />
          <Input
            label="Phone Number"
            {...register("phoneNumber")}
            placeholder="Enter your number"
            className="text-black"
          />
          <div className="flex flex-col gap-y-1">
            <label className="text-lg font-medium capitalize">Message</label>
            <textarea
              {...register("message")}
              placeholder="Enter your message"
              className="w-full md:max-w-[354px] text-black placeholder:text-[hsla(0,0%,38%,1)] placeholder:text-sm placeholder:tracking-wider p-1 px-3 bg-[hsla(0,0%,94%,1)] rounded resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={contactFormState.submitting}
            className="bg-primary w-fit mt-3 ml-auto px-7 py-1 drop-shadow-lg text-background font-medium rounded"
          >
            {contactFormState.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        <form
          name="subscribe"
          onSubmit={subscriptionSubmit}
          className="md:max-w-[354px] w-full flex flex-col gap-y-2"
        >
          <h3 className="text-base sm:text-lg text-center font-medium">
            Location
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.948521730691!2d-80.38696591938466!3d27.25214381571528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88def172fd67a40d%3A0x523d1b5faee694a!2sNtense%20Wraps%2C%20PPF%20%26%20Ceramic%20Coating!5e0!3m2!1sen!2sph!4v1759492564597!5m2!1sen!2sph"
            className="h-[197px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="text-center text-primary font-medium text-sm max-w-[240px] mx-auto">
            1066 SW Cornelia Ave, Port St. Lucie, FL 34953, United States
          </p>

          <p className="text-center text-xs">
            &quot;Get exclusive updates and offers from Ntense Car Wraps! Sign
            up for our newsletter now!&quot;
          </p>

          <div className="flex border rounded w-full mt-3">
            <Input
              name="subscription-email"
              placeholder="Enter your email"
              className="max-w-full w-full grow"
            />
            <button
              type="submit"
              disabled={subscriptionFormState.submitting}
              className="text-base rounded px-5 py-1 font-medium"
            >
              {subscriptionFormState.submitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Input = React.forwardRef<
  HTMLInputElement,
  { label?: string } & React.InputHTMLAttributes<HTMLInputElement>
>(({ label = "", name, className, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      {label ? (
        <label className="text-lg font-medium capitalize">{label}</label>
      ) : null}
      <input
        ref={ref}
        name={name}
        {...props}
        className={cn(
          "w-full max-w-full md:max-w-[354px] placeholder:text-[hsla(0,0%,38%,1)] placeholder:text-sm placeholder:tracking-wider p-1 px-3 bg-[hsla(0,0%,94%,1)] rounded",
          className
        )}
      />
    </div>
  );
});

Input.displayName = "Input";
