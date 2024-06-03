"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactSchema } from "@/types/contact";
import React from "react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    console.log(values);
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(values).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));

    console.log("res", res);
  };

  return (
    <div id="contact" className="w-full layoutPadding py-">
      <h1 className="text-3xl sm:text-5xl text-center py-8">Contact Us</h1>
      <div className="flex flex-col md:flex-row gap-5 justify-between text-background max-w-screen-format w-full tracking-wide rounded px-7 md:px-14 py-4 min-h-[318px] bg-white">
        <form
          name="contact"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-1 w-full md:max-w-[354px]"
        >
          <Input
            label="Name"
            {...register("name")}
            placeholder="Enter your name"
          />
          <Input
            label="Email"
            {...register("email")}
            placeholder="Enter your email"
          />
          <Input
            label="Phone Number"
            {...register("phoneNumber")}
            placeholder="Enter your number"
          />
          <div className="flex flex-col gap-y-1">
            <label className="text-lg font-medium capitalize">Message</label>
            <textarea
              {...register("message")}
              placeholder="Enter your message"
              className="w-full md:max-w-[354px] placeholder:text-[hsla(0,0%,38%,1)] placeholder:text-sm placeholder:tracking-wider p-1 px-3 bg-[hsla(0,0%,94%,1)] rounded resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary w-fit mt-3 ml-auto px-7 py-1 drop-shadow-lg text-background font-medium rounded"
          >
            Submit
          </button>
        </form>

        <form
          name="subscribe"
          method="POST"
          data-netlify="true"
          className="md:max-w-[354px] w-full flex flex-col gap-y-2"
        >
          <h3 className="text-base sm:text-lg text-center font-medium">
            Location
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.630686921947!2d-80.4118355!3d27.262109799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88deeaff37cd6b3f%3A0xf5f008babf907288!2s2682%20SW%20Domina%20Rd%2C%20Port%20St.%20Lucie%2C%20FL%2034953%2C%20USA!5e0!3m2!1sen!2sph!4v1716884579141!5m2!1sen!2sph"
            className="h-[197px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="text-center text-primary font-medium text-sm max-w-[240px] mx-auto">
            2682 SW Domina Rd, Port St. Lucie, FL 34953, United States
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
              className="text-base rounded px-5 py-1 font-medium"
            >
              Send
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
        <label className="text-lg font-medium capitalize">{name}</label>
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
