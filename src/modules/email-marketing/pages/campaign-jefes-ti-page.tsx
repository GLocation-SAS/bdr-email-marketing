"use client";

import * as React from "react";
import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import { EmailPreviewer } from "../components/email-previewer";
import { EmailMarketingSidebar } from "../components/email-marketing-sidebar";
import "../styles/email-marketing.css";

export function CampaignJefesTiPage() {
  return (
    <SidebarProvider>
      <EmailMarketingSidebar />
      <SidebarInset className="min-w-0">
        <div className="email-marketing-container w-full px-6 py-6 md:px-8 space-y-6">
          <EmailPreviewer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export function CampaignTemplatePage() {
  return (
    <SidebarProvider>
      <EmailMarketingSidebar />
      <SidebarInset className="min-w-0">
        <div className="email-marketing-container w-full px-6 py-6 md:px-8 space-y-6">
          <EmailPreviewer
            isTemplate
            campaignTitle="Plantilla Base Editable: 4 Bloques B2B"
            campaignSegment="Plantilla Reutilizable · Edición Directa"
          />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
