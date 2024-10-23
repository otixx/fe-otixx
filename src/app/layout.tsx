import { poppins } from "@/lib/font";
import NextAuthProviders from "@/providers/NextAuthProviders";
import "./globals.css";
import ProtectedProviders from "@/providers/ProtectedProviders";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={poppins.className}>
        <NextAuthProviders>
          <ProtectedProviders>{children}</ProtectedProviders>
        </NextAuthProviders>
      </body>
    </html>
  );
}
