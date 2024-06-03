import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer className="w-full layoutPadding pt-4 ">
      <div className="px-6 max-w-screen-format flex gap-4 justify-between flex-wrap">
        <div className=" max-md:min-w-[250px]">
          <h4 className="text-primary text-xl font-medium">Ntense Car Wrap</h4>
          <p className="pt-4 max-w-[252px]">
            Making cars unique, and making them stand out from &quot;regular
            traffic&quot;!
          </p>
        </div>

        <div className="max-md:min-w-[250px]">
          <h4 className="text-primary text-xl font-medium">Website</h4>
          <ul className="text-base flex flex-col gap-y-2 font-medium tracking-wider">
            <li className="hover:underline pt-6">
              <Link href="#services">Services</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">Pricing</Link>
            </li>
            <li className="hover:underline">
              <Link href="#about">About</Link>
            </li>
          </ul>
        </div>

        <div className="max-md:min-w-[250px]">
          <h4 className="text-primary text-xl font-medium">Contact</h4>
          <ul className="text-base flex flex-col gap-y-2 font-medium tracking-wider">
            <li className="hover:underline pt-6">
              <Link href="#contact">Call us</Link>
            </li>
            <li className="hover:underline">
              <Link href="#contact">Contact form</Link>
            </li>
            <li className="hover:underline">
              <Link href="#contact">Email us</Link>
            </li>
            <li className="hover:underline">
              <Link href="#contact">Location</Link>
            </li>
          </ul>
        </div>

        <div className="max-md:min-w-[250px]">
          <h4 className="text-primary text-xl font-medium">Social Media</h4>
          <ul className="text-base flex flex-col gap-y-2 font-medium tracking-wider">
            <li className="hover:underline pt-6">
              <Link href="#">Facebook</Link>
            </li>
            <li className="hover:underline">
              <Link href="https://instagram.com/ntensecarwraps">Instagram</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">Twitter</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">Tiktok</Link>
            </li>
          </ul>
        </div>
      </div>

      <span className="block text-base sm:text-xl pt-12 py-4 text-center">
        Copyright 2024 © Ntense Wraps LLC | All Rights Reserved.
      </span>
    </footer>
  );
};
