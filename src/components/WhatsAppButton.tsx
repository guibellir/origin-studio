import { whatsappUrl } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl("Olá! Quero um orçamento para criação de site.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a Origin Studio"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 005.76 1.47h.01c6.55 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.16-3.44-8.44zM12.07 21.8h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.9 6.99c0 5.45-4.44 9.87-9.89 9.87zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
