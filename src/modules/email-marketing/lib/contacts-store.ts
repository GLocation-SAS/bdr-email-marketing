export interface MarketingContact {
  email: string;
  entity?: string;
  role?: string;
  status: "subscribed" | "unsubscribed";
  updatedAt: string;
  reason?: string;
}

const STORAGE_KEY = "glocation_email_marketing_contacts_v1";

const DEFAULT_CONTACTS: MarketingContact[] = [
  {
    email: "jefe.tic@entidad.gov.co",
    entity: "Entidad Pública Nacional",
    role: "Jefe de Oficina TIC",
    status: "subscribed",
    updatedAt: "2026-11-04T08:00:00.000Z",
  },
  {
    email: "direccion.sistemas@ministerio.gov.co",
    entity: "Ministerio Sectorial",
    role: "Director de Tecnologías y Sistemas",
    status: "subscribed",
    updatedAt: "2026-11-04T08:00:00.000Z",
  },
];

export function getMarketingContacts(): MarketingContact[] {
  if (typeof window === "undefined") return DEFAULT_CONTACTS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_CONTACTS));
      return DEFAULT_CONTACTS;
    }
    const parsed = JSON.parse(raw) as MarketingContact[];
    return Array.isArray(parsed) ? parsed : DEFAULT_CONTACTS;
  } catch {
    return DEFAULT_CONTACTS;
  }
}

export function unsubscribeMarketingContact(
  email: string,
  reason?: string
): MarketingContact[] {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) return getMarketingContacts();

  const current = getMarketingContacts();
  const now = new Date().toISOString();
  const exists = current.some(
    (c) => c.email.toLowerCase() === normalizedEmail
  );

  const updated: MarketingContact[] = exists
    ? current.map((c) =>
      c.email.toLowerCase() === normalizedEmail
        ? {
          ...c,
          status: "unsubscribed" as const,
          updatedAt: now,
          reason: reason || "Baja solicitada desde el footer del correo",
        }
        : c
    )
    : [
      {
        email: normalizedEmail,
        entity: "Contacto externo",
        role: "Destinatario campaña TIC",
        status: "unsubscribed" as const,
        updatedAt: now,
        reason: reason || "Baja solicitada desde el footer del correo",
      },
      ...current,
    ];

  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new Event("glocation-contacts-updated"));
    } catch {
      // ignore storage errors
    }
  }

  return updated;
}

export function resubscribeMarketingContact(email: string): MarketingContact[] {
  const normalizedEmail = email.trim().toLowerCase();
  const current = getMarketingContacts();
  const now = new Date().toISOString();

  const updated = current.map((c) =>
    c.email.toLowerCase() === normalizedEmail
      ? { ...c, status: "subscribed" as const, updatedAt: now, reason: undefined }
      : c
  );

  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new Event("glocation-contacts-updated"));
    } catch {
      // ignore storage errors
    }
  }

  return updated;
}

