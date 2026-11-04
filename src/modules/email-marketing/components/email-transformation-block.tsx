"use client";

import * as React from "react";
import { Workflow, ArrowRight, ImagePlus } from "lucide-react";
import { assetUrl } from "@/lib/utils";

interface EmailTransformationBlockProps {
  theme?: "light" | "dark";
  imageProcessUrl?: string;
  imageTeamUrl?: string;
  isTemplate?: boolean;
}

const ISOLATED_TOOLS = [
  { name: "ChatGPT", src: "/chatgpt_gris_circular.png" },
  { name: "Gemini", src: "/gemini_gris_circular.png" },
  { name: "Excel", src: "/excel_gris_circular.png" },
];

export function EmailTransformationBlock({
  theme = "light",
  imageProcessUrl = "/1.png",
  imageTeamUrl = "/2.png",
  isTemplate = false,
}: EmailTransformationBlockProps) {
  const isDark = theme === "dark";
  const [customNode1Img, setCustomNode1Img] = React.useState<string | null>(
    null
  );
  const [customNode2Img, setCustomNode2Img] = React.useState<string | null>(
    null
  );
  const input1Ref = React.useRef<HTMLInputElement | null>(null);
  const input2Ref = React.useRef<HTMLInputElement | null>(null);

  const handleFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (val: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") setter(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={`px-8 py-7 sm:px-12 sm:py-8 border-b transition-colors duration-300 ${
        isDark
          ? "bg-[#120A24] border-[#261746] text-white"
          : "bg-white border-[#EFEBF7] text-[#140E24]"
      }`}
    >
      <div className="max-w-[650px] mx-auto space-y-5">
        {/* Encabezado editorial limpio */}
        <div className="space-y-2 text-center max-w-[600px] mx-auto">
          <h2
            className={`font-heading text-[19px] sm:text-[23px] font-extrabold tracking-tight leading-[1.24] sm:whitespace-nowrap ${
              isDark ? "text-white" : "text-[#140E24]"
            }`}
          >
            {isTemplate
              ? "[Aquí va el título del concepto],"
              : "Ampliar la capacidad,"}{" "}
            <span className={isDark ? "text-[#C084FC]" : "text-[#7C3AED]"}>
              {isTemplate
                ? "[aquí el diferencial clave]"
                : "no repartir herramientas."}
            </span>
          </h2>

          <p
            className={`font-sans text-[14px] sm:text-[14.5px] leading-[1.62] ${
              isDark ? "text-[#D4C7EC]" : "text-[#4B5563]"
            }`}
          >
            {isTemplate ? (
              "[Aquí va el párrafo que explica cómo funciona tu propuesta de valor y cómo se articula con el equipo o proceso del destinatario.]"
            ) : (
              <>
                En Glocation diseñamos{" "}
                <strong
                  className={`font-bold ${
                    isDark ? "text-white" : "text-[#140E24]"
                  }`}
                >
                  Trabajadores Cognitivos
                </strong>{" "}
                para incorporarse a procesos organizacionales con funciones
                definidas, conocimiento institucional y supervisión humana.
              </>
            )}
          </p>
        </div>

        {/* Diagrama comparativo: Uso aislado vs Transformación Cognitiva */}
        <div className="flex flex-col sm:flex-row items-stretch gap-3">
          {/* COLUMNA IZQUIERDA: USO AISLADO (ChatGPT, Gemini, Excel desde public/) */}
          <div
            className={`sm:w-[41%] rounded-2xl p-4 flex flex-col gap-3 border ${
              isDark
                ? "bg-[#170E2B]/75 border-[#2A1B47]"
                : "bg-[#F7F6FA] border-[#E4E1EC]"
            }`}
          >
            <div>
              <span
                className={`font-heading text-[10px] font-bold uppercase tracking-wider block ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {isTemplate ? "[Etiqueta antes]" : "USO AISLADO"}
              </span>
              <h3
                className={`font-heading text-[14px] font-bold mt-0.5 leading-snug ${
                  isDark ? "text-slate-200" : "text-slate-700"
                }`}
              >
                {isTemplate
                  ? "[Título situación actual]"
                  : "Herramientas individuales"}
              </h3>
            </div>

            <div
              className={`flex-1 flex flex-col justify-between rounded-xl border border-dashed px-3 py-3.5 gap-3 ${
                isDark
                  ? "bg-[#120B22] border-slate-700"
                  : "bg-white border-slate-300"
              }`}
            >
              {/* Logos circulares de ChatGPT, Gemini y Excel desde public/ */}
              <div className="flex items-center justify-around gap-2 my-auto">
                {ISOLATED_TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center text-center shrink-0"
                  >
                    <span className="relative flex size-10 items-center justify-center rounded-full overflow-hidden border border-slate-400/60 bg-[#D6D6D6] shadow-2xs">
                      <img
                        src={assetUrl(tool.src)}
                        alt={tool.name}
                        className="size-full object-cover scale-[1.12]"
                      />
                    </span>
                    <span
                      className={`font-heading text-[10.5px] font-bold mt-1.5 leading-tight whitespace-nowrap ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className={`pt-2 border-t text-center ${
                  isDark ? "border-slate-800" : "border-slate-200"
                }`}
              >
                <p
                  className={`font-sans text-[11px] leading-[1.38] ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {isTemplate
                    ? "[Aquí va la limitación actual]"
                    : "Consultas, documentos y seguimientos gestionados por separado."}
                </p>
              </div>
            </div>
          </div>

          {/* Flecha de evolución */}
          <div className="flex items-center justify-center shrink-0 py-0.5 sm:py-0">
            <div className="flex size-8 items-center justify-center rounded-full bg-[#7C3AED] text-white shadow-xs ring-4 ring-[#7C3AED]/15">
              <ArrowRight className="size-4 rotate-90 sm:rotate-0 stroke-[2.5]" />
            </div>
          </div>

          {/* COLUMNA DERECHA: TRANSFORMACIÓN COGNITIVA */}
          <div
            className={`relative overflow-hidden sm:flex-1 rounded-2xl border-2 p-4 flex flex-col gap-3 ${
              isDark
                ? "bg-gradient-to-br from-[#24124D] via-[#1D0E3D] to-[#2E1660] border-[#7C3AED] shadow-[0_10px_28px_rgba(124,58,237,0.22)]"
                : "bg-gradient-to-br from-[#F6F0FF] via-[#FAF7FF] to-[#EFE4FF] border-[#C4B5FD] shadow-[0_10px_28px_rgba(124,58,237,0.12)]"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <span
                  className={`inline-flex items-center gap-1.5 font-heading text-[10px] font-extrabold uppercase tracking-wider block ${
                    isDark ? "text-[#D8B4FE]" : "text-[#6D28D9]"
                  }`}
                >
                  <span className="size-1.5 rounded-full bg-[#7C3AED]" />
                  {isTemplate
                    ? "[Etiqueta propuesta]"
                    : "TRANSFORMACIÓN COGNITIVA"}
                </span>
                <h3
                  className={`font-heading text-[14px] font-extrabold mt-0.5 leading-snug ${
                    isDark ? "text-white" : "text-[#140E24]"
                  }`}
                >
                  {isTemplate
                    ? "[Título de tu solución]"
                    : "IA integrada a un proceso"}
                </h3>
              </div>
              <span className="rounded-full px-2.5 py-0.5 font-heading text-[10px] font-extrabold bg-[#7C3AED] text-white shrink-0">
                GLocation
              </span>
            </div>

            {/* Flujo limpio de 3 nodos + texto de apoyo + frase final */}
            <div
              className={`flex-1 flex flex-col justify-between rounded-xl border px-3.5 py-3.5 gap-2.5 ${
                isDark
                  ? "bg-[#150A2B]/95 border-[#581C87]"
                  : "bg-white border-[#C4B5FD]"
              }`}
            >
              <div className="flex items-center justify-around gap-1 my-auto">
                {/* Nodo 1 */}
                <div className="flex flex-col items-center text-center shrink-0">
                  <span
                    className={`flex size-10 items-center justify-center rounded-full border ${
                      isDark
                        ? "bg-[#2A1554] text-[#D8B4FE] border-[#58329E]"
                        : "bg-[#F3E8FF] text-[#7C3AED] border-[#DDD6FE]"
                    }`}
                  >
                    <Workflow className="size-4.5" />
                  </span>
                  <span
                    className={`text-[10.5px] font-semibold mt-1.5 leading-tight whitespace-nowrap ${
                      isDark ? "text-purple-100" : "text-[#140E24]"
                    }`}
                  >
                    {isTemplate ? "[Paso 1]" : "Proceso TIC"}
                  </span>
                </div>

                <ArrowRight
                  className={`size-4 shrink-0 stroke-[2.2] ${
                    isDark ? "text-[#C084FC]" : "text-[#7C3AED]"
                  }`}
                />

                {/* Nodo 2 */}
                <div className="flex flex-col items-center text-center shrink-0">
                  <span
                    contentEditable={false}
                    onClick={(e) => {
                      if (isTemplate) {
                        e.stopPropagation();
                        input1Ref.current?.click();
                      }
                    }}
                    className={`relative flex size-10 items-center justify-center rounded-full bg-white border-2 border-[#7C3AED] ring-2 ring-[#7C3AED]/20 overflow-hidden ${
                      isTemplate ? "cursor-pointer hover:opacity-85" : ""
                    }`}
                    title={isTemplate ? "Haz clic para subir imagen" : undefined}
                  >
                    <input
                      ref={input1Ref}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFile(e, setCustomNode1Img)}
                      className="hidden"
                    />
                    {isTemplate && !customNode1Img ? (
                      <ImagePlus className="size-4 text-[#7C3AED]" />
                    ) : (
                      <img
                        src={assetUrl(
                          isTemplate
                            ? customNode1Img || imageProcessUrl
                            : imageProcessUrl
                        )}
                        alt="Nodo 2"
                        className="size-full object-cover object-top"
                      />
                    )}
                  </span>
                  <span
                    className={`text-[10.5px] font-extrabold mt-1.5 leading-tight whitespace-nowrap ${
                      isDark ? "text-[#D8B4FE]" : "text-[#6D28D9]"
                    }`}
                  >
                    {isTemplate ? "[Paso 2 · Tu imagen]" : "Trabajador Cognitivo"}
                  </span>
                </div>

                <ArrowRight
                  className={`size-4 shrink-0 stroke-[2.2] ${
                    isDark ? "text-[#C084FC]" : "text-[#7C3AED]"
                  }`}
                />

                {/* Nodo 3 */}
                <div className="flex flex-col items-center text-center shrink-0">
                  <span
                    contentEditable={false}
                    onClick={(e) => {
                      if (isTemplate) {
                        e.stopPropagation();
                        input2Ref.current?.click();
                      }
                    }}
                    className={`relative flex size-10 items-center justify-center rounded-full border-2 overflow-hidden ${
                      isDark
                        ? "bg-[#2A1554] border-[#C084FC]"
                        : "bg-[#F3E8FF] border-[#A855F7]"
                    } ${isTemplate ? "cursor-pointer hover:opacity-85" : ""}`}
                    title={isTemplate ? "Haz clic para subir imagen" : undefined}
                  >
                    <input
                      ref={input2Ref}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFile(e, setCustomNode2Img)}
                      className="hidden"
                    />
                    {isTemplate && !customNode2Img ? (
                      <ImagePlus className="size-4 text-[#7C3AED]" />
                    ) : (
                      <img
                        src={assetUrl(
                          isTemplate
                            ? customNode2Img || imageTeamUrl
                            : imageTeamUrl
                        )}
                        alt="Nodo 3"
                        className="size-full object-cover object-top"
                      />
                    )}
                  </span>
                  <span
                    className={`text-[10.5px] font-extrabold mt-1.5 leading-tight whitespace-nowrap ${
                      isDark ? "text-white" : "text-[#140E24]"
                    }`}
                  >
                    {isTemplate ? "[Paso 3 · Tu imagen]" : "Equipo TIC"}
                  </span>
                </div>
              </div>

              <div
                className={`pt-2 border-t text-center ${
                  isDark ? "border-[#3B1D6E]" : "border-[#EDE9FE]"
                }`}
              >
                <p
                  className={`font-sans text-[11px] leading-[1.38] ${
                    isDark ? "text-[#E9D5FF]/90" : "text-[#4B5563]"
                  }`}
                >
                  {isTemplate
                    ? "[Aquí va el texto de apoyo del flujo integrado.]"
                    : "Un Trabajador Cognitivo apoya actividades definidas con información autorizada y supervisión humana."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
