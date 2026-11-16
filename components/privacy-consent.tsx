
"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/campaign";

type ConsentChoice = "accepted" | "rejected" | null;

const CONSENT_KEY = "woa-marketing-v1";

export function PrivacyConsent() {
  const [choice, setChoice] =
    useState<ConsentChoice>(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONSENT_KEY);

      if (saved === "accepted" || saved === "rejected") {
        setChoice(saved);
        setOpen(false);
      } else {
        setChoice(null);
        setOpen(true);
      }
    } catch {
      setChoice(null);
      setOpen(true);
    }
  }, []);

  function choose(value: "accepted" | "rejected") {
    const shouldRevoke =
      choice === "accepted" && value === "rejected";

    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // Mantém a escolha na sessão atual.
    }

    setChoice(value);
    setOpen(false);

    if (shouldRevoke) {
      const pixelWindow = window as Window & {
        fbq?: (...args: string[]) => void;
      };

      pixelWindow.fbq?.("consent", "revoke");
      window.location.reload();
    }
  }

  return (
    <>
      <button
        type="button"
        className="privacy-settings"
        aria-label="Alterar preferências de privacidade"
        aria-expanded={open}
        aria-controls="woa-consent-panel"
        onClick={() => setOpen(true)}
        style={{
          fontSize: "11px",
          opacity: 0.75,
          padding: "6px 10px",
        }}
      >
        Privacidade
      </button>

      {open && (
        <section
          id="woa-consent-panel"
          className="consent-panel"
          aria-label="Preferências de privacidade"
          style={{
            position: "fixed",
            bottom: "12px",
            right: "12px",
            left: "auto",
            width: "280px",
            maxWidth: "calc(100vw - 24px)",
            padding: "10px",
            borderRadius: "9px",
            background: "#062539",
            border: "1px solid #245472",
            boxShadow: "0 4px 18px #0006",
            zIndex: 50,
          }}
        >
          <p
            style={{
              fontSize: "12px",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Autoriza cookies de marketing?
          </p>

          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "8px",
              flexWrap: "nowrap",
            }}
          >
            <button
              type="button"
              onClick={() => choose("rejected")}
              style={{
                flex: 1,
                padding: "7px",
                fontSize: "12px",
                borderRadius: "5px",
                border: "1px solid #56758a",
                background: "#17374d",
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              Recusar
            </button>

            <button
              type="button"
              onClick={() => choose("accepted")}
              style={{
                flex: 1,
                padding: "7px",
                fontSize: "12px",
                borderRadius: "5px",
                border: 0,
                background: "#ffd044",
                color: "#061b30",
                cursor: "pointer",
              }}
            >
              Aceitar
            </button>
          </div>

          <a
            href={assetPath("/privacidade")}
            style={{
              display: "inline-block",
              marginTop: "7px",
              fontSize: "10px",
              color: "#b0cadb",
              textDecoration: "underline",
            }}
          >
            Política de privacidade
          </a>
        </section>
      )}

      {choice === "accepted" && (
        <Script
          id="woa-meta-pixel"
          strategy="afterInteractive"
        >
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('consent','grant');fbq('init','2168410580211263');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
