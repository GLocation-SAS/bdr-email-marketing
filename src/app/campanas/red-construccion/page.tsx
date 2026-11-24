import { CampaignRedConstruccionPage } from "@/modules/email-marketing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaña Proveedores en Red: Construcción | GLocation",
  description:
    "Previsualización y exportación HTML de la campaña de Email Marketing para Construcción e Inmobiliario.",
};

export default function Page() {
  return <CampaignRedConstruccionPage />;
}
