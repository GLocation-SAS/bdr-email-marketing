"use client";

import * as React from "react";
import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Code2,
  Check,
  Send,
  Sun,
  Moon,
  FileDown,
  ImageDown,
  Loader2,
  RotateCcw,
  PencilLine,
  Download,
  ExternalLink,
} from "lucide-react";
import { toPng, toCanvas } from "html-to-image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { applyTheme, getStoredTheme, type Theme } from "@/lib/theme";
import { assetUrl } from "@/lib/utils";
import {
  defaultSaaswLideresTicConfig,
  generateSaaswLideresTicHtml,
  generateSaaswLideresTicImageEmailHtml,
} from "../templates/saasw-lideres-tic-template";

export function SaaswEmailPreviewer() {
  const [viewMode, setViewMode] = React.useState<"desktop" | "mobile">(
    "desktop"
  );
  const [copiedHtml, setCopiedHtml] = React.useState(false);
  const [downloadingFormat, setDownloadingFormat] = React.useState<
    "png" | "pdf" | "html" | "all-parts" | "copy-html" | null
  >(null);
  const [theme, setTheme] = React.useState<Theme>("light");
  const [resetKey, setResetKey] = React.useState(0);
  const emailCanvasRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const stored = getStoredTheme();
    const active = document.documentElement.getAttribute(
      "data-theme"
    ) as Theme | null;
    setTheme(stored ?? active ?? "light");

    const observer = new MutationObserver(() => {
      const current = document.documentElement.getAttribute(
        "data-theme"
      ) as Theme | null;
      if (current) setTheme(current);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });
    return () => observer.disconnect();
  }, []);

  const handleThemeChange = (nextTheme: Theme) => {
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const handleResetEdits = () => {
    setResetKey((prev) => prev + 1);
    toast.success("Plantilla SaaSW restaurada a su contenido original");
  };

  const isDark = theme === "dark";
  const c = defaultSaaswLideresTicConfig;

  const outerBg = isDark ? "#0B0F19" : "rgb(240,244,249)";
  const cardBg = isDark ? "#111827" : "#FFFFFF";
  const cardBorder = isDark ? "#1E293B" : "rgb(214,227,240)";
  const dividerColor = isDark ? "#1E293B" : "rgb(237,243,250)";
  const titleColor = isDark ? "#F8FAFC" : "rgb(4,9,20)";
  const bodyColor = isDark ? "#CBD5E1" : "rgb(58,74,96)";
  const mutedColor = isDark ? "#94A3B8" : "rgb(81,100,125)";
  const subtleBg = isDark ? "#1E293B" : "rgb(248,250,253)";
  const subtleBorder = isDark ? "#334155" : "rgb(226,235,245)";
  const ctaBoxBg = isDark ? "#0F293A" : "rgb(240,247,251)";

  // Segmenta el lienzo del correo en 5 bloques HD contiguos sin costuras (600px)
  const sliceEmailBlocks = React.useCallback(async () => {
    if (!emailCanvasRef.current) return null;
    const rootNode =
      emailCanvasRef.current.querySelector<HTMLElement>(
        "div[data-saasw-root='true']"
      ) || emailCanvasRef.current;

    const bgColor = isDark ? "#0B0F19" : "#F0F4F9";
    const canvas = await toCanvas(rootNode, {
      quality: 1,
      pixelRatio: 2,
      backgroundColor: bgColor,
      cacheBust: true,
    });

    const rootRect = rootNode.getBoundingClientRect();
    const scale = canvas.width / rootRect.width;

    const workersEl = rootNode.querySelector<HTMLElement>(
      "[data-saasw-block='workers']"
    );
    const ctaEl = rootNode.querySelector<HTMLElement>(
      "[data-saasw-block='cta']"
    );
    const ecoEl = rootNode.querySelector<HTMLElement>(
      "[data-saasw-block='ecosystem']"
    );
    const footerEl = rootNode.querySelector<HTMLElement>(
      "[data-saasw-block='footer']"
    );

    const cut0 = 0;
    const cut1 = workersEl
      ? Math.round(
        (workersEl.getBoundingClientRect().top - rootRect.top) * scale
      )
      : Math.round(canvas.height * 0.38);
    const cut2 = ctaEl
      ? Math.round((ctaEl.getBoundingClientRect().top - rootRect.top) * scale)
      : Math.round(canvas.height * 0.58);
    const cut3 = ecoEl
      ? Math.round((ecoEl.getBoundingClientRect().top - rootRect.top) * scale)
      : Math.round(canvas.height * 0.72);
    const cut4 = footerEl
      ? Math.round(
        (footerEl.getBoundingClientRect().top - rootRect.top) * scale
      )
      : Math.round(canvas.height * 0.85);
    const cut5 = canvas.height;

    const cuts = [
      {
        id: "01-hero",
        step: "Bloque 1",
        title: "Cabecera y Hero — SaaSW Líderes TIC",
        alt: "GLocation SaaSW — Su oficina TIC no necesita más software. Le entregamos el trabajador.",
        yStart: cut0,
        yEnd: cut1,
      },
      {
        id: "02-trabajadores",
        step: "Bloque 2",
        title: "Tres Trabajadores Cognitivos TIC",
        alt: "Trabajador PMO & Proyectos, Mesa de Ayuda TIC y Cumplimiento & Gobierno",
        yStart: cut1,
        yEnd: cut2,
      },
      {
        id: "03-cta",
        step: "Bloque 3",
        title: "Diagnóstico de Viabilidad Cognitiva (30 min)",
        alt: "Diagnóstico de Viabilidad Cognitiva para su Oficina TIC (30 min) — Agendar cita",
        yStart: cut2,
        yEnd: cut3,
        href: c.ctaButtonUrl || "https://citas.glocation.co/?theme=light",
      },
      {
        id: "04-ecosistema-firma",
        step: "Bloque 4",
        title: "Ecosistema en Vivo y Firma Comercial Paula Rozo",
        alt: "Ecosistema GLocation y Firma Comercial Paula Rozo — BDR",
        yStart: cut3,
        yEnd: cut5,
      },
    ];

    const slices = cuts.map((cut) => {
      const sh = Math.max(1, cut.yEnd - cut.yStart);
      const subCanvas = document.createElement("canvas");
      subCanvas.width = canvas.width;
      subCanvas.height = sh;
      const ctx = subCanvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, subCanvas.width, sh);
        ctx.drawImage(
          canvas,
          0,
          cut.yStart,
          canvas.width,
          sh,
          0,
          0,
          canvas.width,
          sh
        );
      }
      return {
        ...cut,
        dataUrl: subCanvas.toDataURL("image/png"),
        canvas: subCanvas,
      };
    });

    return { slices, fullCanvas: canvas };
  }, [c.ctaButtonUrl, c.senderEmail, c.websiteUrl, isDark]);

  // Construye la estructura HTML idéntica a la campaña de Jefes TI:
  // 5 bloques en imágenes PNG públicas alojadas en GitHub dentro de una tabla de 600px
  // compatible con cualquier cliente de correo (Gmail, Outlook, Mailchimp, Brevo, HubSpot)
  // con el Bloque CTA enlazado a https://citas.glocation.co/?theme=light
  const buildExportHtml = React.useCallback(async (): Promise<string> => {
    // 1. Guardar automáticamente los bloques PNG en public/email-blocks/
    try {
      const result = await sliceEmailBlocks();
      if (result && result.slices.length > 0) {
        const suffix = theme === "light" ? "claro" : "oscuro";
        await fetch("/api/save-blocks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slices: result.slices, suffix }),
        }).catch(() => { });
      }
    } catch (err) {
      console.warn("Auto-save blocks warning:", err);
    }

    // 2. Retorna estructura de imágenes de alta resolución con enlaces activos
    return generateSaaswLideresTicImageEmailHtml({
      ...c,
      theme,
      ctaButtonUrl: c.ctaButtonUrl || "https://citas.glocation.co/?theme=light",
    });
  }, [c, theme, sliceEmailBlocks]);

  const handleCopyHtml = async () => {
    if (downloadingFormat) return;
    try {
      setDownloadingFormat("copy-html");
      const htmlContent = await buildExportHtml();
      if (typeof window !== "undefined" && typeof ClipboardItem !== "undefined") {
        try {
          const blobHtml = new Blob([htmlContent], { type: "text/html" });
          const blobText = new Blob([htmlContent], { type: "text/plain" });
          await navigator.clipboard.write([
            new ClipboardItem({
              "text/html": blobHtml,
              "text/plain": blobText,
            }),
          ]);
        } catch {
          await navigator.clipboard.writeText(htmlContent);
        }
      } else {
        await navigator.clipboard.writeText(htmlContent);
      }
      setCopiedHtml(true);
      toast.success("Campaña copiada al portapapeles", {
        description:
          "HTML limpio sin bordes con enlaces activos, idéntico a la previsualización y al PDF.",
      });
      setTimeout(() => setCopiedHtml(false), 2500);
    } catch (err) {
      console.error("Error al copiar HTML:", err);
      toast.error("No se pudo copiar el HTML");
    } finally {
      setDownloadingFormat(null);
    }
  };

  const handleDownloadHtml = async () => {
    if (downloadingFormat) return;
    try {
      setDownloadingFormat("html");
      const htmlContent = await buildExportHtml();
      const blob = new Blob([htmlContent], {
        type: "text/html;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const suffix = theme === "light" ? "claro" : "oscuro";
      const filename = `glocation-plantilla-saasw-lideres-tic-${suffix}.html`;
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 1500);
      toast.success("Plantilla HTML descargada correctamente", {
        description: `${filename} · Estructura de 4 bloques en imagen PNG con enlace CTA activo`,
      });
    } catch (err) {
      console.error("Error al descargar HTML:", err);
      toast.error("Error al descargar el archivo HTML");
    } finally {
      setDownloadingFormat(null);
    }
  };

  const handleDownloadAllPartsPng = async () => {
    if (downloadingFormat || !emailCanvasRef.current) return;
    try {
      setDownloadingFormat("all-parts");
      const suffix = theme === "light" ? "claro" : "oscuro";
      toast.info(
        `Generando los 4 bloques en PNG (${theme === "dark" ? "Versión Oscura" : "Versión Clara"
        })...`,
        {
          description: "Cada bloque se descargará automáticamente.",
        }
      );

      const result = await sliceEmailBlocks();
      if (!result) return;

      for (let i = 0; i < result.slices.length; i++) {
        const slice = result.slices[i];
        const link = document.createElement("a");
        link.download = `saasw-${slice.id}-${suffix}.png`;
        link.href = slice.dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        await new Promise((resolve) => setTimeout(resolve, 250));
      }

      // Guarda automáticamente copias directas en public/email-blocks/
      await fetch("/api/save-blocks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slices: result.slices, suffix }),
      }).catch(() => { });

      toast.success("Los 4 bloques PNG se descargaron y sincronizaron correctamente");
    } catch (err) {
      console.error("Error al descargar los bloques:", err);
      toast.error("Error al descargar los bloques PNG");
    } finally {
      setDownloadingFormat(null);
    }
  };

  const handleDownloadPng = async () => {
    if (downloadingFormat || !emailCanvasRef.current) return;
    try {
      setDownloadingFormat("png");
      const node = emailCanvasRef.current;
      const bgColor = isDark ? "#0B0F19" : "#F0F4F9";
      const dataUrl = await toPng(node, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: bgColor,
        cacheBust: true,
      });
      const suffix = theme === "light" ? "claro" : "oscuro";
      const link = document.createElement("a");
      link.download = `glocation-plantilla-saasw-lideres-tic-${suffix}.png`;
      link.href = dataUrl;
      link.click();
      toast.success("Imagen PNG descargada en alta resolución (2x)");
    } catch (err) {
      console.error("Error exportando PNG:", err);
      toast.error("Error al generar la imagen PNG");
    } finally {
      setDownloadingFormat(null);
    }
  };

  const handleDownloadPdf = async () => {
    if (downloadingFormat || !emailCanvasRef.current) return;
    try {
      setDownloadingFormat("pdf");
      const node = emailCanvasRef.current;
      const bgColor = isDark ? "#0B0F19" : "#F0F4F9";
      const canvas = await toCanvas(node, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: bgColor,
        cacheBust: true,
      });

      const imgWidth = Math.max(1, Math.round(canvas.width));
      const imgHeight = Math.max(1, Math.round(canvas.height));
      const opaqueCanvas = document.createElement("canvas");
      opaqueCanvas.width = imgWidth;
      opaqueCanvas.height = imgHeight;
      const opaqueCtx = opaqueCanvas.getContext("2d");
      if (opaqueCtx) {
        opaqueCtx.fillStyle = bgColor;
        opaqueCtx.fillRect(0, 0, imgWidth, imgHeight);
        opaqueCtx.drawImage(canvas, 0, 0);
      }

      const jpegDataUrl = opaqueCanvas.toDataURL("image/jpeg", 0.97);
      const base64Data = jpegDataUrl.split(",")[1];
      const binaryStr = window.atob(base64Data);
      const jpegBytes = new Uint8Array(binaryStr.length);
      for (let i = 0; i < binaryStr.length; i++) {
        jpegBytes[i] = binaryStr.charCodeAt(i);
      }

      const pageWidth = 595;
      const pageHeight = Math.max(
        180,
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

      pushBytes(
        new Uint8Array([
          0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x34, 0x0a, 0x25, 0xe2,
          0xe3, 0xcf, 0xd3, 0x0a,
        ])
      );
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
        `trailer\n<< /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`
      );

      const pdfBlob = new Blob(chunks as BlobPart[], {
        type: "application/pdf",
      });
      const suffix = theme === "light" ? "claro" : "oscuro";
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `glocation-plantilla-saasw-lideres-tic-${suffix}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 1500);
      toast.success("PDF descargado en alta resolución");
    } catch (err) {
      console.error("Error exportando PDF:", err);
      toast.error("Error al generar el archivo PDF");
    } finally {
      setDownloadingFormat(null);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top bar: Sidebar trigger + Breadcrumb */}
      <div className="flex items-center gap-3">
        <SidebarTrigger className="size-8 rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/uikit">UI Kit</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/email-marketing">Email Marketing</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                Plantilla SaaSW: Fuerza Laboral Cognitiva TIC
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Top Header & Controles */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Send className="h-5 w-5" />
            </div>
            <h1 className="text-xl md:text-2xl font-heading font-bold tracking-tight text-foreground">
              Plantilla SaaSW · Fuerza Laboral Cognitiva TIC
            </h1>
            <Badge variant="primary">EM-06 · HTML 600px</Badge>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm">
            Plantilla HTML editorial con los 3 Trabajadores Cognitivos (
            <code>TC-PMO</code>, <code>TC-Workspace</code>, <code>TC-Test</code>
            ), CTA Diagnóstico Cognitivo 30 min, ecosistema en vivo y firma con
            la foto oficial de{" "}
            <strong className="text-foreground">Paula Rozo</strong>.
          </p>
        </div>

        {/* Barra de acciones */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Selector Desktop / Mobile */}
          <ToggleGroup
            type="single"
            variant="outline"
            size="sm"
            value={viewMode}
            onValueChange={(val) => {
              if (val === "desktop" || val === "mobile") setViewMode(val);
            }}
            className="bg-surface"
          >
            <ToggleGroupItem
              value="desktop"
              aria-label="Vista Escritorio"
              className="text-xs gap-1.5 px-3"
            >
              <Monitor className="w-3.5 h-3.5" />
              600px
            </ToggleGroupItem>
            <ToggleGroupItem
              value="mobile"
              aria-label="Vista Móvil"
              className="text-xs gap-1.5 px-3"
            >
              <Smartphone className="w-3.5 h-3.5" />
              375px
            </ToggleGroupItem>
          </ToggleGroup>

          {/* Selector de Tema Claro / Oscuro */}
          <ToggleGroup
            type="single"
            variant="outline"
            size="sm"
            value={theme}
            onValueChange={(val) => {
              if (val === "light" || val === "dark") handleThemeChange(val);
            }}
            className="bg-surface"
          >
            <ToggleGroupItem
              value="light"
              aria-label="Modo Claro"
              className="text-xs gap-1.5 px-3"
            >
              <Sun className="w-3.5 h-3.5" />
              Claro
            </ToggleGroupItem>
            <ToggleGroupItem
              value="dark"
              aria-label="Modo Oscuro"
              className="text-xs gap-1.5 px-3"
            >
              <Moon className="w-3.5 h-3.5" />
              Oscuro
            </ToggleGroupItem>
          </ToggleGroup>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleResetEdits}
            leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
            className="w-auto text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            Restaurar textos
          </Button>

          {/* Descargar PNG */}
          <Button
            variant="neutral"
            size="sm"
            onClick={handleDownloadPng}
            disabled={downloadingFormat !== null}
            leftIcon={
              downloadingFormat === "png" ? (
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
              ) : (
                <ImageDown className="w-4 h-4 text-primary" />
              )
            }
            className="w-auto text-xs font-semibold"
          >
            {downloadingFormat === "png" ? "Generando PNG..." : "Descargar PNG"}
          </Button>

          {/* Descargar 5 Bloques PNG */}
          <Button
            variant="neutral"
            size="sm"
            onClick={handleDownloadAllPartsPng}
            disabled={downloadingFormat !== null}
            leftIcon={
              downloadingFormat === "all-parts" ? (
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
              ) : (
                <ImageDown className="w-4 h-4 text-primary" />
              )
            }
            className="w-auto text-xs font-semibold"
          >
            {downloadingFormat === "all-parts"
              ? "Generando bloques..."
              : "Descargar 4 Bloques (.png)"}
          </Button>

          {/* Descargar PDF */}
          <Button
            variant="neutral"
            size="sm"
            onClick={handleDownloadPdf}
            disabled={downloadingFormat !== null}
            leftIcon={
              downloadingFormat === "pdf" ? (
                <Loader2 className="w-4 h-4 animate-spin text-info" />
              ) : (
                <FileDown className="w-4 h-4 text-info" />
              )
            }
            className="w-auto text-xs font-semibold"
          >
            {downloadingFormat === "pdf" ? "Generando PDF..." : "Descargar PDF"}
          </Button>

          {/* Copiar HTML */}
          <Button
            variant="neutral"
            size="sm"
            onClick={handleCopyHtml}
            disabled={downloadingFormat !== null}
            leftIcon={
              downloadingFormat === "copy-html" ? (
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
              ) : copiedHtml ? (
                <Check className="w-4 h-4 text-success" />
              ) : (
                <Code2 className="w-4 h-4" />
              )
            }
            className="w-auto text-xs font-semibold"
          >
            {downloadingFormat === "copy-html"
              ? "Renderizando..."
              : copiedHtml
                ? "HTML Copiado"
                : "Copiar HTML"}
          </Button>

          {/* Descargar HTML */}
          <Button
            variant="primary"
            size="sm"
            onClick={handleDownloadHtml}
            disabled={downloadingFormat !== null}
            leftIcon={
              downloadingFormat === "html" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )
            }
            className="w-auto text-xs font-semibold"
          >
            {downloadingFormat === "html" ? "Renderizando..." : "Descargar HTML"}
          </Button>
        </div>
      </div>

      {/* Cinta informativa de edición directa */}
      <div className="rounded-xl border border-primary/25 bg-primary/5 px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-foreground">
          <PencilLine className="w-4 h-4 text-primary shrink-0" />
          <span>
            <strong>Edición directa habilitada:</strong> haz clic sobre cualquier texto para editarlo. El botón de agendar citas y Bloque 3 redirigen a{" "}
            <a
              href="https://citas.glocation.co/?theme=light"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold underline underline-offset-2 hover:opacity-80"
            >
              citas.glocation.co/?theme=light
            </a>.
          </span>
        </div>
        <a
          href="https://citas.glocation.co/?theme=light"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 shrink-0 transition"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Probar Enlace Citas
        </a>
      </div>

      {/* Lienzo del Email */}
      <div className="w-full py-2 flex justify-center">
        <div
          key={resetKey}
          ref={emailCanvasRef}
          contentEditable
          suppressContentEditableWarning
          spellCheck={false}
          className={`transition-all duration-300 w-full ${viewMode === "mobile" ? "max-w-[375px]" : "max-w-[660px]"
            } outline-none rounded-2xl overflow-hidden`}
        >
          <div
            data-saasw-root="true"
            style={{
              margin: 0,
              padding: "30px 10px",
              backgroundColor: outerBg,
              fontFamily:
                '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
            }}
          >
            <table
              width="100%"
              border={0}
              cellSpacing={0}
              cellPadding={0}
              align="center"
              role="presentation"
            >
              <tbody>
                <tr>
                  <td align="center">
                    <table
                      width={600}
                      border={0}
                      cellSpacing={0}
                      cellPadding={0}
                      style={{
                        maxWidth: "600px",
                        width: "100%",
                        backgroundColor: cardBg,
                        borderRadius: "16px",
                        border: "none",
                        boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.06)",
                        overflow: "hidden",
                      }}
                    >
                      <tbody>
                        {/* CABECERA · LOGO GLOCATION + HOLDING */}
                        <tr data-saasw-block="hero">
                          <td
                            style={{
                              padding: "28px 36px 20px",
                              border: "none",
                              backgroundColor: cardBg,
                            }}
                          >
                            <table
                              width="100%"
                              border={0}
                              cellSpacing={0}
                              cellPadding={0}
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td align="left" valign="middle">
                                    <a
                                      href={c.websiteUrl || "https://glocation.co"}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        textDecoration: "none",
                                        border: 0,
                                        cursor: "pointer",
                                      }}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        window.open(c.websiteUrl || "https://glocation.co", "_blank");
                                      }}
                                    >
                                      <img
                                        data-email-img="logo"
                                        src={assetUrl(
                                          isDark
                                            ? "/email-icons/logo-glocation-negativo.png"
                                            : "/email-icons/logo-glocation-claro.png"
                                        )}
                                        alt="GLocation"
                                        height={36}
                                        style={{
                                          display: "block",
                                          height: "36px",
                                          width: "auto",
                                          border: 0,
                                        }}
                                      />
                                    </a>
                                  </td>
                                  <td align="right" valign="middle">
                                    <span
                                      style={{
                                        fontFamily:
                                          '"SF Mono",Consolas,Monaco,monospace',
                                        fontSize: "10px",
                                        fontWeight: 600,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                        color: mutedColor,
                                      }}
                                    >
                                      {c.holdingBadge}
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        {/* HERO · TITULAR Y CONTEXTO */}
                        <tr>
                          <td
                            style={{
                              padding: "36px 36px 20px",
                              backgroundColor: cardBg,
                            }}
                          >
                            <table
                              border={0}
                              cellSpacing={0}
                              cellPadding={0}
                              style={{ marginBottom: "16px" }}
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style={{
                                      border: "none",
                                      backgroundColor: "transparent",
                                      padding: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "inline-block",
                                        border: "none",
                                        borderRadius: "999px",
                                        padding: "4px 14px",
                                        backgroundColor: isDark
                                          ? "#0F293A"
                                          : "rgb(230,243,250)",
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontFamily:
                                            '"SF Mono",Consolas,Monaco,monospace',
                                          fontSize: "11px",
                                          fontWeight: 700,
                                          letterSpacing: "0.08em",
                                          color: isDark
                                            ? "rgb(56,189,248)"
                                            : "rgb(30,112,148)",
                                        }}
                                      >
                                        {c.eyebrowPill}
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <table
                              border={0}
                              cellSpacing={0}
                              cellPadding={0}
                              style={{ marginBottom: "16px" }}
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style={{
                                      border: "none",
                                      backgroundColor: "transparent",
                                      padding: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "inline-block",
                                        border: "none",
                                        borderRadius: "8px",
                                        padding: "6px 12px",
                                        backgroundColor: isDark
                                          ? "#2E2008"
                                          : "rgb(254,243,199)",
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontFamily:
                                            '"SF Mono",Consolas,Monaco,monospace',
                                          fontSize: "11px",
                                          fontWeight: 700,
                                          letterSpacing: "0.05em",
                                          color: isDark
                                            ? "rgb(251,191,36)"
                                            : "rgb(146,64,14)",
                                        }}
                                      >
                                        {c.warningBanner}
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <h1
                              style={{
                                margin: "0px 0px 18px",
                                fontFamily:
                                  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
                                fontSize: "24px",
                                fontWeight: 800,
                                lineHeight: 1.25,
                                letterSpacing: "-0.02em",
                                color: titleColor,
                              }}
                            >
                              {c.headlinePart1}{" "}
                              <span
                                style={{
                                  fontFamily:
                                    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
                                  color: "rgb(34,119,156)",
                                }}
                              >
                                {c.headlineHighlight}
                              </span>{" "}
                              {c.headlinePart2}
                            </h1>

                            <p
                              style={{
                                margin: "0px 0px 20px",
                                fontSize: "14px",
                                lineHeight: 1.6,
                                color: bodyColor,
                              }}
                            >
                              {c.greeting}
                            </p>
                            <p
                              style={{
                                margin: "0px 0px 24px",
                                fontSize: "14px",
                                lineHeight: 1.6,
                                color: bodyColor,
                              }}
                              dangerouslySetInnerHTML={{
                                __html: c.introParagraphHtml,
                              }}
                            />
                          </td>
                        </tr>

                        {/* 3 TARJETAS DE TRABAJADORES COGNITIVOS */}
                        <tr data-saasw-block="workers">
                          <td
                            style={{
                              padding: "0px 36px 28px",
                              backgroundColor: cardBg,
                            }}
                          >
                            <table
                              width="100%"
                              border={0}
                              cellSpacing={0}
                              cellPadding={0}
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style={{
                                      padding: "16px",
                                      border: "none",
                                      borderRadius: "12px",
                                      marginBottom: "12px",
                                      backgroundColor: subtleBg,
                                    }}
                                  >
                                    <table
                                      width="100%"
                                      border={0}
                                      cellSpacing={0}
                                      cellPadding={0}
                                      role="presentation"
                                    >
                                      <tbody>
                                        <tr>
                                          <td width={36} valign="top">
                                            <div
                                              style={{
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "8px",
                                                textAlign: "center",
                                                lineHeight: "30px",
                                                fontSize: "15px",
                                                backgroundColor:
                                                  "rgb(224,242,254)",
                                              }}
                                            >
                                              📋
                                            </div>
                                          </td>
                                          <td style={{ paddingLeft: "12px" }}>
                                            <b
                                              style={{
                                                fontFamily:
                                                  "-apple-system,BlinkMacSystemFont,sans-serif",
                                                fontSize: "13px",
                                                color: titleColor,
                                              }}
                                            >
                                              {c.card1Title}
                                            </b>
                                            <p
                                              style={{
                                                margin: "4px 0px 6px",
                                                fontSize: "12px",
                                                lineHeight: 1.45,
                                                color: mutedColor,
                                              }}
                                              dangerouslySetInnerHTML={{
                                                __html: c.card1DescriptionHtml,
                                              }}
                                            />
                                            <span
                                              style={{
                                                fontFamily:
                                                  '"SF Mono",Consolas,Monaco,monospace',
                                                fontSize: "10px",
                                                fontWeight: 600,
                                                color: "rgb(2,132,199)",
                                              }}
                                            >
                                              {c.card1Metric}
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td height={12}></td>
                                </tr>

                                <tr>
                                  <td
                                    style={{
                                      padding: "16px",
                                      border: "none",
                                      borderRadius: "12px",
                                      backgroundColor: subtleBg,
                                    }}
                                  >
                                    <table
                                      width="100%"
                                      border={0}
                                      cellSpacing={0}
                                      cellPadding={0}
                                      role="presentation"
                                    >
                                      <tbody>
                                        <tr>
                                          <td width={36} valign="top">
                                            <div
                                              style={{
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "8px",
                                                textAlign: "center",
                                                lineHeight: "30px",
                                                fontSize: "15px",
                                                backgroundColor:
                                                  "rgb(220,252,231)",
                                              }}
                                            >
                                              🛡️
                                            </div>
                                          </td>
                                          <td style={{ paddingLeft: "12px" }}>
                                            <b
                                              style={{
                                                fontFamily:
                                                  "-apple-system,BlinkMacSystemFont,sans-serif",
                                                fontSize: "13px",
                                                color: titleColor,
                                              }}
                                            >
                                              {c.card2Title}
                                            </b>
                                            <p
                                              style={{
                                                margin: "4px 0px 6px",
                                                fontSize: "12px",
                                                lineHeight: 1.45,
                                                color: mutedColor,
                                              }}
                                              dangerouslySetInnerHTML={{
                                                __html: c.card2DescriptionHtml,
                                              }}
                                            />
                                            <span
                                              style={{
                                                fontFamily:
                                                  '"SF Mono",Consolas,Monaco,monospace',
                                                fontSize: "10px",
                                                fontWeight: 600,
                                                color: "rgb(22,163,74)",
                                              }}
                                            >
                                              {c.card2Metric}
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td height={12}></td>
                                </tr>

                                <tr>
                                  <td
                                    style={{
                                      padding: "16px",
                                      border: "none",
                                      borderRadius: "12px",
                                      backgroundColor: subtleBg,
                                    }}
                                  >
                                    <table
                                      width="100%"
                                      border={0}
                                      cellSpacing={0}
                                      cellPadding={0}
                                      role="presentation"
                                    >
                                      <tbody>
                                        <tr>
                                          <td width={36} valign="top">
                                            <div
                                              style={{
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "8px",
                                                textAlign: "center",
                                                lineHeight: "30px",
                                                fontSize: "15px",
                                                backgroundColor:
                                                  "rgb(243,232,255)",
                                              }}
                                            >
                                              ⚡
                                            </div>
                                          </td>
                                          <td style={{ paddingLeft: "12px" }}>
                                            <b
                                              style={{
                                                fontFamily:
                                                  "-apple-system,BlinkMacSystemFont,sans-serif",
                                                fontSize: "13px",
                                                color: titleColor,
                                              }}
                                            >
                                              {c.card3Title}
                                            </b>
                                            <p
                                              style={{
                                                margin: "4px 0px 6px",
                                                fontSize: "12px",
                                                lineHeight: 1.45,
                                                color: mutedColor,
                                              }}
                                              dangerouslySetInnerHTML={{
                                                __html: c.card3DescriptionHtml,
                                              }}
                                            />
                                            <span
                                              style={{
                                                fontFamily:
                                                  '"SF Mono",Consolas,Monaco,monospace',
                                                fontSize: "10px",
                                                fontWeight: 600,
                                                color: "rgb(147,51,234)",
                                              }}
                                            >
                                              {c.card3Metric}
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        {/* BLOQUE CTA · DIAGNÓSTICO COGNITIVO 30 MINUTOS */}
                        <tr data-saasw-block="cta">
                          <td
                            style={{
                              padding: "0px 36px 36px",
                              border: "none",
                              backgroundColor: cardBg,
                            }}
                          >
                            <table
                              width="100%"
                              border={0}
                              cellSpacing={0}
                              cellPadding={0}
                              style={{
                                border: "none",
                                borderRadius: "14px",
                                backgroundColor: ctaBoxBg,
                              }}
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td align="center" style={{ padding: "24px" }}>
                                    <span
                                      style={{
                                        fontFamily:
                                          '"SF Mono",Consolas,Monaco,monospace',
                                        fontSize: "10px",
                                        fontWeight: 700,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        color: isDark
                                          ? "rgb(56,189,248)"
                                          : "rgb(34,119,156)",
                                      }}
                                    >
                                      {c.ctaEyebrow}
                                    </span>
                                    <h3
                                      style={{
                                        margin: "8px 0px 12px",
                                        fontSize: "17px",
                                        fontWeight: 700,
                                        color: titleColor,
                                      }}
                                    >
                                      {c.ctaTitle}
                                    </h3>
                                    <p
                                      style={{
                                        margin: "0px 0px 20px",
                                        fontSize: "13px",
                                        lineHeight: 1.5,
                                        maxWidth: "480px",
                                        color: mutedColor,
                                      }}
                                    >
                                      {c.ctaDescription}
                                    </p>

                                    <table
                                      border={0}
                                      cellSpacing={0}
                                      cellPadding={0}
                                      role="presentation"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            align="center"
                                            style={{
                                              background:
                                                "linear-gradient(90deg,rgb(31,110,145) 0%,rgb(74,100,160) 60%,rgb(110,92,152) 100%)",
                                              backgroundColor:
                                                "rgb(31,110,145)",
                                              borderRadius: "8px",
                                            }}
                                          >
                                            <a
                                              href={c.ctaButtonUrl || "https://citas.glocation.co/?theme=light"}
                                              rel="noopener noreferrer"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                window.open(c.ctaButtonUrl || "https://citas.glocation.co/?theme=light", "_blank");
                                              }}
                                              style={{
                                                display: "inline-block",
                                                padding: "13px 28px",
                                                fontFamily:
                                                  "-apple-system,BlinkMacSystemFont,sans-serif",
                                                fontSize: "13px",
                                                fontWeight: 700,
                                                textDecoration: "none",
                                                letterSpacing: "0.03em",
                                                color: "rgb(255,255,255)",
                                              }}
                                              target="_blank"
                                            >
                                              {c.ctaButtonText}
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <p
                                      style={{
                                        margin: "14px 0px 0px",
                                        fontSize: "11px",
                                        color: "rgb(123,140,163)",
                                      }}
                                    >
                                      {c.ctaSubtext}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        {/* ECOSISTEMA EN VIVO */}
                        <tr data-saasw-block="ecosystem">
                          <td
                            style={{
                              padding: "20px 36px",
                              border: "none",
                              borderTop: "none",
                              borderBottom: "none",
                              backgroundColor: subtleBg,
                            }}
                          >
                            <table
                              width="100%"
                              border={0}
                              cellSpacing={0}
                              cellPadding={0}
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td align="center">
                                    <span
                                      style={{
                                        fontFamily:
                                          '"SF Mono",Consolas,Monaco,monospace',
                                        fontSize: "10px",
                                        fontWeight: 700,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                        color: mutedColor,
                                      }}
                                    >
                                      EXPLORE NUESTRO ECOSISTEMA EN VIVO:
                                    </span>
                                    <div
                                      style={{
                                        marginTop: "8px",
                                        fontSize: "12px",
                                        fontFamily:
                                          "-apple-system,BlinkMacSystemFont,sans-serif",
                                        lineHeight: 1.6,
                                      }}
                                    >
                                      <a
                                        href={c.websiteUrl || "https://glocation.co"}
                                        style={{
                                          fontWeight: 700,
                                          textDecoration: "none",
                                          fontFamily:
                                            "-apple-system,BlinkMacSystemFont,sans-serif",
                                          color: "rgb(34,119,156)",
                                          cursor: "pointer",
                                        }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                          window.open(c.websiteUrl || "https://glocation.co", "_blank");
                                        }}
                                      >
                                        glocation.co
                                      </a>{" "}
                                      <span
                                        style={{
                                          fontFamily:
                                            "-apple-system,BlinkMacSystemFont,sans-serif",
                                          color: "rgb(123,140,163)",
                                        }}
                                      >
                                        (Plataforma Comercial SaaSW)
                                      </span>
                                      <br />
                                      <a
                                        href={c.manifestoUrl || "https://homoagenticus.co"}
                                        style={{
                                          fontWeight: 700,
                                          textDecoration: "none",
                                          fontFamily:
                                            "-apple-system,BlinkMacSystemFont,sans-serif",
                                          color: "rgb(122,92,255)",
                                          cursor: "pointer",
                                        }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                          window.open(c.manifestoUrl || "https://homoagenticus.co", "_blank");
                                        }}
                                      >
                                        homoagenticus.co
                                      </a>{" "}
                                      <span
                                        style={{
                                          fontFamily:
                                            "-apple-system,BlinkMacSystemFont,sans-serif",
                                          color: "rgb(123,140,163)",
                                        }}
                                      >
                                        (El Manifiesto del Homo agenticus)
                                      </span>
                                      <br />
                                      <a
                                        href={c.preagenticaUrl || "https://preagentica.glocation.co"}
                                        style={{
                                          fontWeight: 600,
                                          textDecoration: "none",
                                          fontFamily:
                                            "-apple-system,BlinkMacSystemFont,sans-serif",
                                          color: mutedColor,
                                          cursor: "pointer",
                                        }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                          window.open(c.preagenticaUrl || "https://preagentica.glocation.co", "_blank");
                                        }}
                                      >
                                        preagentica.glocation.co
                                      </a>{" "}
                                      <span
                                        style={{
                                          fontFamily:
                                            "-apple-system,BlinkMacSystemFont,sans-serif",
                                          color: "rgb(123,140,163)",
                                        }}
                                      >
                                        (Nuestra Herencia Pre-IA)
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        {/* CINTILLO HOLDING / PARTNER / ISO */}
                        <tr>
                          <td
                            style={{
                              padding: "18px 36px",
                              border: "none",
                              borderTop: "none",
                              borderBottom: "none",
                              backgroundColor: subtleBg,
                            }}
                          >
                            <table
                              width="100%"
                              border={0}
                              cellSpacing={0}
                              cellPadding={0}
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td align="center">
                                    <span
                                      style={{
                                        fontFamily:
                                          '"SF Mono",Consolas,Monaco,monospace',
                                        fontSize: "10px",
                                        fontWeight: 600,
                                        letterSpacing: "0.06em",
                                        textTransform: "uppercase",
                                        color: mutedColor,
                                      }}
                                    >
                                      HOLDING SERVINFORMACIÓN (27 AÑOS)
                                      &nbsp;•&nbsp; GOOGLE CLOUD PREMIER PARTNER
                                      &nbsp;•&nbsp; NORMA ISO 27001
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        {/* FIRMA COMERCIAL · PAULA ROZO CON FOTO OFICIAL */}
                        <tr data-saasw-block="footer">
                          <td
                            style={{
                              padding: "28px 36px 36px",
                              border: "none",
                              backgroundColor: cardBg,
                            }}
                          >
                            <table
                              width="100%"
                              border={0}
                              cellSpacing={0}
                              cellPadding={0}
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td width={56} valign="top">
                                    <a
                                      href={`mailto:${c.senderEmail}`}
                                      style={{
                                        textDecoration: "none",
                                        border: 0,
                                        display: "inline-block",
                                      }}
                                    >
                                      <img
                                        data-email-img="avatar-paula"
                                        src={assetUrl(
                                          isDark
                                            ? "/email-icons/avatar-paula-dark.png"
                                            : "/email-icons/avatar-paula-light.png"
                                        )}
                                        alt={c.senderName}
                                        width={52}
                                        height={52}
                                        style={{
                                          display: "block",
                                          width: "52px",
                                          height: "52px",
                                          border: 0,
                                          borderRadius: "50%",
                                          objectFit: "cover",
                                        }}
                                      />
                                    </a>
                                  </td>
                                  <td
                                    style={{ paddingLeft: "14px" }}
                                    valign="top"
                                  >
                                    <b
                                      style={{
                                        fontSize: "14px",
                                        color: titleColor,
                                      }}
                                    >
                                      {c.senderName}
                                    </b>
                                    <br />
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: mutedColor,
                                      }}
                                    >
                                      {c.senderRole}
                                    </span>
                                    <br />
                                    <span
                                      style={{
                                        fontSize: "11px",
                                        fontWeight: 600,
                                        color: "rgb(34,119,156)",
                                      }}
                                    >
                                      {c.senderCompany}
                                    </span>
                                    <br />
                                    <span
                                      style={{
                                        fontSize: "11px",
                                        color: "rgb(123,140,163)",
                                      }}
                                    >
                                      <a
                                        href={`mailto:${c.senderEmail}`}
                                        style={{
                                          color: "rgb(34,119,156)",
                                          textDecoration: "none",
                                          fontWeight: 600,
                                        }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {c.senderEmail}
                                      </a>{" "}
                                      &nbsp;|&nbsp;
                                      <a
                                        href={c.websiteUrl || "https://glocation.co"}
                                        style={{
                                          textDecoration: "none",
                                          fontWeight: 600,
                                          color: "rgb(34,119,156)",
                                          cursor: "pointer",
                                        }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                          window.open(c.websiteUrl || "https://glocation.co", "_blank");
                                        }}
                                      >
                                        glocation.co
                                      </a>{" "}
                                      &nbsp;|&nbsp;
                                      <a
                                        href={c.manifestoUrl || "https://homoagenticus.co"}
                                        style={{
                                          textDecoration: "none",
                                          fontWeight: 600,
                                          color: "rgb(122,92,255)",
                                          cursor: "pointer",
                                        }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                          window.open(c.manifestoUrl || "https://homoagenticus.co", "_blank");
                                        }}
                                      >
                                        homoagenticus.co
                                      </a>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* PIE DE DERECHOS RESERVADOS */}
                    <table
                      width={600}
                      border={0}
                      cellSpacing={0}
                      cellPadding={0}
                      style={{
                        maxWidth: "600px",
                        width: "100%",
                        marginTop: "18px",
                      }}
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="center"
                            style={{
                              fontSize: "11px",
                              lineHeight: 1.5,
                              fontFamily:
                                "-apple-system,BlinkMacSystemFont,sans-serif",
                              color: "rgb(123,140,163)",
                            }}
                          >
                            © 2026 GLocation SAS · Bogotá D.C., Colombia.
                            <br />
                            Ha recibido este mensaje porque su entidad lidera
                            proyectos estratégicos de tecnología.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table >
          </div >
        </div >
      </div >
    </div >
  );
}
