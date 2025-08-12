import HeaderComponent from "@/components/sharedcomponents/header";
import FooterComponent from "@/components/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <HeaderComponent />
      <main className="flex-1 wrapper">{children}</main>
      <FooterComponent />
    </div>
  );
}
