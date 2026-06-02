const WHATSAPP_NUMBER = "918119914534";

export function buildWhatsAppUrl(message, number = WHATSAPP_NUMBER) {
  const text = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${text}`;
}

export const WHATSAPP_CONTACT = WHATSAPP_NUMBER;
