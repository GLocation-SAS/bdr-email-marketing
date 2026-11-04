import { EmailMarketingPage } from "@/modules/email-marketing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Marketing | GLocation",
  description: "Módulo de Email Marketing para Glocation.",
};

export default function Page() {
  return <EmailMarketingPage />;
}

