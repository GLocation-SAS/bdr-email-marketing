import { GoogleFormsHeaderPage } from "@/modules/email-marketing/pages/campaign-jefes-ti-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encabezado Google Forms · Jefes TIC (1600×400) | Glocation",
  description:
    "Encabezado gráfico oficial 1600 × 400 px para Google Forms alineado con el Hero 1 de la campaña Jefes TIC de GLocation.",
};

export default function Page() {
  return <GoogleFormsHeaderPage />;
}
