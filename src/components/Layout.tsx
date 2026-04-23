import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyWhatsApp } from "./StickyWhatsApp";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
