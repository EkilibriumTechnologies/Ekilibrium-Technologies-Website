import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = router.pathname === "/es" ? "es" : "en";
  }, [router.pathname]);

  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
