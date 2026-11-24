import { CampaignRedLogisticaPage } from "@/modules/email-marketing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaña Proveedores en Red: Logística | GLocation",
  description:
    "Previsualización y exportación HTML de la campaña de Email Marketing para Logística y Transporte.",
};

export default function Page() {
  return <CampaignRedLogisticaPage />;
}
