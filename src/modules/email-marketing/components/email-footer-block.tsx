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
      className={`relative overflow-hidden px-6 py-5 sm:px-8 sm:py-6 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-r from-[#090514] via-[#120A28] to-[#1A0E3A] text-white"
          : "bg-white text-[#140E24]"
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

              {/* Cursor manito con destellito de clic sobre la foto de Paula */}
              <svg
                aria-hidden="true"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  filter: "drop-shadow(0px 2px 4px rgba(20, 14, 36, 0.38))",
                }}
                className="pointer-events-none absolute -bottom-1.5 -right-2 z-20 size-7 sm:size-[30px] -rotate-12"
              >
                {/* Destellitos de clic alrededor de la punta del dedo */}
                <path
                  d="M14 2.2V5.4M7.2 4.6L9.6 6.9M4.5 11.2L7.7 11.8M20.8 4.6L18.4 6.9"
                  stroke="#FFFFFF"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M14 2.2V5.4M7.2 4.6L9.6 6.9M4.5 11.2L7.7 11.8M20.8 4.6L18.4 6.9"
                  stroke="#7C3AED"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                />
                {/* Estrella de destello sutil */}
                <path
                  d="M23.8 8.2L24.5 10.1L26.4 10.8L24.5 11.5L23.8 13.4L23.1 11.5L21.2 10.8L23.1 10.1L23.8 8.2Z"
                  fill="#A855F7"
                  stroke="#FFFFFF"
                  strokeWidth="0.9"
                  strokeLinejoin="round"
                />
                {/* Manito cursor (Pointer Hand) */}
                <path
                  d="M14 7.5C12.78 7.5 11.8 8.48 11.8 9.7V19.2L9.45 17.35C8.42 16.54 6.92 16.68 6.06 17.67C5.29 18.56 5.36 19.9 6.22 20.71L12.65 26.85C13.88 28.02 15.52 28.68 17.22 28.68H21.4C24.6 28.68 27.2 26.08 27.2 22.88V16.6C27.2 15.44 26.26 14.5 25.1 14.5C24.68 14.5 24.29 14.62 23.96 14.84C23.75 13.84 22.87 13.1 21.8 13.1C21.34 13.1 20.91 13.24 20.56 13.49C20.25 12.56 19.38 11.9 18.35 11.9C17.63 11.9 16.99 12.23 16.58 12.75V9.7C16.58 8.48 15.42 7.5 14 7.5Z"
                  fill="#FFFFFF"
                  stroke="#4C1D95"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Líneas internas de los dedos */}
                <path
                  d="M16.58 12.75V17.4M20.56 13.49V17.8M23.96 14.84V18.2"
                  stroke="#4C1D95"
                  strokeWidth="1.65"
                  strokeLinecap="round"
                />
              </svg>
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
