"use client";

import * as React from "react";
import {
  FileText,
  FolderSearch,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  UserCheck,
  ImagePlus,
} from "lucide-react";
import { assetUrl } from "@/lib/utils";

interface EmailApplicationsBlockProps {
  theme?: "light" | "dark";
  imageAgentUrl?: string;
  isTemplate?: boolean;
}

export function EmailApplicationsBlock({
  theme = "light",
  imageAgentUrl = "/1.png",
  isTemplate = false,
}: EmailApplicationsBlockProps) {
  const isDark = theme === "dark";
  const [customAvatar, setCustomAvatar] = React.useState<string | null>(null);
  const avatarInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") setCustomAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const summaryRows = isTemplate
    ? [
        {
          label: "[Aquí va el primer entregable o ítem]",
          status: "[Estado 1]",
          tone: "blue" as const,
        },
        {
          label: "[Aquí va el segundo entregable o ítem]",
          status: "[Estado 2]",
          tone: "orange" as const,
        },
        {
          label: "[Aquí va el tercer entregable o ítem]",
          status: "[Estado 3]",
          tone: "green" as const,
        },
      ]
    : [
        {
          label: "Compromisos pendientes",
          status: "Por revisar",
          tone: "blue" as const,
        },
        {
          label: "Entregables próximos",
          status: "Por verificar",
          tone: "orange" as const,
        },
        {
          label: "Responsables y fechas",
          status: "Identificados",
          tone: "green" as const,
        },
      ];

  const governanceItems = isTemplate
    ? [
        {
          icon: FolderSearch,
          verb: "[Punto clave 1 va aquí:]",
          rest: "[detalle breve en segunda línea.]",
          tone: "blue" as const,
        },
        {
          icon: UserCheck,
          verb: "[Punto clave 2 va aquí:]",
          rest: "[detalle breve en segunda línea.]",
          tone: "purple" as const,
        },
      ]
    : [
        {
          icon: FolderSearch,
          verb: "Información autorizada:",
          rest: "fuentes oficiales de su entidad.",
          tone: "blue" as const,
        },
        {
          icon: UserCheck,
          verb: "Revisión humana:",
          rest: "insumos listos para validar.",
          tone: "purple" as const,
        },
      ];

  return (
    <div
      className={`px-8 py-8 sm:px-12 sm:py-10 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-[#130C26] via-[#11152E] to-[#130A26]"
          : "bg-gradient-to-b from-[#F8FAFC] via-[#F4F7FB] to-[#F5F2FF]"
      }`}
    >
      <div className="max-w-[650px] mx-auto space-y-5">
        {/* Encabezado Editorial + Situación reconocible */}
        <div className="space-y-2.5">
          <h2
            className={`font-heading text-[22px] sm:text-[26px] font-extrabold tracking-tight leading-[1.2] ${
              isDark ? "text-white" : "text-[#140E24]"
            }`}
          >
            {isTemplate
              ? "[Aquí va el título del caso práctico]"
              : "Imagine esta posibilidad"}{" "}
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? "from-[#C084FC] via-[#A855F7] to-[#38BDF8]"
                  : "from-[#7C3AED] via-[#6D28D9] to-[#0284C7]"
              }`}
            >
              {isTemplate ? "[en su entidad]" : "en su oficina"}
            </span>
          </h2>

          <p
            className={`font-sans text-[13px] sm:text-[13.5px] leading-[1.5] sm:whitespace-nowrap ${
              isDark ? "text-[#CBD5E1]" : "text-[#334155]"
            }`}
          >
            {isTemplate
              ? "[Aquí va la situación reconocible o necesidad concreta que vive el destinatario.]"
              : "Necesita conocer qué compromisos y entregables de sus proyectos tecnológicos requieren revisión."}
          </p>
        </div>

        {/* Composición protagonista */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
          {/* Elemento Protagonista (7 cols) */}
          <div
            className={`sm:col-span-7 rounded-2xl border overflow-hidden flex flex-col justify-between ${
              isDark
                ? "bg-[#0F172A]/95 border-[#1E3A5F]"
                : "bg-white border-[#CBD5E1] shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
            }`}
          >
            {/* Barra superior de ventana */}
            <div
              className={`flex items-center justify-between gap-2 px-4 py-2.5 border-b ${
                isDark
                  ? "bg-[#162038] border-[#233554]"
                  : "bg-gradient-to-r from-[#EFF6FF] via-[#F1F5F9] to-[#F5F3FF] border-[#E2E8F0]"
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="size-2.5 rounded-full bg-[#7C3AED]" />
                  <span className="size-2.5 rounded-full bg-[#0EA5E9]" />
                  <span className="size-2.5 rounded-full bg-[#94A3B8]" />
                </div>
                <span
                  className={`inline-flex items-center gap-1 font-heading text-[10.5px] font-bold truncate ${
                    isDark ? "text-[#CBD5E1]" : "text-[#334155]"
                  }`}
                >
                  <Sparkles className="size-3 text-[#0284C7] shrink-0" />
                  {isTemplate ? "[Etiqueta ventana]" : "Ejemplo Oficina TIC"}
                </span>
              </div>
            </div>

            {/* Cuerpo del caso concreto */}
            <div className="p-4 sm:p-5 space-y-3.5 flex-1 flex flex-col justify-between">
              <div
                className={`rounded-xl border p-3 flex items-start gap-3 ${
                  isDark
                    ? "bg-[#152238] border-[#23395B]"
                    : "bg-[#F8FAFC] border-[#E2E8F0]"
                }`}
              >
                <div
                  className={`flex size-9 items-center justify-center rounded-lg border shrink-0 mt-0.5 ${
                    isDark
                      ? "bg-[#0C4A6E]/60 border-[#0284C7] text-[#38BDF8]"
                      : "bg-[#E0F2FE] border-[#BAE6FD] text-[#0284C7]"
                  }`}
                >
                  <FileText className="size-4.5" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-heading text-[13.5px] font-extrabold leading-tight ${
                      isDark ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {isTemplate
                      ? "[Aquí va el título del caso o entregable]"
                      : "Seguimiento de proyectos tecnológicos"}
                  </h3>
                  <p
                    className={`font-sans text-[11.5px] mt-1 leading-[1.42] ${
                      isDark ? "text-[#CBD5E1]" : "text-[#475569]"
                    }`}
                  >
                    {isTemplate
                      ? "[Aquí describe en 2 o 3 líneas qué información organiza o procesa tu solución en este ejemplo.]"
                      : "Un Trabajador Cognitivo podría organizar la información registrada sobre compromisos, entregables y fechas de los proyectos institucionales."}
                  </p>
                </div>
              </div>

              {/* Bloque concreto: Tabla */}
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <span
                    className={`font-heading text-[11px] font-extrabold uppercase tracking-wider ${
                      isDark ? "text-[#7DD3FC]" : "text-[#0369A1]"
                    }`}
                  >
                    {isTemplate
                      ? "[Subtítulo de tabla]"
                      : "Resumen de seguimiento"}
                  </span>
                  <span
                    className={`font-heading text-[10px] font-bold uppercase tracking-wider ${
                      isDark ? "text-[#94A3B8]" : "text-[#64748B]"
                    }`}
                  >
                    {isTemplate ? "[Columna]" : "Estado"}
                  </span>
                </div>

                {summaryRows.map((row, idx) => {
                  const iconColor =
                    row.tone === "blue"
                      ? "text-[#0284C7]"
                      : row.tone === "orange"
                        ? "text-[#EA580C]"
                        : "text-[#059669]";

                  const badgeStyle =
                    row.tone === "blue"
                      ? isDark
                        ? "bg-[#0C4A6E]/70 border-[#0284C7] text-[#E0F2FE]"
                        : "bg-[#E0F2FE] border-[#7DD3FC] text-[#0369A1]"
                      : row.tone === "orange"
                        ? isDark
                          ? "bg-[#431407]/80 border-[#F97316] text-[#FFEDD5]"
                          : "bg-[#FFF7ED] border-[#FDBA74] text-[#C2410C]"
                        : isDark
                          ? "bg-[#064E3B]/80 border-[#10B981] text-[#D1FAE5]"
                          : "bg-[#ECFDF5] border-[#6EE7B7] text-[#047857]";

                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 border ${
                        isDark
                          ? "bg-[#131D31] border-[#22324C]"
                          : "bg-[#F8FAFC] border-[#E2E8F0]"
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <CheckCircle2
                          className={`size-3.5 shrink-0 ${iconColor}`}
                        />
                        <span
                          className={`font-sans text-[12px] font-semibold truncate ${
                            isDark ? "text-[#F1F5F9]" : "text-[#1E293B]"
                          }`}
                        >
                          {row.label}
                        </span>
                      </div>

                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-heading text-[10.5px] font-bold border whitespace-nowrap shrink-0 ${badgeStyle}`}
                      >
                        {row.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Columna derecha estructurada (5 cols) */}
          <div
            className={`sm:col-span-5 rounded-2xl border p-4 sm:p-5 flex flex-col justify-between gap-3.5 ${
              isDark
                ? "bg-[#13182E]/90 border-[#283558]"
                : "bg-white border-[#CBD5E1] shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
            }`}
          >
            <div className="space-y-3">
              <div
                className={`flex items-center gap-2.5 pb-2.5 border-b ${
                  isDark ? "border-[#233252]" : "border-[#E2E8F0]"
                }`}
              >
                <span
                  contentEditable={false}
                  onClick={(e) => {
                    if (isTemplate) {
                      e.stopPropagation();
                      avatarInputRef.current?.click();
                    }
                  }}
                  title={isTemplate ? "Haz clic para subir imagen" : undefined}
                  className={`relative flex size-11 items-center justify-center rounded-full bg-white border-2 border-[#0284C7] ring-2 ring-[#0EA5E9]/15 overflow-hidden shrink-0 ${
                    isTemplate ? "cursor-pointer hover:opacity-85" : ""
                  }`}
                >
                  <input
                    ref={avatarInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                  {isTemplate && !customAvatar ? (
                    <ImagePlus className="size-4 text-[#0284C7]" />
                  ) : (
                    <img
                      src={assetUrl(
                        isTemplate
                          ? customAvatar || imageAgentUrl
                          : imageAgentUrl
                      )}
                      alt="Trabajador Cognitivo"
                      className="size-full object-cover object-top"
                    />
                  )}
                </span>
                <div className="min-w-0">
                  <span
                    className={`block font-heading text-[9.5px] font-bold uppercase tracking-wider ${
                      isDark ? "text-[#38BDF8]" : "text-[#0284C7]"
                    }`}
                  >
                    {isTemplate ? "[Etiqueta derecha]" : "Valor para su gestión"}
                  </span>
                  <p
                    className={`font-heading text-[13.5px] font-extrabold leading-tight ${
                      isDark ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {isTemplate
                      ? "[¿Qué gana el cliente?]"
                      : "¿Qué gana el equipo TIC?"}
                  </p>
                </div>
              </div>

              <p
                className={`font-sans text-[12px] leading-[1.5] ${
                  isDark ? "text-[#E2E8F0]" : "text-[#334155]"
                }`}
              >
                {isTemplate ? (
                  "[Aquí va el párrafo explicando qué beneficio concreto obtiene el cliente y cómo facilita sus decisiones.]"
                ) : (
                  <>
                    Una{" "}
                    <strong
                      className={`font-heading font-extrabold ${
                        isDark ? "text-white" : "text-[#0F172A]"
                      }`}
                    >
                      base de información organizada
                    </strong>{" "}
                    para preparar el seguimiento, revisar pendientes y
                    concentrar esfuerzos en las decisiones que requieren
                    criterio humano.
                  </>
                )}
              </p>
            </div>

            {/* 3 bloques alineados de 2 líneas */}
            <div className="space-y-2 mt-auto">
              {governanceItems.map((item, idx) => {
                const Icon = item.icon;
                const isBlue = item.tone === "blue";
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 ${
                      isDark
                        ? "bg-[#0F172A]/85 border-[#22324C]"
                        : "bg-[#F8FAFC] border-[#E2E8F0]"
                    }`}
                  >
                    <span
                      className={`flex size-7 items-center justify-center rounded-lg border shrink-0 ${
                        isBlue
                          ? isDark
                            ? "bg-[#0C4A6E]/70 border-[#0284C7] text-[#38BDF8]"
                            : "bg-[#E0F2FE] border-[#BAE6FD] text-[#0284C7]"
                          : isDark
                            ? "bg-[#26144C] border-[#581C87] text-[#C084FC]"
                            : "bg-[#F3EEFF] border-[#DDD6FE] text-[#7C3AED]"
                      }`}
                    >
                      <Icon className="size-3.5" />
                    </span>
                    <span
                      className={`font-sans text-[11px] leading-[1.35] min-w-0 ${
                        isDark ? "text-[#CBD5E1]" : "text-[#334155]"
                      }`}
                    >
                      <strong
                        className={`block font-heading font-extrabold whitespace-nowrap ${
                          isDark ? "text-white" : "text-[#0F172A]"
                        }`}
                      >
                        {item.verb}
                      </strong>
                      <span className="block whitespace-nowrap">{item.rest}</span>
                    </span>
                  </div>
                );
              })}

              {/* Destaque de cierre en 2 líneas (Primary) */}
              <div
                className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 ${
                  isDark
                    ? "bg-[#2E1660]/70 border-[#7C3AED]"
                    : "bg-gradient-to-r from-[#F5F3FF] to-[#EDE9FE] border-[#C4B5FD]"
                }`}
              >
                <span
                  className={`flex size-7 items-center justify-center rounded-lg border shrink-0 ${
                    isDark
                      ? "bg-[#3B1D6E] border-[#A855F7] text-[#E9D5FF]"
                      : "bg-white border-[#C4B5FD] text-[#7C3AED]"
                  }`}
                >
                  <ShieldCheck className="size-3.5" />
                </span>
                <span
                  className={`font-heading text-[11px] font-extrabold leading-[1.35] min-w-0 ${
                    isDark ? "text-white" : "text-[#4C1D95]"
                  }`}
                >
                  <span className="block whitespace-nowrap">
                    {isTemplate
                      ? "[Garantía o cierre clave línea 1]"
                      : "Su equipo conserva el"}
                  </span>
                  <span className="block whitespace-nowrap">
                    {isTemplate
                      ? "[línea 2 destacada va aquí.]"
                      : "criterio y las decisiones."}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
