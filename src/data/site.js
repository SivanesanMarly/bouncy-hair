// ============================================================
// All content lives here. Details marked "Justdial" come from the
// public Justdial listing; items marked TODO still need real values.
// ============================================================
export const site = {
  name: "Bouncy Hair Unisex Saloon & Spa",
  tagline: "Hair that moves with you.",
  intro:
    "A unisex salon in Edamalaipattipudur, Trichy for hair spa, styling, colour highlights, skin care, detanning and bridal makeup. Serving Trichy since 2019.",
  established: 2019,
  phone: "+91 90000 00000", // TODO: add the real number (Justdial hides it from bots)
  whatsapp: "919000000000", // TODO: country code + number, no "+"
  email: "", // TODO (optional)
  address: "Amr Complex, State Bank Colony, Edamalaipattipudur, Trichy – 620012",
  mapQuery: "Bouncy Hair Unisex Saloon and Spa, Amr Complex, State Bank Colony, Edamalaipattipudur, Trichy 620012",
  rating: { score: 4.6, count: 74 }, // Justdial
  justdialUrl: "https://www.justdial.com/Trichy/Bouncy-Hair-Unisex-Saloon-Edamalaipattipudur/0431PX431-X431-210715191843-K3B4_BZDET",
  hours: [{ day: "Every day", time: "Open until 9:00 pm" }], // TODO: add exact opening time and weekly off day
  social: { instagram: "", facebook: "" }, // TODO
  heroImage: null, // e.g. "/images/hero.jpg"
};

export const highlights = [
  { big: "2019", small: "Serving Trichy since" },
  { big: "4.6★", small: "from 74 Justdial ratings" },
  { big: "Unisex", small: "Men, women and kids" },
  { big: "9 pm", small: "Open late, every day" },
];

export const categories = ["All", "Hair", "Skin", "Makeup"];

// Services listed on Justdial. Prices are not public, so the site shows "Ask for price".
export const services = [
  { name: "Hair spa", for: "Hair", price: null, note: "Deep conditioning and scalp massage for soft, healthy hair." },
  { name: "Hair care treatments", for: "Hair", price: null, note: "Treatments matched to your hair type and concerns." },
  { name: "Hair styling", for: "Hair", price: null, note: "Cuts, blow dries and party styles for men and women." },
  { name: "Hair highlights", for: "Hair", price: null, note: "Colour highlights placed to suit your skin tone." },
  { name: "Skin care", for: "Skin", price: null, note: "Facials and skin treatments for a fresh, even glow." },
  { name: "Detanning", for: "Skin", price: null, note: "Removes tan and brings back brightness." },
  { name: "Basic makeup", for: "Makeup", price: null, note: "Light, natural makeup for events and photos." },
  { name: "Bridal makeup", for: "Makeup", price: null, note: "Complete bridal look with hair styling." },
];

// Add real photos in /public/images and set `image` (e.g. "/images/gallery-1.jpg").
export const gallery = [
  { alt: "Hair spa", icon: "spa", image: null },
  { alt: "Hair styling", icon: "comb", image: null },
  { alt: "Colour highlights", icon: "drop", image: null },
  { alt: "Bridal makeup", icon: "brush", image: null },
  { alt: "Skin care", icon: "spark", image: null },
  { alt: "Salon interior", icon: "chair", image: null },
];

export const timeSlots = ["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"];

// ---------- Extra content ----------
export const about = {
  title: "A neighbourhood salon with a bouncy attitude",
  paras: [
    "Bouncy Hair Unisex Saloon & Spa opened in Edamalaipattipudur, Trichy in 2019. It is a salon for the whole family: men, women and kids can all book here, so nobody has to travel across town for a different chair.",
    "We focus on hair first. Spa treatments, styling and colour highlights are the heart of the menu, backed by skin care, detanning and makeup, including full bridal looks.",
    "Customers have rated us 4.6 out of 5 on Justdial. We would like you to leave feeling the same way: relaxed, listened to, and happy with your hair.",
  ],
};

export const why = [
  { icon: "users", title: "One salon for everyone", text: "Men, women and kids are all welcome. Book together and sit side by side." },
  { icon: "spa", title: "Hair-first expertise", text: "Hair spa, care treatments, styling and highlights are our core services." },
  { icon: "spark", title: "Skin and makeup too", text: "Skin care, detanning, basic makeup and bridal makeup under one roof." },
  { icon: "home", title: "Home services offered", text: "Can't travel? Ask us about makeup and beauty services at your home." },
  { icon: "clock", title: "Open late", text: "We stay open until 9 pm, so you can come after work or school." },
  { icon: "star", title: "Rated 4.6 on Justdial", text: "Backed by 74 customer ratings and a business listing verified as claimed." },
];

export const steps = [
  { title: "Tell us what you want", text: "Pick a service online or call us. Bring photos of styles you like." },
  { title: "Quick consultation", text: "We look at your hair, skin and routine, then suggest what will work." },
  { title: "Relax in the chair", text: "Your stylist explains each step and the products being used." },
  { title: "Take-home advice", text: "You leave with simple care tips so the result lasts between visits." },
];

export const bridal = {
  title: "Your wedding day, start to finish",
  text: "From a trial look to the final pleat, we handle bridal makeup and hairstyling. Family and friends can book party makeup on the same day.",
  items: ["Bridal makeup and hair styling", "Skin prep and detanning before the event", "Basic makeup for relatives and friends", "Home service available on request"],
};

export const tips = [
  { title: "Oil, then spa", text: "Warm oil before a hair spa helps conditioning treatments absorb better." },
  { title: "Wash less hot", text: "Lukewarm water keeps colour and highlights looking fresh for longer." },
  { title: "Trim often", text: "A light trim every 8 to 10 weeks keeps styled hair shaped and healthy." },
  { title: "Protect from the sun", text: "Tan builds up on skin and hair. Cover up, then book detanning if needed." },
];

export const faqs = [
  { q: "Do you serve both men and women?", a: "Yes. We are a unisex salon, so men, women and kids can all book." },
  { q: "Do I need an appointment?", a: "Walk-ins are welcome when a stylist is free, but booking ahead guarantees your time, especially on weekends and before festivals." },
  { q: "Do you offer bridal makeup?", a: "Yes. We offer bridal makeup, hair styling and basic makeup for the bride's family and friends." },
  { q: "Do you provide services at home?", a: "Home services are listed on our Justdial profile. Call or message us to check what is available for your area and date." },
  { q: "How much do services cost?", a: "Prices depend on hair length, products and the treatment. Call or message us on WhatsApp for a quote before you visit." },
  { q: "Until what time are you open?", a: "We are open until 9:00 pm. Call us to confirm the day's timings." },
  { q: "Where are you located?", a: "Amr Complex, State Bank Colony, Edamalaipattipudur, Trichy – 620012." },
];

// ---------- Offers (SAMPLE: replace with the salon's real current offers) ----------
export const offerEnds = "2026-11-12T23:59:59+05:30"; // TODO: festive offer end date
export const offers = [
  { badge: "25% OFF", tag: "Festive", title: "Diwali Glow Hair Spa", text: "Deep-conditioning hair spa with a relaxing scalp massage.", code: "DIWALI25", service: "Hair spa", ends: offerEnds },
  { badge: "20% OFF", tag: "Combo", title: "Style + Spa Combo", text: "Book a hair styling and a hair spa together and save.", code: "COMBO20", service: "Hair styling", ends: offerEnds },
  { badge: "15% OFF", tag: "Bridal", title: "Bridal Early Bird", text: "Book bridal makeup 30 days ahead and lock in your date.", code: "BRIDE15", service: "Bridal makeup", ends: null },
  { badge: "10% OFF", tag: "New here", title: "First Visit Treat", text: "Your first visit to Bouncy comes with a welcome discount.", code: "WELCOME10", service: "", ends: null },
  { badge: "15% OFF", tag: "Weekdays", title: "Happy Hours", text: "Monday to Thursday, 11 am to 4 pm. Quiet chairs, better prices.", code: "HAPPY15", service: "", ends: null },
  { badge: "₹200 OFF", tag: "Refer", title: "Bring a Friend", text: "You and your friend both get ₹200 off the next visit.", code: "REFER200", service: "", ends: null },
];
export const ticker = ["Hair Spa", "Hair Styling", "Colour Highlights", "Skin Care", "Detanning", "Bridal Makeup", "Unisex Salon", "Home Services", "Open till 9 pm"];
