import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata: Metadata = {
  title: "Cabinet d'avocat A. Harred",
  description:
    "Bienvenue sur le site du Cabinet d'avocat A. Harred, avocat dévoué à la protection de vos droits et intérêts. Avec une expertise solide dans le domaine juridique, nous sommes là pour vous guider à travers les complexités du système légal. Notre engagement envers nos clients se traduit par une représentation juridique de qualité, une communication transparente et des solutions sur mesure. Faites équipe avec nous pour faire valoir vos droits et obtenir la justice que vous méritez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
