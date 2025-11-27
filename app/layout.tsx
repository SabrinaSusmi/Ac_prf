import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Sabrina Islam",
  description:
    "Personal academic and research portfolio of Sabrina Islam — Lecturer, Researcher, and Software Engineer.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-page text-main scroll-smooth">
      <body className="font-body antialiased leading-relaxed selection:bg-accent/10 selection:text-main">
        {/* --- Navbar --- */}
        <Navbar />

        {/* --- Main Content --- */}
        <main className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
          {children}
        </main>

        {/* --- Footer --- */}
        <footer
          id="contact"
          className="mt-20 border-t border-border py-10 text-center text-sm text-main/70"
        >
          <p>© {new Date().getFullYear()} Sabrina Islam — All Rights Reserved</p>
        </footer>
      </body>
    </html>
  );
}
