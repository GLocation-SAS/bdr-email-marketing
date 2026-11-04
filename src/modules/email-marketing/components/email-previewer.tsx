"use client";

import * as React from "react";
import Link from "next/link";
import { toCanvas } from "html-to-image";
import {
  Laptop,
  Smartphone,
  FileDown,
  Building2,
  Sparkles,
  ImageDown,
  Loader2,
  Sun,
  Moon,
  PenLine,
  RotateCcw,
  Palette,
  LayoutTemplate,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { JefesTiEmailConfig } from "../templates/jefes-ti-template";
import { EmailHeroBlock } from "./email-hero-block";
import { EmailTransformationBlock } from "./email-transformation-block";
import { EmailApplicationsBlock } from "./email-applications-block";
import { EmailCtaBlock } from "./email-cta-block";
import { EmailFooterBlock } from "./email-footer-block";
import {
  EMAIL_PALETTES,
  EmailColorPalette,
  EmailTemplateVariant,
  InvertedHeroBlock,
  InvertedZigZagBlock1,
  InvertedZigZagBlock2,
  DualColorHeroBlock,
  DualPhotosContrastBlock,
  DualColorMetricsBlock,
  PaletteCtaBlock,
} from "./email-template-variants";

type BlockKey = "hero" | "concept" | "application" | "cta";

interface EmailPartMeta {
  id: BlockKey;
  step: string;
  title: string;
  description: string;
  filename: string;
}

const EMAIL_PARTS: EmailPartMeta[] = [
  {
    id: "hero",
    step: "Bloque 1",
    title: "Hero — Proyectos y Operación TIC",
    description:
      "Etiqueta institucional y titular en dos mitades de tensión.",
    filename: "01-glocation-bloque-hero.png",
  },
  {
    id: "concept",
    step: "Bloque 2",
    title: "El Concepto — Ampliar la capacidad",
    description:
      "Herramientas sueltas a personas vs. flujo de proceso con Trabajador Cognitivo integrado.",
    filename: "02-glocation-bloque-concepto.png",
  },
  {
    id: "application",
    step: "Bloque 3",
    title: "Aplicación Práctica — Seguimiento de Proyectos",
    description:
      "Caso concreto de Resumen de seguimiento y valor para el equipo TIC.",
    filename: "03-glocation-bloque-aplicacion.png",
  },
  {
    id: "cta",
    step: "Bloque 4",
    title: "CTA — Reunión 20 min y Firma Comercial",
    description:
      "Invitación a explorar una oportunidad en su oficina TIC y firma de Paula Rozo.",
    filename: "04-glocation-bloque-cta.png",
  },
];

/**
 * Convierte todas las imágenes dentro de un contenedor a Data URLs base64
 * antes de exportar para evitar fallos con espacios, tildes, paréntesis o SVGs.
 */
async function inlineImagesInElement(root: HTMLElement): Promise<() => void> {
  const imgs = Array.from(root.querySelectorAll("img"));
  const restorers: Array<() => void> = [];

  await Promise.all(
    imgs.map(async (img) => {
      const originalSrc = img.getAttribute("src") || "";
      if (!originalSrc || originalSrc.startsWith("data:")) return;

      try {
        const resolvedUrl = new URL(originalSrc, window.location.origin).href;
        const response = await fetch(resolvedUrl);
        if (!response.ok) return;
        const blob = await response.blob();
        const dataUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () =>
            typeof reader.result === "string"
              ? resolve(reader.result)
              : reject(new Error("Empty result"));
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });

        img.setAttribute("src", dataUrl);
        restorers.push(() => {
          img.setAttribute("src", originalSrc);
        });
      } catch {
        // Si alguna imagen falla al pre-cargar, se conserva su src original
      }
    })
  );

  return () => {
    restorers.forEach((restore) => restore());
  };
}

/**
 * Renderiza un elemento DOM a un HTMLCanvasElement de alta resolución,
 * ignorando controles flotantes y con fallback seguro de fuentes.
 */
async function renderElementToCanvas(
  element: HTMLElement,
  backgroundColor: string,
  pixelRatio = 2
): Promise<HTMLCanvasElement> {
  const restoreImages = await inlineImagesInElement(element);

  const filterNode = (node: HTMLElement | Node) => {
    if (
      node instanceof HTMLElement &&
      node.dataset?.exportIgnore === "true"
    ) {
      return false;
    }
    return true;
  };

  try {
    try {
      return await toCanvas(element, {
        pixelRatio,
        backgroundColor,
        filter: filterNode,
      });
    } catch {
      return await toCanvas(element, {
        pixelRatio,
        backgroundColor,
        skipFonts: true,
        filter: filterNode,
      });
    }
  } finally {
    restoreImages();
  }
}

/**
 * Construye un archivo PDF 1.4 válido de una sola página continua
 * con las proporciones exactas del canvas renderizado.
 */
function buildPdfBlobFromCanvas(canvas: HTMLCanvasElement): Blob {
  const imgWidth = canvas.width;
  const imgHeight = canvas.height;
  const jpegDataUrl = canvas.toDataURL("image/jpeg", 0.96);
  const base64Data = jpegDataUrl.split(",")[1];
  const binaryStr = window.atob(base64Data);
  const jpegBytes = new Uint8Array(binaryStr.length);
  for (let i = 0; i < binaryStr.length; i++) {
    jpegBytes[i] = binaryStr.charCodeAt(i);
  }

  const pageWidth = 595;
  const pageHeight = Math.max(
    200,
    Math.round((imgHeight / imgWidth) * pageWidth)
  );

  const encoder = new TextEncoder();
  const chunks: Uint8Array[] = [];
  const offsets: number[] = [0];
  let currentOffset = 0;

  const pushStr = (str: string) => {
    const bytes = encoder.encode(str);
    chunks.push(bytes);
    currentOffset += bytes.length;
  };

  const pushBytes = (bytes: Uint8Array) => {
    chunks.push(bytes);
    currentOffset += bytes.length;
  };

  const startObj = () => {
    offsets.push(currentOffset);
  };

  pushStr("%PDF-1.4\n%\xFF\xFF\xFF\xFF\n");

  startObj();
  pushStr("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");

  startObj();
  pushStr("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");

  startObj();
  pushStr(
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /XObject << /Im0 4 0 R >> >> /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Contents 5 0 R >>\nendobj\n`
  );

  startObj();
  pushStr(
    `4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${imgWidth} /Height ${imgHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>\nstream\n`
  );
  pushBytes(jpegBytes);
  pushStr("\nendstream\nendobj\n");

  const contentStream = `q\n${pageWidth} 0 0 ${pageHeight} 0 0 cm\n/Im0 Do\nQ\n`;
  startObj();
  pushStr(
    `5 0 obj\n<< /Length ${contentStream.length} >>\nstream\n${contentStream}endstream\nendobj\n`
  );

  const xrefOffset = currentOffset;
  pushStr(`xref\n0 ${offsets.length}\n0000000000 65535 f \n`);
  for (let i = 1; i < offsets.length; i++) {
    pushStr(`${String(offsets[i]).padStart(10, "0")} 00000 n \n`);
  }
  pushStr(
    `trailer\n<< /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`
  );

  return new Blob(chunks as BlobPart[], { type: "application/pdf" });
}

function triggerBlobDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export interface EmailPreviewerProps {
  isTemplate?: boolean;
  templateVariant?: EmailTemplateVariant;
  defaultPalette?: EmailColorPalette;
  campaignTitle?: string;
  campaignSegment?: string;
}

export function EmailPreviewer({
  isTemplate = false,
  templateVariant = "base",
  defaultPalette = "violet",
  campaignTitle,
  campaignSegment,
}: EmailPreviewerProps = {}) {
  const [device, setDevice] = React.useState<"desktop" | "mobile">("desktop");
  const [emailTheme, setEmailTheme] = React.useState<"light" | "dark">("light");
  const [activeVariant, setActiveVariant] =
    React.useState<EmailTemplateVariant>(templateVariant);
  const [palette, setPalette] =
    React.useState<EmailColorPalette>(defaultPalette);
  const [downloadingId, setDownloadingId] = React.useState<string | null>(null);
  const [resetKey, setResetKey] = React.useState(0);

  const fullEmailRef = React.useRef<HTMLDivElement | null>(null);
  const partRefs = React.useRef<Record<BlockKey, HTMLDivElement | null>>({
    hero: null,
    concept: null,
    application: null,
    cta: null,
  });

  const config: JefesTiEmailConfig = {
    recipientEmail: "contacto@glocation.com",
    emailSubject:
      "Explorar una oportunidad en mi oficina TIC - Reunión 20 min Glocation",
    emailBody:
      "Hola Paula, me gustaría recibir dos opciones de horario para la reunión virtual de 20 minutos sobre Trabajadores Cognitivos.\n\nSaludos cordiales,",
    senderPhotoUrl: "/paula_natalia_rozo (4).png",
    senderEyebrow: "HABLEMOS",
    senderName: "Paula Rozo",
    senderRole: "BDR | Business Development Representative",
    senderMessage:
      "Estaré pendiente de su respuesta para coordinar una reunión con nuestro equipo.",
    companyTagline: "Construimos capacidad cognitiva",
    linkedinUrl: "https://www.linkedin.com/company/glocation/",
    websiteUrl: "https://glocation.co",
    unsubscribeUrl: "/email-marketing/baja",
  };

  const mailtoTestUrl = `mailto:${config.recipientEmail}?subject=${encodeURIComponent(
    config.emailSubject || ""
  )}&body=${encodeURIComponent(config.emailBody || "")}`;

  const bgColor = emailTheme === "dark" ? "#120A24" : "#FFFFFF";
  const themeSuffix = emailTheme === "dark" ? "oscuro" : "claro";

  const downloadElementAsPng = async (
    element: HTMLElement | null,
    filename: string,
    loadingKey: string
  ) => {
    if (!element) {
      toast.error("No se encontró el bloque para exportar");
      return;
    }

    const themedFilename = filename.replace(".png", `-${themeSuffix}.png`);

    try {
      setDownloadingId(loadingKey);
      const canvas = await renderElementToCanvas(element, bgColor, 2);
      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, "image/png")
      );
      if (!blob) throw new Error("No se pudo crear el archivo PNG");

      triggerBlobDownload(blob, themedFilename);
      toast.success("Imagen PNG descargada (2x HD)", {
        description: themedFilename,
      });
    } catch {
      toast.error("Error al generar la imagen PNG");
    } finally {
      setDownloadingId(null);
    }
  };

  const downloadElementAsPdf = async (
    element: HTMLElement | null,
    filename: string,
    loadingKey: string
  ) => {
    if (!element) {
      toast.error("No se encontró el bloque para exportar a PDF");
      return;
    }

    const themedFilename = filename.replace(".png", `-${themeSuffix}.pdf`);

    try {
      setDownloadingId(loadingKey);
      const canvas = await renderElementToCanvas(element, bgColor, 2.2);
      const pdfBlob = buildPdfBlobFromCanvas(canvas);
      triggerBlobDownload(pdfBlob, themedFilename);

      toast.success("PDF descargado correctamente", {
        description: themedFilename,
      });
    } catch {
      toast.error("Error al generar el PDF");
    } finally {
      setDownloadingId(null);
    }
  };

  const handleDownloadFullPng = async () => {
    if (!fullEmailRef.current) {
      toast.error("No se encontró el email completo para exportar");
      return;
    }
    await downloadElementAsPng(
      fullEmailRef.current,
      "glocation-email-completo.png",
      "full-email"
    );
  };

  const handleDownloadPdf = async () => {
    if (!fullEmailRef.current) {
      toast.error("No se encontró el email completo para exportar a PDF");
      return;
    }
    await downloadElementAsPdf(
      fullEmailRef.current,
      "glocation-email-completo.png",
      "full-pdf"
    );
  };

  const handleDownloadAllPartsPng = async () => {
    try {
      setDownloadingId("all-parts");
      toast.info(
        `Generando los 4 bloques en PNG (${emailTheme === "dark" ? "Versión Oscura" : "Versión Clara"})...`,
        {
          description: "Cada bloque se descargará automáticamente.",
        }
      );

      for (const part of EMAIL_PARTS) {
        const el = partRefs.current[part.id];
        if (el) {
          const canvas = await renderElementToCanvas(el, bgColor, 2);
          const blob = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve, "image/png")
          );
          if (blob) {
            triggerBlobDownload(
              blob,
              part.filename.replace(".png", `-${themeSuffix}.png`)
            );
            await new Promise((r) => setTimeout(r, 300));
          }
        }
      }

      toast.success("¡Los 4 bloques fueron descargados en PNG!");
    } catch {
      toast.error("Error al descargar los bloques en PNG");
    } finally {
      setDownloadingId(null);
    }
  };

  const renderPartComponent = (id: BlockKey) => {
    if (isTemplate && activeVariant === "inverted-photos") {
      switch (id) {
        case "hero":
          return <InvertedHeroBlock palette={palette} />;
        case "concept":
          return <InvertedZigZagBlock1 theme={emailTheme} palette={palette} />;
        case "application":
          return <InvertedZigZagBlock2 theme={emailTheme} palette={palette} />;
        case "cta":
          return (
            <>
              <PaletteCtaBlock
                mailtoLink={mailtoTestUrl}
                theme={emailTheme}
                palette={palette}
              />
              <EmailFooterBlock
                theme={emailTheme}
                isTemplate
                senderPhotoUrl={config.senderPhotoUrl}
                senderEyebrow={config.senderEyebrow}
                senderName={config.senderName}
                senderRole={config.senderRole}
                senderMessage={config.senderMessage}
                companyTagline={config.companyTagline}
                websiteUrl={config.websiteUrl}
                linkedinUrl={config.linkedinUrl}
                unsubscribeUrl={config.unsubscribeUrl}
              />
            </>
          );
      }
    }

    if (isTemplate && activeVariant === "dual-color") {
      switch (id) {
        case "hero":
          return <DualColorHeroBlock palette={palette} />;
        case "concept":
          return (
            <DualPhotosContrastBlock theme={emailTheme} palette={palette} />
          );
        case "application":
          return <DualColorMetricsBlock theme={emailTheme} palette={palette} />;
        case "cta":
          return (
            <>
              <PaletteCtaBlock
                mailtoLink={mailtoTestUrl}
                theme={emailTheme}
                palette={palette}
              />
              <EmailFooterBlock
                theme={emailTheme}
                isTemplate
                senderPhotoUrl={config.senderPhotoUrl}
                senderEyebrow={config.senderEyebrow}
                senderName={config.senderName}
                senderRole={config.senderRole}
                senderMessage={config.senderMessage}
                companyTagline={config.companyTagline}
                websiteUrl={config.websiteUrl}
                linkedinUrl={config.linkedinUrl}
                unsubscribeUrl={config.unsubscribeUrl}
              />
            </>
          );
      }
    }

    switch (id) {
      case "hero":
        return <EmailHeroBlock theme={emailTheme} isTemplate={isTemplate} />;
      case "concept":
        return (
          <EmailTransformationBlock
            theme={emailTheme}
            isTemplate={isTemplate}
          />
        );
      case "application":
        return (
          <EmailApplicationsBlock theme={emailTheme} isTemplate={isTemplate} />
        );
      case "cta":
        return (
          <>
            <EmailCtaBlock
              mailtoLink={mailtoTestUrl}
              theme={emailTheme}
              isTemplate={isTemplate}
            />
            <EmailFooterBlock
              theme={emailTheme}
              isTemplate={isTemplate}
              senderPhotoUrl={config.senderPhotoUrl}
              senderEyebrow={config.senderEyebrow}
              senderName={config.senderName}
              senderRole={config.senderRole}
              senderMessage={config.senderMessage}
              companyTagline={config.companyTagline}
              websiteUrl={config.websiteUrl}
              linkedinUrl={config.linkedinUrl}
              unsubscribeUrl={config.unsubscribeUrl}
            />
          </>
        );
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="size-8 rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/email-marketing">Email Marketing</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {campaignTitle ||
                  (isTemplate
                    ? "Plantilla Editable: 4 Bloques B2B"
                    : "Campaña: Jefes de Oficinas TIC")}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Cabecera organizada y alineada a la izquierda */}
      <Card
        glow="primary-info"
        size="sm"
        disableHover
        innerClassName="!items-stretch !text-left !py-5 !px-6"
      >
        <CardContent className="w-full p-0 flex flex-col lg:flex-row lg:items-center justify-between gap-5 text-left">
          {/* Izquierda: Etiquetas en 1 línea + Título en 1 línea + Descripción */}
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="primary" className="text-xs font-semibold">
                {isTemplate ? "Plantilla Editable" : "Campaña B2B"}
              </Badge>
              <Badge variant="neutral" className="text-xs">
                <Building2 className="w-3 h-3 mr-1 inline" />
                {campaignSegment ||
                  (isTemplate
                    ? "Estructura Base para Nuevas Campañas"
                    : "Jefes TIC Sector Público")}
              </Badge>
              <Badge variant="success" className="text-xs">
                <Sparkles className="w-3 h-3 mr-1 inline" />
                4 Bloques · 740px
              </Badge>
              {isTemplate && (
                <Badge variant="info" className="text-xs font-semibold">
                  <PenLine className="w-3 h-3 mr-1 inline" />
                  Clic en cualquier texto para editar
                </Badge>
              )}
            </div>

            <h1 className="text-xl md:text-2xl font-heading font-bold text-foreground text-left leading-tight">
              {campaignTitle ||
                (isTemplate
                  ? "Plantilla Base Editable: 4 Bloques B2B"
                  : "Email Marketing: Jefes de Oficinas TIC")}
            </h1>

            <p className="text-xs md:text-sm text-muted-foreground text-left">
              {isTemplate
                ? "Haz clic directamente sobre cualquier título, párrafo, fila o botón para escribir tu contenido y descárgalo en PDF o PNG."
                : "Visualización por bloques con descarga directa en PDF y PNG."}
            </p>
          </div>

          {/* Derecha: Fila 1 (Modo Claro/Oscuro + Ancho) y Fila 2 (Descargas PDF y PNG) */}
          <div className="flex flex-col sm:items-start lg:items-end gap-2.5 shrink-0">
            {/* Fila 1: Controles de vista */}
            <div className="flex items-center gap-2 flex-wrap">
              <ToggleGroup
                type="single"
                variant="outline"
                size="sm"
                value={emailTheme}
                onValueChange={(val) => {
                  if (val === "light" || val === "dark") setEmailTheme(val);
                }}
                className="bg-surface"
              >
                <ToggleGroupItem
                  value="light"
                  className="text-xs gap-1.5 px-3 font-semibold"
                >
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  Versión Clara
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="dark"
                  className="text-xs gap-1.5 px-3 font-semibold"
                >
                  <Moon className="w-3.5 h-3.5 text-primary" />
                  Versión Oscura
                </ToggleGroupItem>
              </ToggleGroup>

              <ToggleGroup
                type="single"
                variant="outline"
                size="sm"
                value={device}
                onValueChange={(val) => {
                  if (val === "desktop" || val === "mobile") setDevice(val);
                }}
                className="bg-surface"
              >
                <ToggleGroupItem
                  value="desktop"
                  className="text-xs gap-1.5 px-3 font-semibold"
                >
                  <Laptop className="w-3.5 h-3.5" />
                  740px
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="mobile"
                  className="text-xs gap-1.5 px-3 font-semibold"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  375px
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Fila 2: Botones de descarga */}
            <div className="flex items-center gap-2 flex-wrap">
              <Button
                variant="primary"
                size="sm"
                onClick={handleDownloadPdf}
                disabled={downloadingId !== null}
                leftIcon={
                  downloadingId === "full-pdf" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <FileDown className="w-4 h-4" />
                  )
                }
                className="w-auto text-xs font-semibold"
              >
                Descargar PDF
              </Button>

              <Button
                variant="neutral"
                size="sm"
                onClick={handleDownloadFullPng}
                disabled={downloadingId !== null}
                leftIcon={
                  downloadingId === "full-email" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ImageDown className="w-4 h-4" />
                  )
                }
                className="w-auto text-xs font-medium"
              >
                PNG Completo
              </Button>

              <Button
                variant="neutral"
                size="sm"
                onClick={handleDownloadAllPartsPng}
                disabled={downloadingId !== null}
                leftIcon={
                  downloadingId === "all-parts" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ImageDown className="w-4 h-4" />
                  )
                }
                className="w-auto text-xs font-medium"
              >
                Descargar 4 Bloques (.png)
              </Button>

              {isTemplate && (
                <Button
                  variant="neutral"
                  size="sm"
                  onClick={() => {
                    setResetKey((prev) => prev + 1);
                    toast.success("Textos restablecidos a la plantilla base");
                  }}
                  leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
                  className="w-auto text-xs font-medium"
                >
                  Restablecer textos
                </Button>
              )}
            </div>
          </div>
        </CardContent>

        {/* Barra de Diseño y Paleta de Color en modo Plantilla */}
        {isTemplate && (
          <div className="w-full mt-4 pt-4 border-t border-border/60 flex flex-col xl:flex-row xl:items-center justify-between gap-3">
            {/* Selector de estructura de plantilla */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-muted-foreground mr-1">
                <LayoutTemplate className="size-3.5 text-primary" />
                Diseño:
              </span>
              <ToggleGroup
                type="single"
                variant="outline"
                size="sm"
                value={activeVariant}
                onValueChange={(val) => {
                  if (
                    val === "base" ||
                    val === "inverted-photos" ||
                    val === "dual-color"
                  ) {
                    setActiveVariant(val);
                  }
                }}
                className="bg-surface flex-wrap"
              >
                <ToggleGroupItem
                  value="base"
                  className="text-xs px-3 font-semibold"
                >
                  Clásica B2B
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="inverted-photos"
                  className="text-xs px-3 font-semibold"
                >
                  2 Fotos Invertidas (Zig-Zag)
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="dual-color"
                  className="text-xs px-3 font-semibold"
                >
                  2 Fotos + Bloques de Color
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Selector de paleta de color */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-muted-foreground mr-1">
                <Palette className="size-3.5 text-primary" />
                Color:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {(Object.keys(EMAIL_PALETTES) as EmailColorPalette[]).map(
                  (key) => {
                    const p = EMAIL_PALETTES[key];
                    const isSelected = palette === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          setPalette(key);
                          if (activeVariant === "base" && key !== "violet") {
                            setActiveVariant("inverted-photos");
                          }
                        }}
                        className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold border transition-all cursor-pointer ${
                          isSelected
                            ? "border-primary bg-primary/15 text-foreground shadow-xs"
                            : "border-border bg-surface text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span
                          className="size-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: p.dotColor }}
                        />
                        <span>{p.label}</span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* VISTA ÚNICA POR BLOQUES (con contenedor completo para exportar todo a PDF o PNG) */}
      <div
        className={`p-4 md:p-6 rounded-xl border border-border overflow-x-auto transition-colors duration-300 ${emailTheme === "dark" ? "bg-[#0B0617]" : "bg-[#F3F1F8]"
          }`}
      >
        <div
          key={resetKey}
          ref={fullEmailRef}
          className={`mx-auto space-y-1.5 transition-all duration-300 ${device === "desktop" ? "w-[740px]" : "w-[375px]"
            }`}
        >
          {EMAIL_PARTS.map((part) => {
            const isDownloadingPng = downloadingId === part.id;
            const isDownloadingPdf = downloadingId === `${part.id}-pdf`;
            return (
              <div
                key={part.id}
                className={`group relative transition-all duration-300 rounded-md overflow-hidden border ${emailTheme === "dark"
                  ? "bg-[#120A24] border-[#2D1E52]"
                  : "bg-white border-[#E5E0F0]"
                  }`}
              >
                {/* Acciones por bloque visibles al pasar el cursor (ignoradas al exportar PDF/PNG) */}
                <div
                  data-export-ignore="true"
                  className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto focus-within:opacity-100 focus-within:pointer-events-auto transition-all duration-200 absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-white/95 dark:bg-[#1A1033]/95 backdrop-blur-md border border-[#E5E0F0] dark:border-[#3B276B] rounded-full px-2 py-1.5 shadow-lg"
                >
                  <Button
                    variant="neutral"
                    size="sm"
                    disabled={downloadingId !== null}
                    onClick={() =>
                      downloadElementAsPdf(
                        partRefs.current[part.id],
                        part.filename,
                        `${part.id}-pdf`
                      )
                    }
                    leftIcon={
                      isDownloadingPdf ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <FileDown className="w-3.5 h-3.5" />
                      )
                    }
                    className="w-auto h-7 text-[11px] px-2.5 font-semibold rounded-full"
                  >
                    PDF
                  </Button>

                  <Button
                    variant="primary"
                    size="sm"
                    disabled={downloadingId !== null}
                    onClick={() =>
                      downloadElementAsPng(
                        partRefs.current[part.id],
                        part.filename,
                        part.id
                      )
                    }
                    leftIcon={
                      isDownloadingPng ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <ImageDown className="w-3.5 h-3.5" />
                      )
                    }
                    className="w-auto h-7 text-[11px] px-3 font-semibold rounded-full"
                  >
                    {isDownloadingPng ? "Exportando..." : "Descargar PNG"}
                  </Button>
                </div>

                <div
                  ref={(el) => {
                    partRefs.current[part.id] = el;
                  }}
                  contentEditable={isTemplate}
                  suppressContentEditableWarning={isTemplate}
                  onClick={(e) => {
                    if (isTemplate) {
                      const target = e.target as HTMLElement;
                      if (target.closest("a")) {
                        e.preventDefault();
                      }
                    }
                  }}
                  className={`${
                    emailTheme === "dark" ? "bg-[#120A24]" : "bg-white"
                  } ${
                    isTemplate
                      ? "outline-none focus:ring-2 focus:ring-primary/40 cursor-text"
                      : ""
                  }`}
                >
                  {renderPartComponent(part.id)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
