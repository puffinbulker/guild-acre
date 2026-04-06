export function WhatsAppFloat() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";

  return (
    <a
      href={`https://wa.me/${number}?text=Hi%2C%20I%27m%20interested%20in%20a%20property%20in%20Gurgaon.`}
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
}
