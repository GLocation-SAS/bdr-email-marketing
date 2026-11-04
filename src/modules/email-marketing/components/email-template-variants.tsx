"use client";

import * as React from "react";
import {
  ImagePlus,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { assetUrl } from "@/lib/utils";

export type EmailColorPalette = "violet" | "cyan" | "emerald" | "rose";
export type EmailTemplateVariant = "base" | "inverted-photos" | "dual-color";

export interface PaletteTokens {
  id: EmailColorPalette;
  label: string;
  dotColor: string;
  heroBg: string;
  heroSecondaryBg: string;
  primaryHex: string;
  accentHex: string;
  lightAccentHex: string;
  softBgLight: string;
  softBorderLight: string;
  invertedCardBgLight: string;
  invertedCardTextLight: string;
  darkSurface: string;
  darkCard: string;
  darkBorder: string;
}

export const EMAIL_PALETTES: Record<EmailColorPalette, PaletteTokens> = {
  violet: {
    id: "violet",
    label: "Violeta Glocation",
    dotColor: "#8B5CF6",
    heroBg: "#0E0620",
    heroSecondaryBg: "#24114D",
    primaryHex: "#7C3AED",
    accentHex: "#A855F7",
    lightAccentHex: "#C084FC",
    softBgLight: "#F6F3FF",
    softBorderLight: "#DDD6FE",
    invertedCardBgLight: "#1E103C",
    invertedCardTextLight: "#F5F3FF",
    darkSurface: "#120A24",
    darkCard: "#1A0F33",
    darkBorder: "#34205E",
  },
  cyan: {
    id: "cyan",
    label: "Cian & Azul Tech",
    dotColor: "#0EA5E9",
    heroBg: "#061527",
    heroSecondaryBg: "#0C2D4E",
    primaryHex: "#0284C7",
    accentHex: "#0EA5E9",
    lightAccentHex: "#38BDF8",
    softBgLight: "#F0F9FF",
    softBorderLight: "#BAE6FD",
    invertedCardBgLight: "#08243E",
    invertedCardTextLight: "#F0F9FF",
    darkSurface: "#071626",
    darkCard: "#0C2238",
    darkBorder: "#1E4266",
  },
  emerald: {
    id: "emerald",
    label: "Esmeralda & Teal",
    dotColor: "#10B981",
    heroBg: "#051B16",
    heroSecondaryBg: "#0B3B2E",
    primaryHex: "#059669",
    accentHex: "#10B981",
    lightAccentHex: "#34D399",
    softBgLight: "#ECFDF5",
    softBorderLight: "#A7F3D0",
    invertedCardBgLight: "#072920",
    invertedCardTextLight: "#ECFDF5",
    darkSurface: "#061C17",
    darkCard: "#0B2B23",
    darkBorder: "#185445",
  },
  rose: {
    id: "rose",
    label: "Coral & Magenta",
    dotColor: "#F43F5E",
    heroBg: "#1F0714",
    heroSecondaryBg: "#47102B",
    primaryHex: "#E11D48",
    accentHex: "#F43F5E",
    lightAccentHex: "#FB7185",
    softBgLight: "#FFF1F2",
    softBorderLight: "#FECDD3",
    invertedCardBgLight: "#2D0A1B",
    invertedCardTextLight: "#FFF1F2",
    darkSurface: "#1B0812",
    darkCard: "#2B0E1D",
    darkBorder: "#591C3B",
  },
};

function useImageUpload() {
  const [image, setImage] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return { image, inputRef, onSelectFile };
}

/* ============================================================================
 * VARIANTE 1: DOS FOTOS INVERTIDAS (ZIG-ZAG EDITORIAL)
 * ========================================================================== */

export function InvertedHeroBlock({
  palette = "violet",
  logoUrl = "/Logotipo  SL Versión Negativo (1).png",
}: {
  palette?: EmailColorPalette;
  logoUrl?: string;
}) {
  const p = EMAIL_PALETTES[palette];
  const { image, inputRef, onSelectFile } = useImageUpload();

  return (
    <div
      className="relative overflow-hidden text-white px-8 py-11 sm:px-12 sm:py-14 min-h-[340px] flex items-center"
      style={{ backgroundColor: p.heroBg }}
    >
      {/* Imagen de fondo anclada a la IZQUIERDA (invertida respecto a la plantilla base) */}
      {image ? (
        <img
          src={image}
          alt="Imagen Hero Izquierda"
          className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover object-left"
        />
      ) : (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 50%, ${p.heroSecondaryBg} 0%, ${p.heroBg} 75%)`,
          }}
        />
      )}

      {/* Difuminado hacia la DERECHA para que la foto brille a la izquierda y el texto se lea a la derecha */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(270deg, ${p.heroBg} 0%, ${p.heroBg}EE 38%, ${p.heroBg}99 58%, transparent 100%)`,
        }}
      />

      {/* Línea superior de color */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1.5"
        style={{
          background: `linear-gradient(90deg, ${p.lightAccentHex}, ${p.primaryHex}, ${p.lightAccentHex})`,
        }}
      />

      {/* Zona IZQUIERDA para subir la foto de portada */}
      <div
        data-export-ignore={image ? "true" : undefined}
        contentEditable={false}
        onClick={(e) => {
          e.stopPropagation();
          inputRef.current?.click();
        }}
        style={{ borderColor: p.lightAccentHex }}
        className={`absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer transition-all ${
          image
            ? "opacity-0 hover:opacity-100 bg-black/80 border rounded-xl px-3 py-2 text-xs"
            : "w-[210px] sm:w-[235px] h-[220px] rounded-2xl border-2 border-dashed bg-black/45 hover:bg-black/60 flex flex-col items-center justify-center text-center p-4 gap-2"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={onSelectFile}
          className="hidden"
        />
        <ImagePlus className="size-7" style={{ color: p.lightAccentHex }} />
        <span className="font-heading text-xs font-bold text-white leading-snug">
          {image
            ? "Cambiar foto izquierda"
            : "Tu Foto 1 (Izquierda) va aquí"}
        </span>
        {!image && (
          <span className="font-sans text-[11px] text-white/75 leading-tight">
            Haz clic para subir imagen (se difumina hacia la derecha)
          </span>
        )}
      </div>

      {/* Contenido editorial alineado a la DERECHA */}
      <div className="relative z-10 w-full max-w-[650px] mx-auto flex justify-end">
        <div className="max-w-[345px] sm:max-w-[360px] space-y-4 text-left">
          <div>
            <img
              src={assetUrl(logoUrl)}
              alt="Glocation"
              className="h-13 sm:h-15 w-auto object-contain -ml-2 -my-1.5"
            />
          </div>

          <div className="space-y-3">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-[10.5px] font-heading font-bold uppercase tracking-wider border"
              style={{
                backgroundColor: `${p.primaryHex}33`,
                borderColor: `${p.lightAccentHex}66`,
                color: p.lightAccentHex,
              }}
            >
              <Sparkles className="size-3" />
              [Etiqueta superior · Layout Invertido]
            </span>

            <h1 className="font-heading text-[22px] sm:text-[25px] font-extrabold tracking-tight leading-[1.2]">
              <span className="block text-white">
                [Aquí va el titular principal alineado a la derecha.]
              </span>
              <span
                className="block mt-1"
                style={{ color: p.lightAccentHex }}
              >
                [Aquí va tu segunda línea
                <br />
                con color de acento.]
              </span>
            </h1>

            <p className="font-sans text-[13.5px] sm:text-[14px] text-white/90 font-normal leading-[1.5]">
              [Aquí va el párrafo de introducción de 3 líneas. Explica el
              contexto principal mientras la imagen luce al lado izquierdo.]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InvertedZigZagBlock1({
  theme = "light",
  palette = "violet",
}: {
  theme?: "light" | "dark";
  palette?: EmailColorPalette;
}) {
  const isDark = theme === "dark";
  const p = EMAIL_PALETTES[palette];
  const { image, inputRef, onSelectFile } = useImageUpload();

  return (
    <section
      className="px-6 py-7 sm:px-10 sm:py-9 border-b transition-colors duration-300"
      style={{
        backgroundColor: isDark ? p.darkSurface : "#FFFFFF",
        borderColor: isDark ? p.darkBorder : "#EDE9FE",
        color: isDark ? "#FFFFFF" : "#140E24",
      }}
    >
      <div className="max-w-[650px] mx-auto grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
        {/* IZQUIERDA (5 cols): FOTO 1 GRANDE CON MARCO INVERTIDO */}
        <div
          contentEditable={false}
          onClick={(e) => {
            e.stopPropagation();
            inputRef.current?.click();
          }}
          style={{
            backgroundColor: isDark ? p.darkCard : p.invertedCardBgLight,
            borderColor: p.primaryHex,
          }}
          className="sm:col-span-5 relative min-h-[230px] rounded-2xl border-2 overflow-hidden cursor-pointer group flex flex-col justify-between p-4 text-white shadow-md"
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={onSelectFile}
            className="hidden"
          />
          {image ? (
            <>
              <img
                src={image}
                alt="Foto Izquierda"
                className="
                  absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105
                "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </>
          ) : (
            <div className="my-auto flex flex-col items-center justify-center text-center gap-2 py-6">
              <div
                className="size-11 rounded-full flex items-center justify-center border border-dashed"
                style={{
                  backgroundColor: `${p.primaryHex}33`,
                  borderColor: p.lightAccentHex,
                }}
              >
                <ImagePlus
                  className="size-5"
                  style={{ color: p.lightAccentHex }}
                />
              </div>
              <span className="font-heading text-xs font-bold text-white">
                [Tu Foto Izquierda va aquí]
              </span>
              <span className="font-sans text-[11px] text-white/75 leading-tight px-2">
                Haz clic para subir foto del reto, equipo o producto
              </span>
            </div>
          )}

          <div className="relative z-10 mt-auto pt-2">
            <span
              contentEditable
              suppressContentEditableWarning
              onClick={(e) => e.stopPropagation()}
              className="inline-block rounded-md px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: p.primaryHex }}
            >
              [Pie de Foto 1 · Editable]
            </span>
          </div>
        </div>

        {/* DERECHA (7 cols): TEXTO Y DOS PUNTOS CLAVE */}
        <div
          className="sm:col-span-7 rounded-2xl border p-5 flex flex-col justify-between"
          style={{
            backgroundColor: isDark ? p.darkCard : p.softBgLight,
            borderColor: isDark ? p.darkBorder : p.softBorderLight,
          }}
        >
          <div className="space-y-2.5">
            <span
              className="font-heading text-[10.5px] font-extrabold uppercase tracking-[0.14em]"
              style={{ color: isDark ? p.lightAccentHex : p.primaryHex }}
            >
              [01 · Imagen a la izquierda + Texto a la derecha]
            </span>
            <h2 className="font-heading text-[18px] sm:text-[19px] font-extrabold leading-[1.22]">
              [Aquí va el título del primer bloque con foto a la izquierda]
            </h2>
            <p
              className={`font-sans text-[12.5px] leading-[1.5] ${
                isDark ? "text-white/80" : "text-slate-600"
              }`}
            >
              [Aquí va la explicación de 2 o 3 líneas que acompaña la primera
              fotografía. Ideal para presentar el contexto o problema actual.]
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 pt-3 mt-3 border-t border-black/10 dark:border-white/10">
            <div className="flex items-start gap-2.5">
              <CheckCircle2
                className="size-4 shrink-0 mt-0.5"
                style={{ color: isDark ? p.lightAccentHex : p.primaryHex }}
              />
              <p className="font-sans text-[12px] leading-[1.35]">
                <strong className="font-heading font-bold">
                  [Punto clave 1]:
                </strong>{" "}
                [Descripción breve en una línea de apoyo.]
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2
                className="size-4 shrink-0 mt-0.5"
                style={{ color: isDark ? p.lightAccentHex : p.primaryHex }}
              />
              <p className="font-sans text-[12px] leading-[1.35]">
                <strong className="font-heading font-bold">
                  [Punto clave 2]:
                </strong>{" "}
                [Descripción breve en una línea de apoyo.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InvertedZigZagBlock2({
  theme = "light",
  palette = "violet",
}: {
  theme?: "light" | "dark";
  palette?: EmailColorPalette;
}) {
  const isDark = theme === "dark";
  const p = EMAIL_PALETTES[palette];
  const { image, inputRef, onSelectFile } = useImageUpload();

  return (
    <section
      className="px-6 py-7 sm:px-10 sm:py-9 border-b transition-colors duration-300"
      style={{
        backgroundColor: isDark ? p.darkSurface : "#F8FAFC",
        borderColor: isDark ? p.darkBorder : "#E2E8F0",
        color: isDark ? "#FFFFFF" : "#0F172A",
      }}
    >
      <div className="max-w-[650px] mx-auto grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
        {/* IZQUIERDA (7 cols): TEXTO Y TARJETAS DE COLOR INVERTIDAS */}
        <div
          className="sm:col-span-7 rounded-2xl border p-5 flex flex-col justify-between"
          style={{
            backgroundColor: isDark ? p.darkCard : "#FFFFFF",
            borderColor: isDark ? p.darkBorder : p.softBorderLight,
          }}
        >
          <div className="space-y-2">
            <span
              className="font-heading text-[10.5px] font-extrabold uppercase tracking-[0.14em]"
              style={{ color: isDark ? p.lightAccentHex : p.primaryHex }}
            >
              [02 · Posición Invertida: Texto a la izquierda + Foto a la derecha]
            </span>
            <h3 className="font-heading text-[18px] sm:text-[19px] font-extrabold leading-[1.22]">
              [Aquí va el título del segundo bloque en zig-zag]
            </h3>
          </div>

          <div className="space-y-2 my-3">
            {[
              {
                label: "[Beneficio o entregable 1]",
                badge: "[Estado 1]",
                bg: p.primaryHex,
              },
              {
                label: "[Beneficio o entregable 2]",
                badge: "[Estado 2]",
                bg: "#0284C7",
              },
              {
                label: "[Beneficio o entregable 3]",
                badge: "[Estado 3]",
                bg: "#059669",
              },
            ].map((row, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-2 rounded-xl px-3 py-2 border"
                style={{
                  backgroundColor: isDark ? p.darkSurface : p.softBgLight,
                  borderColor: isDark ? p.darkBorder : p.softBorderLight,
                }}
              >
                <span className="font-sans text-[12px] font-semibold">
                  {row.label}
                </span>
                <span
                  className="rounded-full px-2.5 py-0.5 text-[10.5px] font-heading font-bold text-white shrink-0"
                  style={{ backgroundColor: row.bg }}
                >
                  {row.badge}
                </span>
              </div>
            ))}
          </div>

          <p
            className={`font-sans text-[12px] leading-[1.4] ${
              isDark ? "text-white/75" : "text-slate-600"
            }`}
          >
            [Aquí va una frase de cierre o respaldo para el bloque invertido.]
          </p>
        </div>

        {/* DERECHA (5 cols): FOTO 2 INVERTIDA */}
        <div
          contentEditable={false}
          onClick={(e) => {
            e.stopPropagation();
            inputRef.current?.click();
          }}
          style={{
            backgroundColor: p.primaryHex,
            borderColor: p.lightAccentHex,
          }}
          className="sm:col-span-5 relative min-h-[230px] rounded-2xl border-2 overflow-hidden cursor-pointer group flex flex-col justify-between p-4 text-white shadow-md"
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={onSelectFile}
            className="hidden"
          />
          {image ? (
            <>
              <img
                src={image}
                alt="Foto Derecha"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </>
          ) : (
            <div className="my-auto flex flex-col items-center justify-center text-center gap-2 py-6">
              <div className="size-11 rounded-full bg-white/15 border border-dashed border-white flex items-center justify-center">
                <ImagePlus className="size-5 text-white" />
              </div>
              <span className="font-heading text-xs font-bold text-white">
                [Tu Foto Derecha va aquí]
              </span>
              <span className="font-sans text-[11px] text-white/85 leading-tight px-2">
                Haz clic para subir la segunda foto (posición invertida)
              </span>
            </div>
          )}

          <div className="relative z-10 mt-auto pt-2 flex justify-end">
            <span
              contentEditable
              suppressContentEditableWarning
              onClick={(e) => e.stopPropagation()}
              className="inline-block rounded-md px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-wider bg-black/65 text-white backdrop-blur-xs"
            >
              [Pie de Foto 2 · Editable]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
 * VARIANTE 2: DOS FOTOS EN CONTRASTE + BLOQUES DE COLOR INVERTIDOS
 * ========================================================================== */

export function DualColorHeroBlock({
  palette = "cyan",
  logoUrl = "/Logotipo  SL Versión Negativo (1).png",
}: {
  palette?: EmailColorPalette;
  logoUrl?: string;
}) {
  const p = EMAIL_PALETTES[palette];
  const { image, inputRef, onSelectFile } = useImageUpload();

  return (
    <div
      className="relative overflow-hidden text-white px-8 py-10 sm:px-10 sm:py-12"
      style={{
        background: `linear-gradient(135deg, ${p.heroBg} 0%, ${p.heroSecondaryBg} 100%)`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1.5"
        style={{ backgroundColor: p.lightAccentHex }}
      />

      <div className="relative z-10 max-w-[650px] mx-auto grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        {/* Columna izquierda editorial */}
        <div className="sm:col-span-7 space-y-4">
          <img
            src={assetUrl(logoUrl)}
            alt="Glocation"
            className="h-13 sm:h-14 w-auto object-contain -ml-2 -my-1"
          />
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-[10.5px] font-heading font-bold uppercase tracking-wider"
            style={{
              backgroundColor: p.primaryHex,
              color: "#FFFFFF",
            }}
          >
            <Layers className="size-3" />
            [Apertura Bicolor · Paleta {p.label}]
          </span>
          <h1 className="font-heading text-[22px] sm:text-[25px] font-extrabold leading-[1.18] tracking-tight">
            <span className="block text-white">
              [Aquí va tu titular principal con alto contraste.]
            </span>
            <span
              className="block mt-1"
              style={{ color: p.lightAccentHex }}
            >
              [Aquí va el subtítulo en color de acento.]
            </span>
          </h1>
          <p className="font-sans text-[13px] sm:text-[13.5px] text-white/85 leading-[1.5]">
            [Aquí va el resumen ejecutivo de 2 o 3 líneas. Puedes cambiar la
            paleta de colores arriba entre Violeta, Cian, Esmeralda o Coral.]
          </p>
        </div>

        {/* Columna derecha: Tarjeta con color invertido para foto destacada */}
        <div
          contentEditable={false}
          onClick={(e) => {
            e.stopPropagation();
            inputRef.current?.click();
          }}
          style={{
            backgroundColor: p.primaryHex,
            borderColor: p.lightAccentHex,
          }}
          className="sm:col-span-5 relative min-h-[215px] rounded-2xl border-2 overflow-hidden cursor-pointer flex flex-col items-center justify-center text-center p-4 shadow-lg group"
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={onSelectFile}
            className="hidden"
          />
          {image ? (
            <img
              src={image}
              alt="Portada"
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="space-y-2 p-2">
              <div className="size-11 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                <ImagePlus className="size-6 text-white" />
              </div>
              <p className="font-heading text-xs font-bold text-white">
                [Tu Imagen Principal va aquí]
              </p>
              <p className="font-sans text-[11px] text-white/85 leading-tight">
                Haz clic para subir foto o ilustración
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function DualPhotosContrastBlock({
  theme = "light",
  palette = "cyan",
}: {
  theme?: "light" | "dark";
  palette?: EmailColorPalette;
}) {
  const isDark = theme === "dark";
  const p = EMAIL_PALETTES[palette];
  const photoLeft = useImageUpload();
  const photoRight = useImageUpload();

  return (
    <section
      className="px-6 py-7 sm:px-10 sm:py-9 border-b transition-colors duration-300"
      style={{
        backgroundColor: isDark ? p.darkSurface : "#FFFFFF",
        borderColor: isDark ? p.darkBorder : "#E2E8F0",
      }}
    >
      <div className="max-w-[650px] mx-auto space-y-5">
        <div className="space-y-1.5">
          <span
            className="font-heading text-[10.5px] font-extrabold uppercase tracking-[0.14em]"
            style={{ color: isDark ? p.lightAccentHex : p.primaryHex }}
          >
            [Dos Fotos con Colores Invertidos · Comparativa / Antes y Después]
          </span>
          <h2
            className={`font-heading text-[19px] sm:text-[21px] font-extrabold leading-[1.2] ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            [Aquí va el título para comparar dos escenarios o dos soluciones]
          </h2>
        </div>

        {/* 2 TARJETAS LADO A LADO CON COLORES INVERTIDOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Tarjeta 1: Fondo Oscuro / Color Primario Invertido */}
          <div
            className="rounded-2xl p-5 flex flex-col justify-between gap-4 border-2 shadow-sm"
            style={{
              backgroundColor: p.invertedCardBgLight,
              borderColor: p.primaryHex,
              color: p.invertedCardTextLight,
            }}
          >
            <div
              contentEditable={false}
              onClick={(e) => {
                e.stopPropagation();
                photoLeft.inputRef.current?.click();
              }}
              className="relative h-[145px] w-full rounded-xl border border-dashed border-white/40 bg-white/10 hover:bg-white/15 overflow-hidden cursor-pointer flex flex-col items-center justify-center text-center p-3"
            >
              <input
                ref={photoLeft.inputRef}
                type="file"
                accept="image/*"
                onChange={photoLeft.onSelectFile}
                className="hidden"
              />
              {photoLeft.image ? (
                <img
                  src={photoLeft.image}
                  alt="Foto 1"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <>
                  <ImagePlus
                    className="size-6 mb-1"
                    style={{ color: p.lightAccentHex }}
                  />
                  <span className="font-heading text-xs font-bold text-white">
                    [Sube aquí Foto 1 · Fondo Oscuro]
                  </span>
                </>
              )}
            </div>

            <div className="space-y-1.5">
              <span
                className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-heading font-bold uppercase"
                style={{
                  backgroundColor: p.primaryHex,
                  color: "#FFFFFF",
                }}
              >
                [Etiqueta Columna 1]
              </span>
              <h3 className="font-heading text-[16px] font-extrabold text-white leading-snug">
                [Título de la primera tarjeta en color oscuro]
              </h3>
              <p className="font-sans text-[12px] text-white/85 leading-[1.45]">
                [Descripción de 2 líneas para explicar la primera imagen o
                situación inicial con contraste invertido.]
              </p>
            </div>
          </div>

          {/* Tarjeta 2: Fondo Claro / Acento Invertido */}
          <div
            className="rounded-2xl p-5 flex flex-col justify-between gap-4 border-2 shadow-sm"
            style={{
              backgroundColor: isDark ? p.primaryHex : p.softBgLight,
              borderColor: isDark ? p.lightAccentHex : p.primaryHex,
              color: isDark ? "#FFFFFF" : "#0F172A",
            }}
          >
            <div
              contentEditable={false}
              onClick={(e) => {
                e.stopPropagation();
                photoRight.inputRef.current?.click();
              }}
              style={{
                borderColor: isDark ? "#FFFFFF66" : p.primaryHex,
              }}
              className="relative h-[145px] w-full rounded-xl border border-dashed bg-black/5 dark:bg-black/20 hover:opacity-90 overflow-hidden cursor-pointer flex flex-col items-center justify-center text-center p-3"
            >
              <input
                ref={photoRight.inputRef}
                type="file"
                accept="image/*"
                onChange={photoRight.onSelectFile}
                className="hidden"
              />
              {photoRight.image ? (
                <img
                  src={photoRight.image}
                  alt="Foto 2"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <>
                  <ImagePlus
                    className="size-6 mb-1"
                    style={{
                      color: isDark ? "#FFFFFF" : p.primaryHex,
                    }}
                  />
                  <span className="font-heading text-xs font-bold">
                    [Sube aquí Foto 2 · Color Invertido]
                  </span>
                </>
              )}
            </div>

            <div className="space-y-1.5">
              <span
                className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-heading font-bold uppercase"
                style={{
                  backgroundColor: isDark ? "#00000044" : p.primaryHex,
                  color: "#FFFFFF",
                }}
              >
                [Etiqueta Columna 2]
              </span>
              <h3 className="font-heading text-[16px] font-extrabold leading-snug">
                [Título de la segunda tarjeta en contraste]
              </h3>
              <p
                className={`font-sans text-[12px] leading-[1.45] ${
                  isDark ? "text-white/90" : "text-slate-700"
                }`}
              >
                [Descripción de 2 líneas para explicar la segunda imagen o el
                resultado alcanzado.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DualColorMetricsBlock({
  theme = "light",
  palette = "cyan",
}: {
  theme?: "light" | "dark";
  palette?: EmailColorPalette;
}) {
  const isDark = theme === "dark";
  const p = EMAIL_PALETTES[palette];

  return (
    <section
      className="px-6 py-7 sm:px-10 sm:py-9 border-b transition-colors duration-300"
      style={{
        backgroundColor: isDark ? p.darkCard : "#F8FAFC",
        borderColor: isDark ? p.darkBorder : "#E2E8F0",
      }}
    >
      <div className="max-w-[650px] mx-auto space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span
              className="font-heading text-[10.5px] font-extrabold uppercase tracking-[0.14em]"
              style={{ color: isDark ? p.lightAccentHex : p.primaryHex }}
            >
              [Bloques de Color Alternados · Impacto y Resultados]
            </span>
            <h3
              className={`font-heading text-[18px] sm:text-[20px] font-extrabold leading-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              [Aquí va el titular de métricas o pilares clave]
            </h3>
          </div>
          <span
            className="self-start sm:self-center rounded-full px-3 py-1 text-[10.5px] font-heading font-bold text-white"
            style={{ backgroundColor: p.primaryHex }}
          >
            [3 Pilares Editables]
          </span>
        </div>

        {/* 3 tarjetas con colores invertidos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div
            className="rounded-xl p-4 text-white space-y-1.5 shadow-xs"
            style={{ backgroundColor: p.primaryHex }}
          >
            <Zap className="size-5 text-white" />
            <div className="font-heading text-[15px] font-extrabold leading-tight">
              [Pilar o Dato 1]
            </div>
            <p className="font-sans text-[11.5px] text-white/90 leading-[1.35]">
              [Dos líneas de descripción con fondo de color primario.]
            </p>
          </div>

          <div
            className="rounded-xl p-4 text-white space-y-1.5 shadow-xs"
            style={{ backgroundColor: p.invertedCardBgLight }}
          >
            <ShieldCheck
              className="size-5"
              style={{ color: p.lightAccentHex }}
            />
            <div className="font-heading text-[15px] font-extrabold leading-tight">
              [Pilar o Dato 2]
            </div>
            <p className="font-sans text-[11.5px] text-white/85 leading-[1.35]">
              [Dos líneas de descripción con fondo oscuro contrastado.]
            </p>
          </div>

          <div
            className="rounded-xl p-4 space-y-1.5 border-2 shadow-xs"
            style={{
              backgroundColor: isDark ? p.darkSurface : p.softBgLight,
              borderColor: p.primaryHex,
              color: isDark ? "#FFFFFF" : "#0F172A",
            }}
          >
            <Sparkles
              className="size-5"
              style={{ color: isDark ? p.lightAccentHex : p.primaryHex }}
            />
            <div className="font-heading text-[15px] font-extrabold leading-tight">
              [Pilar o Dato 3]
            </div>
            <p
              className={`font-sans text-[11.5px] leading-[1.35] ${
                isDark ? "text-white/80" : "text-slate-700"
              }`}
            >
              [Dos líneas de descripción con fondo claro y borde de color.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
 * CTA ADAPTABLE A LA PALETA DE COLOR SELECCIONADA
 * ========================================================================== */

export function PaletteCtaBlock({
  theme = "light",
  palette = "violet",
  mailtoLink,
}: {
  theme?: "light" | "dark";
  palette?: EmailColorPalette;
  mailtoLink: string;
}) {
  const isDark = theme === "dark";
  const p = EMAIL_PALETTES[palette];

  return (
    <section
      className="px-6 py-7 sm:px-10 sm:py-9 transition-colors duration-300"
      style={{
        backgroundColor: isDark ? p.darkSurface : "#FFFFFF",
      }}
    >
      <div
        className="max-w-[650px] mx-auto rounded-2xl border-2 p-6 sm:p-8 text-center space-y-4"
        style={{
          backgroundColor: isDark ? p.darkCard : p.softBgLight,
          borderColor: isDark ? p.primaryHex : p.softBorderLight,
        }}
      >
        <span
          className="inline-block rounded-full px-3.5 py-1 text-[11px] font-heading font-bold uppercase tracking-wider text-white"
          style={{ backgroundColor: p.primaryHex }}
        >
          [Etiqueta de cierre · Ej. Reunión virtual · 20 minutos]
        </span>

        <h2
          className={`font-heading text-[20px] sm:text-[23px] font-extrabold leading-tight max-w-[520px] mx-auto ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          [Aquí va tu pregunta o invitación de cierre para agendar reunión]
        </h2>

        <p
          className={`font-sans text-[13px] sm:text-[14px] max-w-[500px] mx-auto leading-[1.5] ${
            isDark ? "text-white/85" : "text-slate-600"
          }`}
        >
          [Aquí va el texto de apoyo explicando qué verán en la sesión y el
          beneficio directo para el destinatario.]
        </p>

        <div className="pt-1">
          <a
            href={mailtoLink}
            style={{ backgroundColor: p.primaryHex }}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-heading text-xs sm:text-sm font-bold text-white shadow-md hover:opacity-95 transition-opacity"
          >
            <span>[Texto del botón principal de acción]</span>
            <ArrowRight className="size-4" />
          </a>
        </div>

        <p
          className={`font-sans text-[11.5px] ${
            isDark ? "text-white/70" : "text-slate-500"
          }`}
        >
          [Texto secundario · Ej. Responda a este correo y le compartiré dos
          opciones de horario.]
        </p>
      </div>
    </section>
  );
}
