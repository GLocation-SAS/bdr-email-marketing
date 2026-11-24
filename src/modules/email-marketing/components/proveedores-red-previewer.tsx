"use client";

import * as React from "react";
import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Code2,
  Check,
  FileDown,
  ExternalLink,
  Copy,
} from "lucide-react";
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
import {
  PROVEEDORES_RED_CAMPAIGNS,
  ProveedorRedCampaign,
} from "../templates/proveedores-red-templates";

interface ProveedoresRedPreviewerProps {
  campaignKey: ProveedorRedCampaign["key"];
}

export function ProveedoresRedPreviewer({
  campaignKey,
}: ProveedoresRedPreviewerProps) {
  const campaign = React.useMemo(() => {
    return (
      PROVEEDORES_RED_CAMPAIGNS.find((c) => c.key === campaignKey) ||
      PROVEEDORES_RED_CAMPAIGNS[0]
    );
  }, [campaignKey]);

  const [viewMode, setViewMode] = React.useState<"desktop" | "mobile">(
    "desktop"
  );
  const [copiedVisual, setCopiedVisual] = React.useState(false);
  const [copiedHtml, setCopiedHtml] = React.useState(false);
  const emailRootRef = React.useRef<HTMLDivElement>(null);

  const rawHtml = campaign.rawHtml;

  const handleCopyVisual = async () => {
    if (!emailRootRef.current) return;
    try {
      const root = emailRootRef.current;
      const htmlBlob = new Blob([root.innerHTML], { type: "text/html" });
      const textBlob = new Blob([root.innerText || ""], { type: "text/plain" });

      if (navigator.clipboard && window.ClipboardItem) {
        await navigator.clipboard.write([
          new ClipboardItem({
            "text/html": htmlBlob,
            "text/plain": textBlob,
          }),
        ]);
      } else {
        const sel = window.getSelection();
        sel?.removeAllRanges();
        const range = document.createRange();
        range.selectNode(root);
        sel?.addRange(range);
        document.execCommand("copy");
        sel?.removeAllRanges();
      }

      setCopiedVisual(true);
      toast.success(
        "¡Diseño con enlaces copiado! Pégalo con Ctrl+V en Converso / Brevo / Gmail"
      );
      setTimeout(() => setCopiedVisual(false), 3000);
    } catch {
      toast.error(
        "Error al copiar al portapapeles. Use la opción Copiar HTML."
      );
    }
  };

  const handleCopyHtml = async () => {
    try {
      const fullHtml = `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>${campaign.title}</title>
  <style type="text/css">
    body, table, td, a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table, td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    img {
      -ms-interpolation-mode: bicubic;
      border: 0;
      outline: none;
      text-decoration: none;
      display: block;
    }
    body {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      background-color: #EFF3F8;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; width: 100% !important; background-color: #EFF3F8;">
${rawHtml}
</body>
</html>`;
      await navigator.clipboard.writeText(fullHtml);
      setCopiedHtml(true);
      toast.success(
        "¡Código HTML completo copiado! Pégalo en modo Fuente HTML en Converso o Brevo"
      );
      setTimeout(() => setCopiedHtml(false), 3000);
    } catch {
      toast.error("Error al copiar código HTML");
    }
  };

  const handleDownloadHtml = () => {
    const fullHtml = `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>${campaign.title}</title>
  <style type="text/css">
    body, table, td, a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table, td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    img {
      -ms-interpolation-mode: bicubic;
      border: 0;
      outline: none;
      text-decoration: none;
      display: block;
    }
    body {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      background-color: #EFF3F8;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; width: 100% !important; background-color: #EFF3F8;">
${rawHtml}
</body>
</html>`;
    const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = campaign.htmlFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Archivo HTML descargado", {
      description: campaign.htmlFilename,
    });
  };

  return (
    <div className="space-y-6">
      {/* Encabezado y Breadcrumbs */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/email-marketing">Email Marketing</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{campaign.sector}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">
              {campaign.title}
            </h1>
            <Badge
              variant="primary"
              className="border-sky-500 text-sky-600 dark:text-sky-400"
            >
              {campaign.id} · {campaign.sector}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground max-w-3xl">
            {campaign.hero} · Dirigido a:{" "}
            <span className="font-semibold text-foreground">
              {campaign.target}
            </span>
            . Estructura optimizada para Converso, Brevo y clientes de correo.
          </p>
        </div>

        {/* Acciones de exportación y copia */}
        <div className="flex flex-wrap items-center gap-2">
          <Button
            onClick={handleCopyVisual}
            className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-semibold shadow-sm"
          >
            {copiedVisual ? (
              <Check className="w-4 h-4 mr-2" />
            ) : (
              <Copy className="w-4 h-4 mr-2" />
            )}
            {copiedVisual ? "¡Copiado!" : "Copiar Diseño con Enlaces"}
          </Button>

          <Button variant="neutral" onClick={handleCopyHtml}>
            {copiedHtml ? (
              <Check className="w-4 h-4 mr-2" />
            ) : (
              <Code2 className="w-4 h-4 mr-2" />
            )}
            {copiedHtml ? "¡Código Copiado!" : "Copiar HTML"}
          </Button>

          <Button
            variant="neutral"
            size="icon"
            onClick={handleDownloadHtml}
            title="Descargar HTML"
          >
            <FileDown className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            asChild
            title="Abrir plantilla standalone"
          >
            <a
              href={campaign.htmlAsset}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Selector de pestañas de sectores de la red */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {PROVEEDORES_RED_CAMPAIGNS.map((c) => (
          <Link key={c.key} href={c.href}>
            <Button
              variant={c.key === campaignKey ? "primary" : "neutral"}
              size="sm"
              className="text-xs"
            >
              {c.id} · {c.sector}
            </Button>
          </Link>
        ))}
      </div>

      {/* Barra de controles de vista */}
      <div className="flex items-center justify-between bg-muted/40 p-2 rounded-lg border">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground px-2">
            Vista previa:
          </span>
          <ToggleGroup
            type="single"
            value={viewMode}
            onValueChange={(val) =>
              val && setViewMode(val as "desktop" | "mobile")
            }
          >
            <ToggleGroupItem value="desktop" size="sm" aria-label="Desktop">
              <Monitor className="w-4 h-4 mr-1.5" />
              Escritorio (640px)
            </ToggleGroupItem>
            <ToggleGroupItem value="mobile" size="sm" aria-label="Mobile">
              <Smartphone className="w-4 h-4 mr-1.5" />
              Móvil (375px)
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="text-xs text-muted-foreground hidden sm:block">
          Fondo: <code className="text-xs font-mono">#E7EEF8</code> · 640px ·
          Estructura para Converso y Brevo
        </div>
      </div>

      {/* Contenedor del lienzo de correo */}
      <div className="flex justify-center p-4 md:p-8 bg-slate-100 dark:bg-slate-900/50 rounded-xl border border-dashed overflow-x-auto">
        <div
          ref={emailRootRef}
          data-saasw-root="true"
          style={{
            width: viewMode === "mobile" ? "375px" : "100%",
            maxWidth: viewMode === "mobile" ? "375px" : "640px",
            transition: "max-width 0.2s ease",
          }}
          dangerouslySetInnerHTML={{ __html: rawHtml }}
        />
      </div>
    </div>
  );
}
