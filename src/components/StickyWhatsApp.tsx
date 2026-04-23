import { waLink } from "@/lib/site";

export function StickyWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-brand transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor">
        <path d="M19.11 17.21c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.21-1.36-.82-.73-1.37-1.62-1.53-1.9-.16-.27-.02-.42.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.54-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.99 2.66 1.12 2.84c.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.71 1.43 5.33L5.33 26.67l5.49-1.43c1.56.85 3.32 1.3 5.2 1.3 5.89 0 10.67-4.78 10.67-10.67S21.91 5.33 16.02 5.33z" />
      </svg>
    </a>
  );
}
