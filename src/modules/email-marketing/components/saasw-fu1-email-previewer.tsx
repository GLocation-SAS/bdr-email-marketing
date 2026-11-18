"use client";

import * as React from "react";
import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Code2,
  Check,
  Send,
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
import { generateSaaswFu1Html } from "../templates/saasw-fu1-template";

export function SaaswFu1EmailPreviewer() {
  const [viewMode, setViewMode] = React.useState<"desktop" | "mobile">("desktop");
  const [copiedVisual, setCopiedVisual] = React.useState(false);
  const [copiedHtml, setCopiedHtml] = React.useState(false);
  const emailRootRef = React.useRef<HTMLDivElement>(null);

  const rawHtml = React.useMemo(() => generateSaaswFu1Html(), []);

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
      toast.success("¡Diseño con enlaces copiado! Pégalo con Ctrl+V en Converso / Brevo / Gmail");
      setTimeout(() => setCopiedVisual(false), 3000);
    } catch {
      toast.error("Error al copiar al portapapeles. Use la opción Copiar HTML.");
    }
  };

  const handleCopyHtml = async () => {
    try {
      await navigator.clipboard.writeText(rawHtml);
      setCopiedHtml(true);
      toast.success("¡Código HTML copiado! Pégalo en tu editor en modo Fuente HTML");
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
  <title>Follow-up 1 · TC-PMO Actas · GLocation SaaSW</title>
</head>
<body style="margin:0 !important;padding:0 !important;background-color:#EFF3F8;">
${rawHtml}
</body>
</html>`;
    const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "plantilla-saasw-fu1.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Archivo HTML descargado");
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
                  <BreadcrumbPage>Follow-up 1 · TC-PMO</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">
              Follow-up 1 · TC-PMO Caso Concreto
            </h1>
            <Badge variant="primary" className="border-sky-500 text-sky-600 dark:text-sky-400">
              SaaSW · EM-07
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            De los informes de contratistas al acta lista para firma. Estructura continua sin cortes para Converso / Brevo.
          </p>
        </div>

        {/* Acciones de exportación y copia */}
        <div className="flex flex-wrap items-center gap-2">
          <Button
            onClick={handleCopyVisual}
            className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-semibold shadow-sm"
          >
            {copiedVisual ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
            {copiedVisual ? "¡Copiado!" : "Copiar Diseño con Enlaces"}
          </Button>

          <Button variant="neutral" onClick={handleCopyHtml}>
            {copiedHtml ? <Check className="w-4 h-4 mr-2" /> : <Code2 className="w-4 h-4 mr-2" />}
            {copiedHtml ? "¡Código Copiado!" : "Copiar HTML"}
          </Button>

          <Button variant="neutral" size="icon" onClick={handleDownloadHtml} title="Descargar HTML">
            <FileDown className="w-4 h-4" />
          </Button>

          <Button variant="ghost" size="icon" asChild title="Abrir plantilla standalone">
            <a href="/plantilla-saasw-fu1.html" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Barra de controles de vista */}
      <div className="flex items-center justify-between bg-muted/40 p-2 rounded-lg border">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground px-2">Vista previa:</span>
          <ToggleGroup
            type="single"
            value={viewMode}
            onValueChange={(val) => val && setViewMode(val as "desktop" | "mobile")}
          >
            <ToggleGroupItem value="desktop" size="sm" aria-label="Desktop">
              <Monitor className="w-4 h-4 mr-1.5" />
              Escritorio (600px)
            </ToggleGroupItem>
            <ToggleGroupItem value="mobile" size="sm" aria-label="Mobile">
              <Smartphone className="w-4 h-4 mr-1.5" />
              Móvil (375px)
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="text-xs text-muted-foreground hidden sm:block">
          Fondo: <code className="text-xs font-mono">#EFF3F8</code> · 600px · 10 bloques con hipervínculos nativos
        </div>
      </div>

      {/* Contenedor del lienzo de correo */}
      <div className="flex justify-center p-4 md:p-8 bg-slate-100 dark:bg-slate-900/50 rounded-xl border border-dashed overflow-x-auto">
        <div
          ref={emailRootRef}
          data-saasw-root="true"
          style={{
            width: viewMode === "mobile" ? "375px" : "100%",
            maxWidth: viewMode === "mobile" ? "375px" : "600px",
            transition: "max-width 0.2s ease",
          }}
          dangerouslySetInnerHTML={{ __html: rawHtml }}
        />
      </div>
    </div>
  );
}
