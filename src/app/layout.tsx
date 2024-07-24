import "./globals.css";
import { constructMetadata } from "@/lib/utils";
import { poppins } from "@/lib/font";
import Navbar from "@/components/Navbar";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
