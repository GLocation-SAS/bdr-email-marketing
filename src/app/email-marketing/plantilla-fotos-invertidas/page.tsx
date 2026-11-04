import { CampaignInvertedTemplatePage } from "@/modules/email-marketing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantilla Dos Fotos Invertidas · Zig-Zag | Glocation",
  description:
    "Plantilla editable con dos fotos invertidas en zig-zag y selector de paleta de colores.",
};

export default function Page() {
  return <CampaignInvertedTemplatePage />;
}
