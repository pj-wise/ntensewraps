import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export const HamburgerMenu = (props: { onClick?: () => void }) => {
  const { onClick } = props;

  return (
    <button onClick={onClick} className="flex items-center justify-center">
      <div className="group flex size-9 cursor-pointer items-center justify-center rounded-md p-1 hover:border-primary hover:border">
        <div className="space-y-2">
          <span className="block h-1 w-6 origin-center rounded-full bg-foreground transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
          <span className="block h-1 w-4 origin-center rounded-full bg-primary transition-transform ease-in-out group-hover:w-6 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
        </div>
      </div>
    </button>
  );
};

export const MenuBody = (props: { showMenu: boolean; className?: string }) => {
  const { showMenu } = props;
  const linkClassName =
    "py-5 border-b-[0.5px] border-muted-foreground link hover:gradientNtense gradientClipText bg-foreground transition-colors";
  return (
    <motion.div
      variants={{
        hidden: { y: "100%", opacity: 0, display: "none" },
        show: { y: 0, opacity: 1, display: "flex" },
      }}
      animate={showMenu ? "show" : "hidden"}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className={cn(
        "flex lg:hidden flex-col z-[999] absolute top-24 left-0 right-0 bottom-0 bg-black text-foreground layoutPadding",
        props.className
      )}
    >
      <Link href="#home" className={cn(linkClassName)}>
        Home
      </Link>
      <Link href="#home" className={cn(linkClassName)}>
        About
      </Link>
      <Link href="#home" className={cn(linkClassName)}>
        Services
      </Link>
      <Link href="#home" className={cn(linkClassName)}>
        Gallery
      </Link>
      <Link href="#home" className={cn(linkClassName)}>
        Contact
      </Link>
    </motion.div>
  );
};
