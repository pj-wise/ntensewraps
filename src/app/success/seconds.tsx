"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Seconds = () => {
  const [second, setSecond] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((value) => (second > 0 ? value - 1 : 0));
    }, 1000);

    const timeout = setTimeout(() => {
      router.replace("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return <p className="text-sm">Redirecting to home page in {second}</p>;
};

export default Seconds;
