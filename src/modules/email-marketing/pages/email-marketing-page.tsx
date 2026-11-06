"use client";

import * as React from "react";
import Link from "next/link";
import {
  Mail,
  Send,
  ArrowRight,
  Eye,
  Copy,
  Trash2,
  LayoutGrid,
  Table2,
  Plus,
  ImageDown,
  FileImage,
  Code2,
} from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardIcon,
  CardBadge,
  CardDecorativeIcon,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { EmailMarketingSidebar } from "../components/email-marketing-sidebar";
import { assetUrl } from "@/lib/utils";
import "../styles/email-marketing.css";

export interface EmailCampaignItem {
  id: string;
  title: string;
  description: string;
  segment: string;
  format: string;
  ownerName: string;
  ownerPhoto: string;
  status: "ACTIVA" | "BORRADOR" | "EN REVISIÓN";
  updatedAt: string;
  href: string;
  downloadPngAsset?: string;
  downloadPngFilename?: string;
  downloadHtmlAsset?: string;
  downloadHtmlFilename?: string;
}

const INITIAL_CAMPAIGNS: EmailCampaignItem[] = [
  {
    id: "EM-01",
    title: "Campaña Jefes de Oficinas TIC",
    description:
      "Email B2B para Jefes de Oficinas TIC del sector público colombiano, enfocado en seguimiento de proyectos con Trabajadores Cognitivos.",
    segment: "Jefes TIC · Sector Público",
    format: "5 Bloques · 740px",
    ownerName: "Paula Rozo",
    ownerPhoto: "/paula_natalia_rozo (4).png",
    status: "ACTIVA",
    updatedAt: "06/11/2026",
    href: "/campanas/email-jefes-ti",
    downloadHtmlAsset: "/campana-jefes-ti-claro.html",
    downloadHtmlFilename: "glocation-campana-jefes-ti-claro.html",
  },
  {
    id: "EM-02",
    title: "Plantilla Base Editable · 4 Bloques B2B",
    description:
      "Plantilla clásica con placeholders [Aquí va...] lista para editar textos, subir imágenes y descargar en PDF o PNG.",
    segment: "Plantilla Clásica B2B",
    format: "5 Bloques · Editable",
    ownerName: "Paula Rozo",
    ownerPhoto: "/paula_natalia_rozo (4).png",
    status: "BORRADOR",
    updatedAt: "04/11/2026",
    href: "/email-marketing/plantilla-base",
  },
  {
    id: "EM-03",
    title: "Plantilla Dos Fotos Invertidas · Zig-Zag",
    description:
      "Hero con foto a la izquierda + Bloque 2 con foto izquierda/texto derecha + Bloque 3 invertido (texto izquierda/foto derecha) y selector de color.",
    segment: "2 Fotos Invertidas · Zig-Zag",
    format: "5 Bloques · Multicolor",
    ownerName: "Paula Rozo",
    ownerPhoto: "/paula_natalia_rozo (4).png",
    status: "BORRADOR",
    updatedAt: "04/11/2026",
    href: "/email-marketing/plantilla-fotos-invertidas",
  },
  {
    id: "EM-04",
    title: "Plantilla Dos Fotos + Colores Invertidos",
    description:
      "Comparativa de dos fotos lado a lado con tarjetas en colores invertidos (Cian, Esmeralda, Violeta o Coral) y 3 pilares de impacto.",
    segment: "Contraste Bicolor · 2 Fotos",
    format: "5 Bloques · 4 Paletas",
    ownerName: "Paula Rozo",
    ownerPhoto: "/paula_natalia_rozo (4).png",
    status: "BORRADOR",
    updatedAt: "04/11/2026",
    href: "/email-marketing/plantilla-colores",
  },
  {
    id: "EM-05",
    title: "Encabezado Form · Google Forms Jefes TIC",
    description:
      "Encabezado gráfico oficial 1600 × 400 px (4:1) alineado con el Hero 1: Trabajadores Cognitivos — Capacidad para su oficina TIC.",
    segment: "Google Forms · Jefes TIC",
    format: "1600 × 400 px · PNG 4:1",
    ownerName: "Paula Rozo",
    ownerPhoto: "/paula_natalia_rozo (4).png",
    status: "ACTIVA",
    updatedAt: "04/11/2026",
    href: "/email-marketing/encabezado-form",
    downloadPngAsset: "/glocation-google-forms-header.png",
    downloadPngFilename: "glocation-google-forms-header.png",
  },
];

function getStatusBadge(status: EmailCampaignItem["status"]) {
  switch (status) {
    case "ACTIVA":
      return (
        <Badge
          className="bg-success/10 text-success border-transparent"
          variant="secondary"
        >
          ACTIVA
        </Badge>
      );
    case "EN REVISIÓN":
      return (
        <Badge
          className="bg-warning/10 text-warning border-transparent"
          variant="secondary"
        >
          EN REVISIÓN
        </Badge>
      );
    default:
      return (
        <Badge
          className="bg-info/10 text-info border-transparent"
          variant="secondary"
        >
          BORRADOR
        </Badge>
      );
  }
}

export function EmailMarketingPage() {
  const [viewMode, setViewMode] = React.useState<"table" | "cards">("table");
  const [campaigns, setCampaigns] =
    React.useState<EmailCampaignItem[]>(INITIAL_CAMPAIGNS);

  const handleDuplicate = (campaign: EmailCampaignItem) => {
    const nextNum = String(campaigns.length + 1).padStart(2, "0");
    const copy: EmailCampaignItem = {
      ...campaign,
      id: `EM-${nextNum}`,
      title: `${campaign.title} (Copia)`,
      status: "BORRADOR",
      updatedAt: "04/11/2026",
    };
    setCampaigns((prev) => [...prev, copy]);
    toast.success("Campaña duplicada", {
      description: `${copy.id} · ${copy.title}`,
    });
  };

  const handleDelete = (id: string) => {
    if (campaigns.length <= 1) {
      toast.error("Debes conservar al menos una campaña activa");
      return;
    }
    setCampaigns((prev) => prev.filter((item) => item.id !== id));
    toast.success("Campaña eliminada del listado");
  };

  const handleDownloadAssetPng = async (
    assetPath: string,
    filename: string
  ) => {
    try {
      const response = await fetch(assetUrl(assetPath), { cache: "no-store" });
      if (!response.ok) throw new Error("Error al obtener el archivo PNG");
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(objectUrl), 1500);
      toast.success("Encabezado PNG descargado correctamente", {
        description: `${filename} · 1600 × 400 px (Proporción 4:1)`,
      });
    } catch {
      toast.error("No se pudo descargar el archivo PNG");
    }
  };

  const handleDownloadAssetHtml = async (
    assetPath: string,
    filename: string
  ) => {
    try {
      const response = await fetch(assetUrl(assetPath), { cache: "no-store" });
      if (!response.ok) throw new Error("Error al obtener el archivo HTML");
      const htmlText = await response.text();
      const blob = new Blob([htmlText], { type: "text/html;charset=utf-8" });
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(objectUrl), 1500);
      toast.success("HTML descargado (5 bloques PNG en estructura HTML)", {
        description: filename,
      });
    } catch {
      toast.error("No se pudo descargar el archivo HTML");
    }
  };

  return (
    <SidebarProvider>
      <EmailMarketingSidebar />

      <SidebarInset className="min-w-0">
        <div className="email-marketing-container w-full px-6 py-6 md:px-8 space-y-6 animate-in fade-in duration-300">
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
                  <BreadcrumbPage>Email Marketing</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Cabecera con selector Tabla / Cards */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-foreground">
                  Email Marketing
                </h1>
                <Badge variant="primary" className="ml-1">
                  {campaigns.length}{" "}
                  {campaigns.length === 1 ? "Campaña" : "Campañas"}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                Gestión de campañas comerciales B2B y plantillas por bloques de
                Glocation.
              </p>
            </div>

            <div className="flex items-center gap-2.5 self-start sm:self-center">
              <ToggleGroup
                type="single"
                variant="outline"
                size="sm"
                value={viewMode}
                onValueChange={(val) => {
                  if (val === "table" || val === "cards") setViewMode(val);
                }}
                className="bg-surface"
              >
                <ToggleGroupItem
                  value="table"
                  className="text-xs gap-1.5 px-3 font-semibold"
                >
                  <Table2 className="w-3.5 h-3.5" />
                  Tabla
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="cards"
                  className="text-xs gap-1.5 px-3 font-semibold"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  Cards
                </ToggleGroupItem>
              </ToggleGroup>

              <Button
                variant="primary"
                size="sm"
                onClick={() =>
                  handleDuplicate(
                    campaigns.find((c) => c.id === "EM-02") || campaigns[0]
                  )
                }
                leftIcon={<Plus className="w-4 h-4" />}
                className="w-auto text-xs font-semibold"
              >
                Nueva desde Plantilla
              </Button>
            </div>
          </div>

          {/* VISTA EN TABLA (UI KIT) */}
          {viewMode === "table" ? (
            <div className="w-full">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-b-0 bg-primary/5">
                    <TableHead className="w-[72px] py-4 font-bold">ID</TableHead>
                    <TableHead className="py-4 font-bold">Campaña</TableHead>
                    <TableHead className="py-4 font-bold">
                      Segmento ICP
                    </TableHead>
                    <TableHead className="py-4 font-bold">Formato</TableHead>
                    <TableHead className="py-4 font-bold">
                      Responsable BDR
                    </TableHead>
                    <TableHead className="py-4 font-bold">Estado</TableHead>
                    <TableHead className="py-4 font-bold">Fecha</TableHead>
                    <TableHead className="w-[116px] py-4 text-right font-bold">
                      Acciones
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-mono font-semibold text-muted-foreground">
                        {campaign.id}
                      </TableCell>
                      <TableCell className="whitespace-normal max-w-[300px]">
                        <Link
                          href={campaign.href}
                          className="flex items-center gap-3 group"
                        >
                          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Send className="size-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="block font-heading font-bold text-foreground group-hover:text-primary transition-colors truncate">
                              {campaign.title}
                            </span>
                            <span className="block text-xs text-muted-foreground line-clamp-1">
                              {campaign.description}
                            </span>
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className="bg-primary/10 text-primary border-transparent"
                          variant="secondary"
                        >
                          {campaign.segment}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className="bg-info/10 text-info border-transparent"
                          variant="secondary"
                        >
                          {campaign.format}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <img
                            src={assetUrl(campaign.ownerPhoto)}
                            alt={campaign.ownerName}
                            className="size-7 rounded-full object-cover object-top border border-primary/40 shrink-0"
                          />
                          <span className="font-medium text-foreground text-xs">
                            {campaign.ownerName}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                      <TableCell className="text-muted-foreground tabular-nums text-xs">
                        {campaign.updatedAt}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-1">
                          {campaign.downloadHtmlAsset &&
                            campaign.downloadHtmlFilename && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                      handleDownloadAssetHtml(
                                        campaign.downloadHtmlAsset!,
                                        campaign.downloadHtmlFilename!
                                      )
                                    }
                                    className="size-8 text-primary hover:text-primary hover:bg-primary/15"
                                  >
                                    <Code2 className="size-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Descargar HTML (5 bloques PNG públicos)
                                </TooltipContent>
                              </Tooltip>
                            )}

                          {campaign.downloadPngAsset &&
                            campaign.downloadPngFilename && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                      handleDownloadAssetPng(
                                        campaign.downloadPngAsset!,
                                        campaign.downloadPngFilename!
                                      )
                                    }
                                    className="size-8 text-primary hover:text-primary hover:bg-primary/15"
                                  >
                                    <ImageDown className="size-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Descargar encabezado PNG (1600×400)
                                </TooltipContent>
                              </Tooltip>
                            )}

                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link href={campaign.href}>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="size-8 text-muted-foreground hover:text-primary hover:bg-primary/10"
                                >
                                  <Eye className="size-4" />
                                </Button>
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              Abrir previsualización y descargas
                            </TooltipContent>
                          </Tooltip>

                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDuplicate(campaign)}
                                className="size-8 text-muted-foreground hover:text-info hover:bg-info/10"
                              >
                                <Copy className="size-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>Duplicar campaña</TooltipContent>
                          </Tooltip>

                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDelete(campaign.id)}
                                className="size-8 text-muted-foreground hover:text-danger hover:bg-danger/10"
                              >
                                <Trash2 className="size-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>Eliminar campaña</TooltipContent>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            /* VISTA EN CARDS (UI KIT) */
            <div className="grid gap-6 md:grid-cols-2">
              {campaigns.map((campaign, idx) => (
                <Card
                  key={campaign.id}
                  variant="featured"
                  glow={idx % 2 === 0 ? "primary-info" : "info-success"}
                  innerClassName="justify-between gap-5 p-7"
                >
                  <div className="w-full space-y-4">
                    {/* Top row: Icon + Badges */}
                    <div className="flex items-start justify-between gap-3 w-full">
                      <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <Send className="size-6 text-primary" />
                      </div>
                      <div className="flex flex-wrap items-center justify-end gap-1.5">
                        <CardBadge className="bg-primary/15 text-primary font-mono text-[11px] px-2.5 py-0.5">
                          {campaign.id}
                        </CardBadge>
                        {getStatusBadge(campaign.status)}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <CardHeader className="gap-2">
                      <CardTitle className="h-auto text-lg font-bold text-foreground">
                        {campaign.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {campaign.description}
                      </CardDescription>
                    </CardHeader>

                    {/* Tags: Segmento & Formato */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <Badge
                        className="bg-primary/10 text-primary border-transparent"
                        variant="secondary"
                      >
                        {campaign.segment}
                      </Badge>
                      <Badge
                        className="bg-info/10 text-info border-transparent"
                        variant="secondary"
                      >
                        {campaign.format}
                      </Badge>
                    </div>
                  </div>

                  {/* Bottom: BDR info + Actions */}
                  <div className="w-full pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={assetUrl(campaign.ownerPhoto)}
                        alt={campaign.ownerName}
                        className="size-8 rounded-full object-cover object-top border border-primary/40 shrink-0"
                      />
                      <div className="flex flex-col">
                        <span className="text-xs font-heading font-bold text-foreground">
                          {campaign.ownerName}
                        </span>
                        <span className="text-[11px] text-muted-foreground tabular-nums">
                          Actualizado · {campaign.updatedAt}
                        </span>
                      </div>
                    </div>

                    <CardFooter className="p-0 pt-0 flex items-center gap-2">
                      {campaign.downloadHtmlAsset &&
                        campaign.downloadHtmlFilename && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="neutral"
                                size="icon"
                                onClick={() =>
                                  handleDownloadAssetHtml(
                                    campaign.downloadHtmlAsset!,
                                    campaign.downloadHtmlFilename!
                                  )
                                }
                                className="size-8 shrink-0"
                              >
                                <Code2 className="size-3.5" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              Descargar HTML (5 bloques PNG públicos)
                            </TooltipContent>
                          </Tooltip>
                        )}
                      <Link href={campaign.href}>
                        <Button
                          variant="primary"
                          size="sm"
                          className="w-auto text-xs font-semibold"
                          rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
                        >
                          Abrir
                        </Button>
                      </Link>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="neutral"
                            size="icon"
                            onClick={() => handleDuplicate(campaign)}
                            className="size-8 shrink-0"
                          >
                            <Copy className="size-3.5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Duplicar campaña</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(campaign.id)}
                            className="size-8 shrink-0 text-muted-foreground hover:text-danger hover:bg-danger/10"
                          >
                            <Trash2 className="size-3.5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Eliminar campaña</TooltipContent>
                      </Tooltip>
                    </CardFooter>
                  </div>

                  <CardDecorativeIcon className="opacity-20">
                    <Send className="size-32 text-primary" />
                  </CardDecorativeIcon>
                </Card>
              ))}
            </div>
          )}

          {/* Vista previa directa del Encabezado Google Forms 1600 × 400 px */}
          <Card className="p-5 bg-surface border border-border shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5 flex-wrap">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileImage className="size-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-sm font-heading font-bold text-foreground">
                      Encabezado Gráfico Google Forms — Campaña Jefes TIC
                    </h2>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-transparent text-[11px]"
                    >
                      1600 × 400 px · 4:1 PNG
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Archivo oficial{" "}
                    <code>glocation-google-forms-header.png</code> alineado con
                    el Hero 1 de la campaña.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <Link href="/email-marketing/encabezado-form">
                  <Button
                    variant="neutral"
                    size="sm"
                    leftIcon={<Eye className="w-3.5 h-3.5" />}
                    className="w-auto text-xs font-semibold"
                  >
                    Ver vista completa
                  </Button>
                </Link>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() =>
                    handleDownloadAssetPng(
                      "/glocation-google-forms-header.png",
                      "glocation-google-forms-header.png"
                    )
                  }
                  leftIcon={<ImageDown className="w-3.5 h-3.5" />}
                  className="w-auto text-xs font-semibold"
                >
                  Descargar encabezado PNG
                </Button>
              </div>
            </div>

            <Link
              href="/email-marketing/encabezado-form"
              className="block overflow-hidden rounded-xl border border-[#2D1E52] bg-[#0B063B] shadow-md hover:opacity-95 transition-opacity"
            >
              <img
                src={assetUrl("/glocation-google-forms-header.png")}
                alt="Encabezado Google Forms GLocation (1600×400)"
                width={1600}
                height={400}
                className="w-full h-auto block"
              />
            </Link>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
