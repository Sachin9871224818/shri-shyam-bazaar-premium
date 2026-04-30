export const SITE = {
  name: "Shri Shyam Bachat Bazaar",
  short: "Shri Shyam Bachat Bazaar",
  tagline: "Sasta Bhi, Best Bhi",
  founder: "Nikku Yadav",
  phones: ["+91 8860110909"],
  phoneRaw: "8860110909",
  phoneDisplay: "+91 8860110909",
  whatsappRaw: "918860110909",
  whatsappDisplay: "+91 8860110909",
  email: "shrishyambachatbazaarpvtltd@gmail.com",
  branches: [
    { name: "Rajokri Branch", address: "Rajokri, New Delhi, India" },
    { name: "Mahipalpur Branch", address: "Mahipalpur, New Delhi, India" },
  ],
};

export const waLink = (_msg?: string) =>
  `https://wa.me/${SITE.whatsappRaw}?text=Hi%20I%20want%20to%20know%20more`;
