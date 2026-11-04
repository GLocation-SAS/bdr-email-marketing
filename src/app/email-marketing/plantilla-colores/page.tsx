import { CampaignDualColorTemplatePage } from "@/modules/email-marketing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantilla Dos Fotos + Bloques de Color | Glocation",
  description:
    "Plantilla editable con dos fotos en contraste y bloques de colores invertidos.",
};

export default function Page() {
  return <CampaignDualColorTemplatePage />;
}

