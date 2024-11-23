import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ii-portofolio",
  description: "My professional portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-cover bg-center bg-fixed`}
        style={{
          backgroundImage:
            "url('/images/background.png?height=1080&width=1920')",
        }}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
