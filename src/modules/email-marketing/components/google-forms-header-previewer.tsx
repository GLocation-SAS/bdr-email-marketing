"use client";

import * as React from "react";
import Link from "next/link";
import {
  ImageDown,
  CheckCircle2,
  Sparkles,
  FileImage,
  Maximize2,
  Loader2,
  Eye,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { assetUrl } from "@/lib/utils";

const HEADER_FILENAME = "glocation-google-forms-header.png";
const HEADER_ASSET_PATH = "/glocation-google-forms-header.png";

export function GoogleFormsHeaderPreviewer() {
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [imgDimensions, setImgDimensions] = React.useState<{
    width: number;
    height: number;
  } | null>({ width: 1600, height: 400 });

  const handleDownloadHeaderPng = async () => {
    try {
      setIsDownloading(true);
      const resolvedUrl = assetUrl(HEADER_ASSET_PATH);
      const response = await fetch(resolvedUrl, { cache: "no-store" });
      if (!response.ok) {
        throw new Error("No se pudo obtener el archivo PNG");
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = HEADER_FILENAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(objectUrl), 1500);

      toast.success("Encabezado PNG descargado correctamente", {
        description: `${HEADER_FILENAME} · 1600 × 400 px (Proporción 4:1)`,
      });
    } catch {
      toast.error("Error al descargar el encabezado PNG");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb + Sidebar Trigger */}
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
                Encabezado Google Forms · Jefes TIC
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Barra superior de control y descarga */}
      <Card className="p-4 bg-surface border border-border shadow-xs">
        <CardContent className="p-0 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-lg font-bold font-heading text-foreground">
                Encabezado Gráfico Google Forms — Campaña Jefes TIC
              </h1>
              <Badge
                variant="secondary"
                className="gap-1.5 font-medium bg-primary/15 text-primary border-primary/30"
              >
                <Sparkles className="w-3 h-3" />
                Identidad Hero 1
              </Badge>
              <Badge
                variant="secondary"
                className="gap-1.5 font-medium bg-success/10 text-success border-transparent"
              >
                <CheckCircle2 className="w-3 h-3" />
                {imgDimensions
                  ? `${imgDimensions.width} × ${imgDimensions.height} px verificado`
                  : "1600 × 400 px (4:1)"}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Archivo final optimizado (<code>{HEADER_FILENAME}</code>) listo
              para subir directamente en la configuración de tema de Google
              Forms.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap w-full lg:w-auto justify-end">
            <Button
              variant="neutral"
              size="sm"
              asChild
              leftIcon={<Eye className="w-4 h-4" />}
              className="w-auto text-xs font-semibold"
            >
              <a
                href={assetUrl(HEADER_ASSET_PATH)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir PNG 1:1 (1600×400)
              </a>
            </Button>

            <Button
              variant="primary"
              size="sm"
              disabled={isDownloading}
              onClick={handleDownloadHeaderPng}
              leftIcon={
                isDownloading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <ImageDown className="w-4 h-4" />
                )
              }
              className="w-auto text-xs font-semibold"
            >
              {isDownloading ? "Descargando..." : "Descargar encabezado PNG"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Vista previa principal del archivo PNG real 1600x400 */}
      <div className="p-4 md:p-6 rounded-xl border border-border bg-[#0B0617] space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-xs text-[#D8B4FE]">
            <FileImage className="size-4 text-[#A855F7]" />
            <span className="font-heading font-bold text-white">
              Vista previa del archivo final:
            </span>
            <code className="rounded bg-[#1A0F36] px-2 py-0.5 text-[11px] text-[#C084FC] border border-[#34205E]">
              public/{HEADER_FILENAME}
            </code>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-[#CBD5E1]">
            <span className="inline-flex items-center gap-1">
              <Maximize2 className="size-3 text-[#38BDF8]" />
              1600 × 400 px · Proporción 4:1
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="size-3 text-[#10B981]" />
              Márgenes de seguridad Google Forms
            </span>
          </div>
        </div>

        {/* Lienzo 4:1 con la imagen PNG generada */}
        <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-xl border border-[#2D1E52] shadow-[0_20px_50px_rgba(0,0,0,0.65)] bg-[#0B063B]">
          <img
            src={assetUrl(HEADER_ASSET_PATH)}
            alt="Encabezado Google Forms GLocation - Trabajadores Cognitivos (1600x400)"
            width={1600}
            height={400}
            onLoad={(e) => {
              const img = e.currentTarget;
              if (img.naturalWidth && img.naturalHeight) {
                setImgDimensions({
                  width: img.naturalWidth,
                  height: img.naturalHeight,
                });
              }
            }}
            className="w-full h-auto block select-none"
          />
        </div>
      </div>

      {/* Simulación realista de cómo se ve montado en Google Forms */}
      <Card className="p-5 md:p-6 bg-surface border border-border">
        <CardContent className="p-0 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h2 className="text-sm font-heading font-bold text-foreground">
                Simulación en Google Forms (Vista del destinatario TIC)
              </h2>
              <p className="text-xs text-muted-foreground">
                Así se visualiza el encabezado 4:1 integrado sobre el formulario
                de agendamiento de reunión de 20 minutos.
              </p>
            </div>
            <Button
              variant="primary"
              size="sm"
              disabled={isDownloading}
              onClick={handleDownloadHeaderPng}
              leftIcon={<ImageDown className="w-3.5 h-3.5" />}
              className="w-auto text-xs font-semibold"
            >
              Descargar encabezado PNG
            </Button>
          </div>

          <div className="rounded-xl bg-[#F3EFFC] dark:bg-[#0E081C] p-4 sm:p-6 border border-border/70">
            <div className="max-w-[760px] mx-auto space-y-3">
              {/* Banner superior de Google Forms */}
              <div className="overflow-hidden rounded-xl border border-[#2D1E52]/40 shadow-sm">
                <img
                  src={assetUrl(HEADER_ASSET_PATH)}
                  alt="Banner en Google Forms"
                  className="w-full h-auto block"
                />
              </div>

              {/* Tarjeta de título de Google Forms */}
              <div className="rounded-xl bg-white dark:bg-[#17102B] border border-[#DDD6FE] dark:border-[#2E1F54] overflow-hidden shadow-xs">
                <div className="h-2.5 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#0284C7]" />
                <div className="p-5 sm:p-6 space-y-2">
                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#140E24] dark:text-white">
                    Explorar una oportunidad en mi Oficina TIC — Reunión 20 min
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#4B5563] dark:text-[#CBD5E1] leading-relaxed">
                    Déjenos sus datos de contacto y le compartiremos dos
                    opciones de horario para identificar algún proceso en el que
                    tenga sentido evaluar un Trabajador Cognitivo en su entidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
