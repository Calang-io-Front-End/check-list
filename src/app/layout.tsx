import "styles/globals.css";
import { Inter } from "next/font/google";
import Footer from "components/Footer";
import Header from "components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Check List",
  description: "Desafio Calang.io - Check List"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header className={"flex justify-center"} />
        {children}
        <Footer className={"flex justify-center"} />
      </body>
    </html>
  );
}
