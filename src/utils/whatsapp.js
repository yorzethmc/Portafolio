export const openWhatsApp = (name, type, message) => {
  const phone = import.meta.env.VITE_WHATSAPP_PHONE || '50688292124';
  
  const text = `Hola Erick, soy ${name}.\nMe interesa consultar sobre: ${type}.\n\nMensaje:\n${message}`;
  const encodedText = encodeURIComponent(text);
  
  const url = `https://wa.me/${phone}?text=${encodedText}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};
