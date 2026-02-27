import "@/styles/globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { LocaleProvider } from "@/components/LocaleProvider";
import TopBar from "@/components/TopBar";
import { locales, defaultLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Pinsefestivalen",
  description: "Sangtekster for gudstjenesten",
};

const initScript = `
(function(){
  var t = localStorage.getItem("theme");
  if (t === "dark" || t === "light") {
    document.documentElement.setAttribute("data-theme", t);
    window.__INITIAL_THEME__ = t;
  }
  var l = localStorage.getItem("locale");
  if (l === "en" || l === "no" || l === "ta") window.__INITIAL_LOCALE__ = l;
})();
`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("locale")?.value;
  const initialLocale: Locale = localeCookie && locales.includes(localeCookie as Locale) ? (localeCookie as Locale) : defaultLocale;

  return (
    <html lang={initialLocale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body>
        <LocaleProvider initialLocale={initialLocale}>
          <Suspense fallback={<div style={{ height: 52 }} />}>
            <TopBar />
          </Suspense>
          <main>{children}</main>
        </LocaleProvider>
      </body>
    </html>
  );
}