"use client";

import * as React from "react";
import { ImagePlus } from "lucide-react";

interface EmailHeroBlockProps {
  theme?: "light" | "dark";
  logoUrl?: string;
  agentImageUrl?: string;
  isTemplate?: boolean;
}

export function EmailHeroBlock({
  logoUrl = "/Logotipo  SL Versión Negativo (1).png",
  agentImageUrl = "/01.png",
  isTemplate = false,
}: EmailHeroBlockProps) {
  const [customBgUrl, setCustomBgUrl] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setCustomBgUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const activeBgImage = isTemplate ? customBgUrl : agentImageUrl;

  return (
    <div className="relative overflow-hidden bg-[#0E0620] text-white px-8 py-11 sm:px-12 sm:py-14 min-h-[340px] flex items-center">
      {/* Imagen de fondo (en campaña usa 01.png; en plantilla muestra placeholder o la imagen subida) */}
      {activeBgImage ? (
        <img
          src={activeBgImage}
          alt="Imagen principal Hero"
          className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover object-right"
        />
      ) : (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#130926] via-[#1C0E38] to-[#2A1554]" />
      )}

      {/* Difuminado a la izquierda para máxima legibilidad del texto y visibilidad limpia a la derecha */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #0D061F 0%, rgba(13,6,31,0.94) 36%, rgba(13,6,31,0.55) 56%, rgba(13,6,31,0.08) 78%, rgba(13,6,31,0) 100%)",
        }}
      />

      {/* Línea superior de marca */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#7C3AED]" />

      {/* Zona derecha de imagen cuando está en modo plantilla */}
      {isTemplate && (
        <div
          data-export-ignore={customBgUrl ? "true" : undefined}
          contentEditable={false}
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          className={`absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer transition-all ${customBgUrl
              ? "opacity-0 hover:opacity-100 bg-[#120A24]/90 border border-[#A855F7] rounded-xl px-3 py-2 text-xs"
              : "w-[210px] sm:w-[235px] h-[220px] rounded-2xl border-2 border-dashed border-[#A855F7]/70 bg-[#1A0E36]/75 hover:bg-[#24134A]/85 flex flex-col items-center justify-center text-center p-4 gap-2"
            }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <ImagePlus className="size-7 text-[#C084FC]" />
          <span className="font-heading text-xs font-bold text-white leading-snug">
            {customBgUrl
              ? "Cambiar imagen de fondo"
              : "Tu imagen principal va aquí"}
          </span>
          {!customBgUrl && (
            <span className="font-sans text-[11px] text-[#D8B4FE]/85 leading-tight">
              Haz clic para subir imagen (se difumina a la izquierda)
            </span>
          )}
        </div>
      )}

      <div className="relative z-10 w-full max-w-[650px] mx-auto">
        {/* Contenido editorial a la izquierda sobre el difuminado */}
        <div className="max-w-[340px] sm:max-w-[355px] space-y-5">
          <div>
            <img
              src={logoUrl}
              alt="Glocation"
              className="h-14 sm:h-16 w-auto object-contain -ml-2.5 -my-2"
            />
          </div>

          <div className="space-y-3.5">
            <h1 className="font-heading text-[23px] sm:text-[26px] font-extrabold tracking-tight leading-[1.2] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              <span className="block text-white">
                {isTemplate
                  ? "[Aquí va el titular principal de apertura]"
                  : "Su oficina TIC tiene proyectos que liderar."}
              </span>
              <span className="block mt-1 text-[#C084FC]">
                {isTemplate ? (
                  <>
                    [Aquí va la segunda línea
                    <br />
                    con tensión o beneficio.]
                  </>
                ) : (
                  <>
                    Y una operación que
                    <br />
                    no se detiene.
                  </>
                )}
              </span>
            </h1>

            <div className="h-0.5 w-12 rounded-full bg-[#A855F7]" />
          </div>

          <p className="font-sans text-[14px] sm:text-[14.5px] leading-[1.6] font-normal text-[#E9D5FF] drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            {isTemplate
              ? "[Aquí va el párrafo introductorio de 2 a 3 líneas explicando el valor principal que aporta tu solución al destinatario.]"
              : "Descubra cómo los Trabajadores Cognitivos pueden ampliar las capacidades de su equipo y apoyar actividades institucionales bajo supervisión humana."}
          </p>
        </div>
      </div>
    </div>
  );
}
