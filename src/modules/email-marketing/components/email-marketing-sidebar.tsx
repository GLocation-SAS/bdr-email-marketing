"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { applyTheme, getStoredTheme, type Theme } from "@/lib/theme";
import { assetUrl } from "@/lib/utils";
import {
  Mail,
  Send,
  FileEdit,
  UserX,
  Palette,
  Sun,
  Moon,
} from "lucide-react";

export interface EmailNavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  group: "campanas" | "sistema";
  badge?: string;
}

export const EMAIL_MARKETING_NAV_ITEMS: EmailNavItem[] = [
  {
    id: "listado",
    label: "Campañas y Plantillas",
    icon: Mail,
    href: "/email-marketing",
    group: "campanas",
  },
  {
    id: "jefes-ti",
    label: "Campaña Jefes TIC",
    icon: Send,
    href: "/campanas/email-jefes-ti",
    group: "campanas",
    badge: "EM-01",
  },
  {
    id: "plantilla-base",
    label: "Plantilla Base Clásica",
    icon: FileEdit,
    href: "/email-marketing/plantilla-base",
    group: "campanas",
    badge: "EM-02",
  },
  {
    id: "plantilla-invertida",
    label: "Plantilla 2 Fotos Invertidas",
    icon: FileEdit,
    href: "/email-marketing/plantilla-fotos-invertidas",
    group: "campanas",
    badge: "EM-03",
  },
  {
    id: "plantilla-colores",
    label: "Plantilla Colores Invertidos",
    icon: Palette,
    href: "/email-marketing/plantilla-colores",
    group: "campanas",
    badge: "EM-04",
  },
  {
    id: "bajas",
    label: "Control de Bajas",
    icon: UserX,
    href: "/email-marketing/baja",
    group: "campanas",
  },
  {
    id: "uikit",
    label: "UI Kit Glocation",
    icon: Palette,
    href: "/uikit",
    group: "sistema",
  },
];

const GROUP_LABELS: Record<EmailNavItem["group"], string> = {
  campanas: "Email Marketing",
  sistema: "Sistema",
};

export function EmailMarketingSidebar() {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  const [theme, setTheme] = React.useState<Theme>("dark");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const stored = getStoredTheme();
    const active = document.documentElement.getAttribute(
      "data-theme"
    ) as Theme | null;
    setTheme(stored ?? active ?? "dark");
  }, []);

  const handleTheme = (next: Theme) => {
    setTheme(next);
    applyTheme(next);
  };

  const groupedItems = React.useMemo(() => {
    const groups = new Map<EmailNavItem["group"], EmailNavItem[]>();
    for (const item of EMAIL_MARKETING_NAV_ITEMS) {
      if (!groups.has(item.group)) {
        groups.set(item.group, []);
      }
      groups.get(item.group)!.push(item);
    }
    return groups;
  }, []);

  return (
    <Sidebar variant="floating" collapsible="icon">
      {/* Header: Logo + Trigger */}
      <SidebarHeader className="relative px-3 pt-4 pb-3">
        <div className="flex items-center justify-between gap-2 overflow-hidden group-data-[collapsible=icon]:justify-center">
          <Link
            href="/email-marketing"
            className="flex items-center shrink-0"
            onClick={() => setOpenMobile(false)}
          >
            <Image
              src={assetUrl("/Logotipo.svg")}
              alt="GLocation Logo"
              width={145}
              height={34}
              className="h-[32px] w-auto dark:hidden group-data-[state=collapsed]:hidden animate-in fade-in duration-300"
            />
            <Image
              src={assetUrl("/LogotipoVersionNegativo.svg")}
              alt="GLocation Logo"
              width={145}
              height={34}
              className="h-[32px] w-auto hidden dark:group-data-[state=expanded]:block group-data-[state=collapsed]:hidden animate-in fade-in duration-300"
            />
            <Image
              src={assetUrl("/icon.svg")}
              alt="GLocation Icon"
              width={26}
              height={26}
              className="h-[26px] w-auto dark:hidden group-data-[state=expanded]:hidden animate-in zoom-in-75 duration-300"
            />
            <Image
              src={assetUrl("/iconBlanco.svg")}
              alt="GLocation Icon"
              width={26}
              height={26}
              className="h-[26px] w-auto hidden dark:group-data-[state=collapsed]:block group-data-[state=expanded]:hidden animate-in zoom-in-75 duration-300"
            />
          </Link>
          <SidebarTrigger className="size-7 text-sidebar-foreground/70 hover:text-sidebar-foreground group-data-[collapsible=icon]:hidden" />
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      {/* Navigation */}
      <SidebarContent>
        {Array.from(groupedItems.entries()).map(([group, items]) => (
          <SidebarGroup key={group}>
            <SidebarGroupLabel className="text-caption uppercase tracking-widest font-bold text-sidebar-foreground/80">
              {GROUP_LABELS[group]}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={item.label}
                        onClick={() => setOpenMobile(false)}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-2.5 w-full"
                        >
                          <Icon className="shrink-0" />
                          <span className="flex-1 truncate">{item.label}</span>
                          {item.badge && (
                            <span className="text-[10px] font-mono font-bold bg-primary/15 text-primary rounded-full px-1.5 py-0.5 leading-none group-data-[collapsible=icon]:hidden">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Footer: Theme toggle + BDR info */}
      <SidebarFooter className="px-3 py-3">
        <SidebarSeparator className="mb-3" />

        <div className="flex flex-col gap-1 px-1 mb-3">
          {mounted && (
            <>
              <div className="group-data-[collapsible=icon]:hidden">
                <div className="flex items-center rounded-lg border border-sidebar-border bg-sidebar-accent/30 p-0.5 gap-0.5">
                  <Button
                    variant="ghost"
                    onClick={() => handleTheme("light")}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-caption font-medium transition-all duration-200 h-auto ${theme === "light"
                        ? "bg-sidebar text-sidebar-foreground shadow-sm"
                        : "text-sidebar-foreground/50 hover:text-sidebar-foreground/80"
                      }`}
                  >
                    <Sun className="h-3 w-3" />
                    <span>Claro</span>
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => handleTheme("dark")}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-caption font-medium transition-all duration-200 h-auto ${theme === "dark"
                        ? "bg-sidebar text-sidebar-foreground shadow-sm"
                        : "text-sidebar-foreground/50 hover:text-sidebar-foreground/80"
                      }`}
                  >
                    <Moon className="h-3 w-3" />
                    <span>Oscuro</span>
                  </Button>
                </div>
              </div>

              <div className="hidden group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
                <Button
                  variant="ghost"
                  size="icon-xs"
                  onClick={() =>
                    handleTheme(theme === "light" ? "dark" : "light")
                  }
                  aria-label="Cambiar tema"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-sidebar-border bg-sidebar-accent/30 text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors duration-200"
                >
                  {theme === "dark" ? (
                    <Moon className="h-3.5 w-3.5" />
                  ) : (
                    <Sun className="h-3.5 w-3.5" />
                  )}
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Perfil Paula Rozo */}
        <div className="flex items-center gap-3 px-1 group-data-[collapsible=icon]:justify-center">
          <div className="relative shrink-0">
            <img
              src={assetUrl("/paula_natalia_rozo (4).png")}
              alt="Paula Rozo"
              className="size-9 rounded-full object-cover object-top border border-primary/40 group-data-[collapsible=icon]:size-8"
            />
            <div className="absolute bottom-0 right-0 size-2.5 rounded-full bg-success border-2 border-background group-data-[collapsible=icon]:size-2" />
          </div>
          <div className="flex flex-col min-w-0 group-data-[collapsible=icon]:hidden">
            <span className="text-body-sm font-heading font-semibold text-sidebar-foreground truncate">
              Paula Rozo
            </span>
            <span className="text-caption text-sidebar-foreground/60 truncate">
              BDR · p.rozo@glocation.co
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

