import { CampaignRedAgroindustriaPage } from "@/modules/email-marketing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaña Proveedores en Red: Agroindustria | GLocation",
  description:
    "Previsualización y exportación HTML de la campaña de Email Marketing para Agroindustria y Alimentos.",
};

export default function Page() {
  return <CampaignRedAgroindustriaPage />;
}
