import type { Metadata } from "next";
import Script from "next/script";
import { inter } from "./fonts";
import "./globals.scss";

// Some browser/sandbox "highlighter" tools inject `id="highlighter"` onto (and
// strip `hidden` from) Next's internal metadata <div hidden> before React
// hydrates, which trips a hydration mismatch. Revert that exact mutation as
// soon as it happens, before hydration compares the DOM.
const undoHighlighterInjection = `
(function () {
  function clean(el) {
    if (el && el.nodeType === 1 && el.id === "highlighter") {
      el.removeAttribute("id");
      el.setAttribute("hidden", "");
    }
  }
  document.querySelectorAll("#highlighter").forEach(clean);
  new MutationObserver(function (records) {
    for (var r of records) clean(r.target);
  }).observe(document.documentElement, {
    subtree: true,
    attributes: true,
    attributeFilter: ["id", "hidden"],
  });
})();
`;

export const metadata: Metadata = {
  title: "RainFocus Summit",
  description: "RainFocus Summit — Event setup guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <Script
          id="undo-highlighter-injection"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: undoHighlighterInjection }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
