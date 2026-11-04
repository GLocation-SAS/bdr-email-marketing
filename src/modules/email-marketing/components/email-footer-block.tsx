"use client";

import * as React from "react";
import { ImagePlus } from "lucide-react";
import { assetUrl } from "@/lib/utils";

export interface EmailFooterBlockProps {
  logoUrl?: string;
  senderPhotoUrl?: string;
  senderEyebrow?: string;
  senderName?: string;
  senderRole?: string;
  senderMessage?: string;
  senderNameAndRole?: string;
  companyTagline?: string;
  websiteUrl?: string;
  linkedinUrl?: string;
  unsubscribeUrl?: string;
  unsubscribeMailto?: string;
  onUnsubscribeClick?: () => void;
  theme?: "light" | "dark";
  isTemplate?: boolean;
}

export function EmailFooterBlock({
  logoUrl,
  senderPhotoUrl = "/paula_natalia_rozo (4).png",
  senderName = "Paula Rozo",
  senderRole = "BDR | Business Development Representative",
  senderMessage = "Estaré pendiente de su respuesta para coordinar una reunión con nuestro equipo.",
  companyTagline = "Construimos capacidad cognitiva",
  websiteUrl = "https://glocation.co",
  linkedinUrl = "https://www.linkedin.com/company/glocation/",
  theme = "light",
  isTemplate = false,
}: EmailFooterBlockProps) {
  const isDark = theme === "dark";
  const [imgError, setImgError] = React.useState(false);
  const [customPhoto, setCustomPhoto] = React.useState<string | null>(null);
  const photoInputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    setImgError(false);
  }, [senderPhotoUrl]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") setCustomPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const resolvedLogo =
    logoUrl ||
    (isDark ? "/Logotipo  SL Versión Negativo (1).png" : "/LogotipoSL.svg");

  const trimmedWebsite = websiteUrl?.trim() || "";
  const trimmedLinkedin = linkedinUrl?.trim() || "";
  const cleanDomain = trimmedWebsite
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  const displaySenderName = isTemplate ? "[Tu Nombre y Apellido]" : senderName;
  const displaySenderRole = isTemplate
    ? "[Tu Cargo | Rol Comercial]"
    : senderRole;
  const displayTagline = isTemplate
    ? "[Aquí va el lema de marca]"
    : companyTagline;

  return (
    <footer
      className={`relative overflow-hidden border-t px-6 py-5 sm:px-8 sm:py-6 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-r from-[#090514] via-[#120A28] to-[#1A0E3A] border-[#2A1B4E]/80 text-white"
          : "bg-white border-[#EAE6F3] text-[#140E24]"
      }`}
    >
      {/* Destello sutil violeta solo en modo oscuro */}
      {isDark && (
        <>
          <div className="pointer-events-none absolute -top-16 left-1/4 h-32 w-56 rounded-full bg-[#7C3AED]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-10 h-32 w-56 rounded-full bg-[#A855F7]/12 blur-3xl" />
        </>
      )}

      {/* Contenedor estricto de 600px para proporción compacta con el email */}
      <div className="relative z-10 max-w-[600px] mx-auto">
        {/* Composición horizontal en desktop, vertical en móvil */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 sm:gap-5">
          {/* Izquierda: Fotografía circular + datos comerciales */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-3.5 min-w-0">
            <div className="relative shrink-0">
              <div
                contentEditable={false}
                onClick={(e) => {
                  if (isTemplate) {
                    e.stopPropagation();
                    photoInputRef.current?.click();
                  }
                }}
                title={isTemplate ? "Haz clic para subir tu foto" : undefined}
                className={`size-[72px] sm:size-[78px] rounded-full overflow-hidden border-2 border-[#A855F7] ring-2 ring-[#7C3AED]/15 flex items-center justify-center shadow-[0_4px_14px_rgba(124,58,237,0.18)] ${
                  isDark ? "bg-[#150B2E]" : "bg-[#F5F0FF]"
                } ${isTemplate ? "cursor-pointer hover:opacity-85" : ""}`}
              >
                <input
                  ref={photoInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                {isTemplate && !customPhoto ? (
                  <div className="flex flex-col items-center justify-center text-center p-1">
                    <ImagePlus
                      className={`size-4 ${
                        isDark ? "text-[#E9D5FF]" : "text-[#6D28D9]"
                      }`}
                    />
                    <span
                      className={`font-heading text-[8px] font-bold leading-none mt-0.5 ${
                        isDark ? "text-[#E9D5FF]" : "text-[#6D28D9]"
                      }`}
                    >
                      Tu foto
                    </span>
                  </div>
                ) : !imgError && (isTemplate ? customPhoto : senderPhotoUrl) ? (
                  <img
                    src={assetUrl(
                      (isTemplate ? customPhoto : senderPhotoUrl) ||
                        senderPhotoUrl
                    )}
                    alt={displaySenderName}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <span
                    className={`font-heading text-sm font-extrabold tracking-wider ${
                      isDark ? "text-[#E9D5FF]" : "text-[#6D28D9]"
                    }`}
                  >
                    PR
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-0.5 max-w-[350px]">
              <div
                className={`font-heading text-[15px] font-extrabold leading-tight ${
                  isDark ? "text-white" : "text-[#140E24]"
                }`}
              >
                {displaySenderName}
              </div>
              <div
                className={`font-sans text-[11.5px] font-semibold leading-snug ${
                  isDark ? "text-[#C4B5FD]" : "text-[#6D28D9]"
                }`}
              >
                {displaySenderRole}
              </div>
              <p
                className={`font-sans text-[11.5px] font-normal leading-[1.4] pt-0.5 ${
                  isDark ? "text-[#EDE9FE]/90" : "text-[#4B5563]"
                }`}
              >
                {isTemplate ? (
                  <>
                    <span className="sm:whitespace-nowrap">
                      [Aquí va tu mensaje de cierre línea 1
                    </span>
                    <br className="hidden sm:block" />{" "}
                    <span className="sm:whitespace-nowrap">
                      y aquí la segunda línea de despedida.]
                    </span>
                  </>
                ) : senderMessage.includes("una reunión") ? (
                  <>
                    <span className="sm:whitespace-nowrap">
                      {senderMessage.split("una reunión")[0].trim()}
                    </span>
                    <br className="hidden sm:block" />{" "}
                    <span className="sm:whitespace-nowrap">
                      una reunión{senderMessage.split("una reunión")[1]}
                    </span>
                  </>
                ) : (
                  senderMessage
                )}
              </p>
            </div>
          </div>

          {/* Derecha: Logotipo oficial de Glocation + lema + enlaces discretos si están configurados */}
          <div
            className={`flex flex-col items-center sm:items-end text-center sm:text-right shrink-0 gap-2 sm:pl-7 sm:py-1 sm:border-l ${
              isDark ? "sm:border-[#2E1C59]/80" : "sm:border-[#EAE4F7]"
            }`}
          >
            <img
              src={assetUrl(resolvedLogo)}
              alt="Glocation"
              className="h-11 sm:h-12 w-auto object-contain"
            />
            <span
              className={`font-sans text-[11.5px] font-medium tracking-wide leading-snug ${
                isDark ? "text-[#D8B4FE]" : "text-[#5B21B6]"
              }`}
            >
              {displayTagline}
            </span>

            {(trimmedWebsite || trimmedLinkedin) && (
              <div
                className={`flex items-center justify-center sm:justify-end gap-3 pt-1 font-sans text-[11.5px] ${
                  isDark ? "text-[#C4B5FD]" : "text-[#6D28D9]"
                }`}
              >
                {trimmedWebsite && (
                  <a
                    href={trimmedWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 font-semibold hover:underline transition-colors ${
                      isDark ? "hover:text-white" : "hover:text-[#4C1D95]"
                    }`}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`size-3.5 shrink-0 ${
                        isDark ? "text-[#C084FC]" : "text-[#7C3AED]"
                      }`}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                    <span>{cleanDomain}</span>
                  </a>
                )}

                {trimmedWebsite && trimmedLinkedin && (
                  <span className="text-[#A855F7]">·</span>
                )}

                {trimmedLinkedin && (
                  <a
                    href={trimmedLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 font-semibold hover:underline transition-colors ${
                      isDark ? "hover:text-white" : "hover:text-[#4C1D95]"
                    }`}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className={`size-3.5 fill-current shrink-0 ${
                        isDark ? "text-[#C084FC]" : "text-[#7C3AED]"
                      }`}
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    <span>GLocation</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
