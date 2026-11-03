import { site } from "@/data/site";
export default function WhatsAppButton() {
  return <a className="wa" aria-label="Chat on WhatsApp" target="_blank" rel="noreferrer" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book an appointment.")}`}>Chat</a>;
}
