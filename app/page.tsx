"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const lang = navigator.language.toLowerCase();
    const locale = lang.startsWith("tr") ? "tr" : "en";
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
