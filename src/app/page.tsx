import { EmailMarketingPage } from "@/modules/email-marketing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Marketing | GLocation",
  description: "Módulo de Email Marketing B2B y plantillas por bloques de GLocation.",
};

export default function Home() {
  return <EmailMarketingPage />;
}
