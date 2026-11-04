"use client";

import * as React from "react";
import { Mail, ArrowRight } from "lucide-react";

interface EmailCtaBlockProps {
  mailtoLink?: string;
  theme?: "light" | "dark";
  isTemplate?: boolean;
}

export function EmailCtaBlock({
  mailtoLink = "mailto:contacto@glocation.com?subject=S%C3%AD%2C%20me%20interesa%20-%20Reuni%C3%B3n%2020%20min%20Glocation&body=S%C3%AD%2C%20me%20interesa.",
  theme = "light",
  isTemplate = false,
}: EmailCtaBlockProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`px-8 pt-6 pb-8 sm:px-12 sm:pt-8 sm:pb-10 transition-colors duration-300 ${isDark ? "bg-[#120A24]" : "bg-white"
        }`}
    >
      <div className="max-w-[650px] mx-auto">
        <div
          className={`relative overflow-hidden rounded-2xl text-white px-7 py-9 sm:px-10 sm:py-10 text-center ${isDark
            ? "bg-gradient-to-br from-[#231048] via-[#3B197A] to-[#5B21B6] border border-[#6D28D9]/60"
            : "bg-gradient-to-br from-[#1A0D36] via-[#2D145E] to-[#4C1D95]"
            }`}
        >
          {/* Acento luminoso sutil */}
          <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-44 w-72 rounded-full bg-[#A855F7]/20 blur-3xl" />

          <div className="relative z-10 space-y-5 max-w-[590px] mx-auto">
            {/* Título en 2 líneas equilibradas */}
            <h2 className="font-heading text-[20px] sm:text-[23px] font-extrabold tracking-tight text-white leading-[1.26]">
              {isTemplate ? (
                <>
                  [¿Aquí va la pregunta de cierre o invitación
                  <br className="hidden sm:block" /> en dos líneas para tu
                  destinatario?]
                </>
              ) : (
                <>
                  ¿Y si exploramos dónde podría
                  <br className="hidden sm:block" /> aportar valor en su
                  entidad?
                </>
              )}
            </h2>

            <p className="font-sans text-[13.5px] leading-[1.6] text-[#EDE9FE]/95">
              {isTemplate ? (
                <>
                  <span className="sm:block sm:whitespace-nowrap">
                    [Aquí va la propuesta de reunión breve (ej. 20 minutos)
                  </span>
                  <span className="sm:block sm:whitespace-nowrap">
                    indicando qué revisarán juntos en esa sesión.]
                  </span>
                </>
              ) : (
                <>
                  <span className="sm:block sm:whitespace-nowrap">
                    Le proponemos una reunión virtual de 20 minutos para conocer
                    sus necesidades
                  </span>
                  <span className="sm:block sm:whitespace-nowrap">
                    e identificar algún proceso en el que tenga sentido evaluar
                    un Trabajador Cognitivo.
                  </span>
                </>
              )}
            </p>

            {/* Botón único CTA */}
            <div className="pt-1">
              <a
                href={mailtoLink}
                style={{ color: "#4C1D95", backgroundColor: "#FFFFFF" }}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white hover:bg-[#F5F3FF] !text-[#4C1D95] font-heading font-extrabold text-[13.5px] sm:text-[14.5px] px-7 py-3.5 shadow-[0_8px_22px_rgba(15,7,32,0.3)] transition-all duration-200 hover:-translate-y-0.5 no-underline"
              >
                <Mail className="size-4 text-[#7C3AED] stroke-[2.2] shrink-0" />
                <span
                  style={{ color: "#4C1D95" }}
                  className="!text-[#4C1D95] font-extrabold"
                >
                  {isTemplate
                    ? "[Aquí va el texto del botón CTA]"
                    : "Explorar una oportunidad en mi oficina TIC"}
                </span>
                <ArrowRight className="size-4 text-[#7C3AED] stroke-[2.4] shrink-0" />
              </a>
            </div>

            {/* Texto secundario en 2 líneas */}
            <p className="font-sans text-[12.5px] leading-[1.5] text-[#DDD6FE]/90 pt-0.5">
              {isTemplate ? (
                <>
                  <span className="sm:block sm:whitespace-nowrap">
                    [Aquí va la instrucción secundaria de respuesta
                  </span>
                  <span className="sm:block sm:whitespace-nowrap">
                    o enlace al formulario en segunda línea.]
                  </span>
                </>
              ) : (
                <>
                  <span className="sm:block sm:whitespace-nowrap">
                    Responda a este correo o deje su información en el
                    formulario
                  </span>
                  <span className="sm:block sm:whitespace-nowrap">
                    y le compartiré dos opciones de horario.
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
