import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/+918679007159"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-fab fixed bottom-[calc(env(safe-area-inset-bottom,0px)+1.5rem)] right-6 z-40 grid place-items-center h-14 w-14 rounded-full bg-gold text-[var(--ink)] shadow-luxe hover-lift animate-float"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
