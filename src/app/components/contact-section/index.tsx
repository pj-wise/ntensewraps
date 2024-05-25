export const ContactSection = () => {
  return (
    <div id="contact" className="w-full layoutPadding">
      <div className="flex flex-col gap-5 text-background max-w-screen-format w-full tracking-wide rounded-xl px-7 lg:px-14 py-4 lg:py-8 min-h-[318px] bg-gradient-to-r from-[hsla(0,0%,100%,0.6)] via-[hsla(0,0%,90%,0.6)] to-[hsla(0,0%,60%,0.6)]">
        <h3 className="text-2xl sm:text-3xl font-bold max-w-[399px]">
          Experience the <span className="text-primary">Ntense</span> Difference
          - Schedule Your Appointment Today.
        </h3>
        <p className="font-medium text-lg sm:text-xl max-w-[307px]">
          {
            "Click the button below. Fill out the details and we’ll get back to you in less than 24 hrs."
          }
        </p>
        <button className="bg-primary w-fit px-3.5 py-1.5 drop-shadow-lg text-foreground">
          Inquire now
        </button>
      </div>
    </div>
  );
};
