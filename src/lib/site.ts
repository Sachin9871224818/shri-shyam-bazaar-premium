export const SITE = {
  name: "Shri Shyam Bachat Bazaar",
  short: "Shri Shyam Bachat Bazaar",
  tagline: "Sasta Bhi, Best Bhi",
  founder: "Nikku Yadav",
  phones: ["8860120909", "8860110909"],
  whatsappRaw: "919599172370",
  whatsappDisplay: "+91 9599172370",
  email: "shrishyambachatbazaarpvtltd@gmail.com",
  branches: [
    { name: "Rajokri Branch", address: "Rajokri, New Delhi, India" },
    { name: "Mahipalpur Branch", address: "Mahipalpur, New Delhi, India" },
  ],
};

export const waLink = (msg = "Hello! I'd like to know more about Shri Shyam Bachat Bazaar.") =>
  `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(msg)}`;
