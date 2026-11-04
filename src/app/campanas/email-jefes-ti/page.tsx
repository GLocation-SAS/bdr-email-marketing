import { CampaignJefesTiPage } from "@/modules/email-marketing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaña Email: Jefes TIC | Glocation",
  description:
    "Previsualización y exportación HTML de la campaña de Email Marketing para Jefes de Oficinas TIC del sector público colombiano.",
};

export default function Page() {
  return <CampaignJefesTiPage />;
}

