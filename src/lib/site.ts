export const SITE = {
  name: "Shri Shyam Bachat Bazaar Pvt. Ltd.",
  short: "Shri Shyam Bachat Bazaar",
  legalName: "Shri Shyam Bachat Bazaar Pvt. Ltd.",
  businessType: "Private Limited Company",
  gstin: "07ABPCS0982E1Z2",
  tagline: "Sasta Bhi, Best Bhi",
  founder: "Nikku Yadav",
  director: "Nikku Yadav",
  headOffice:
    "Plot No 90, House No 1062, Delhi Gurgaon Expressway, Near Allahabad Bank, Rajokri, New Delhi, Delhi - 110037",
  phones: ["+91 8860110909"],
  phoneRaw: "8860110909",
  phoneDisplay: "+91 8860110909",
  whatsappRaw: "919599172370",
  whatsappDisplay: "+91 95991 72370",
  email: "shrishyambachatbazaarpvtltd@gmail.com",
  branches: [
    { name: "Rajokri Branch", address: "Rajokri, New Delhi, India" },
    { name: "Mahipalpur Branch", address: "Mahipalpur, New Delhi, India" },
  ],
};

export const waLink = (_msg?: string) =>
  `https://wa.me/${SITE.whatsappRaw}?text=Hi%20I%20want%20to%20know%20more`;
