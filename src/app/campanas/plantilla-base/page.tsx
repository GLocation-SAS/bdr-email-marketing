import { CampaignTemplatePage } from "@/modules/email-marketing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantilla Base Editable: 4 Bloques B2B | Glocation",
  description:
    "Plantilla base editable por bloques para campañas de Email Marketing B2B de Glocation.",
};

export default function Page() {
  return <CampaignTemplatePage />;
}
