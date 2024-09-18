import "./globals.css";
import { constructMetadata } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { poppins } from "@/lib/font";
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
