"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, MailX, RotateCcw, ShieldCheck, Users } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  getMarketingContacts,
  MarketingContact,
  resubscribeMarketingContact,
  unsubscribeMarketingContact,
} from "../lib/contacts-store";

export function UnsubscribePage() {
  const searchParams = useSearchParams();
  const initialEmail = searchParams.get("email") || "jefe.tic@entidad.gov.co";

  const [email, setEmail] = React.useState(initialEmail);
  const [reason, setReason] = React.useState("");
  const [confirmed, setConfirmed] = React.useState(false);
  const [contacts, setContacts] = React.useState<MarketingContact[]>([]);

  React.useEffect(() => {
    setContacts(getMarketingContacts());
  }, []);

  const handleUnsubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Ingresa el correo electrónico que deseas dar de baja.");
      return;
    }
    const updated = unsubscribeMarketingContact(email, reason);
    setContacts(updated);
    setConfirmed(true);
    toast.success("Suscripción cancelada correctamente", {
      description: `${email.trim()} fue actualizado como Baja en la gestión de contactos.`,
    });
  };

  const handleResubscribe = (targetEmail: string) => {
    const updated = resubscribeMarketingContact(targetEmail);
    setContacts(updated);
    if (targetEmail.toLowerCase() === email.trim().toLowerCase()) {
      setConfirmed(false);
    }
    toast.success("Contacto reactivado en la lista de envíos", {
      description: targetEmail,
    });
  };

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/email-marketing">Email Marketing</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/campanas/email-jefes-ti">Campaña Jefes TIC</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Gestión de Baja y Contactos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card glow="primary-info">
        <CardHeader>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <MailX className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg md:text-xl">
                Cancelación de suscripción · Glocation
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">
                Actualiza el estado de recepción de comunicaciones comerciales en el registro de contactos.
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-5">
          {confirmed ? (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 space-y-3">
              <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-heading font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>
                  El correo <strong>{email}</strong> ha sido dado de baja de nuestras comunicaciones comerciales.
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                El estado del contacto se actualizó automáticamente a «Baja» en la gestión de contactos de la campaña.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <Button
                  variant="neutral"
                  size="sm"
                  onClick={() => handleResubscribe(email)}
                  leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
                  className="w-auto text-xs"
                >
                  Reactivar suscripción
                </Button>
                <Link href="/campanas/email-jefes-ti">
                  <Button variant="primary" size="sm" className="w-auto text-xs">
                    Volver al Email
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleUnsubscribe} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Correo electrónico institucional
                </label>
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nombre@entidad.gov.co"
                  className="text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Motivo de baja (opcional)
                </label>
                <Textarea
                  rows={2}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Ej. No soy la persona encargada del área TIC / No deseo recibir más comunicaciones comerciales."
                  className="text-xs"
                />
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  className="w-auto text-xs font-semibold"
                >
                  Confirmar cancelación de suscripción
                </Button>
                <Link href="/campanas/email-jefes-ti">
                  <Button
                    type="button"
                    variant="neutral"
                    size="sm"
                    className="w-auto text-xs"
                  >
                    Volver a la campaña
                  </Button>
                </Link>
              </div>
            </form>
          )}
        </CardContent>
      </Card>

      <Card size="sm">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Estado sincronizado en Gestión de Contactos
            </CardTitle>
            <Badge variant="neutral" className="text-[11px]">
              <ShieldCheck className="w-3 h-3 mr-1 inline text-emerald-500" />
              Habeas Data Activo
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-border text-xs">
            {contacts.map((contact) => (
              <div
                key={contact.email}
                className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <span className="font-semibold text-foreground">
                    {contact.email}
                  </span>
                  {contact.entity && (
                    <span className="text-muted-foreground ml-2">
                      · {contact.entity}
                    </span>
                  )}
                  {contact.reason && contact.status === "unsubscribed" && (
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Motivo: {contact.reason}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {contact.status === "unsubscribed" ? (
                    <>
                      <Badge variant="error" className="text-[10px]">
                        Baja confirmada
                      </Badge>
                      <Button
                        variant="neutral"
                        size="sm"
                        onClick={() => handleResubscribe(contact.email)}
                        className="w-auto h-6 text-[10px] px-2"
                      >
                        Reactivar
                      </Button>
                    </>
                  ) : (
                    <Badge variant="success" className="text-[10px]">
                      Suscrito activo
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
