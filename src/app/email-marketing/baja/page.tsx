import * as React from "react";
import { UnsubscribePage } from "@/modules/email-marketing/pages";

export default function EmailMarketingUnsubscribeRoute() {
  return (
    <React.Suspense fallback={null}>
      <UnsubscribePage />
    </React.Suspense>
  );
}

