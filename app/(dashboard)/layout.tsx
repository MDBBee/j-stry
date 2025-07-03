import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="px-4 grid lg:grid-cols-5">
      {/* NavBar */}
      {/* Sidebar- hide on small screen */}
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <Sidebar />
      </div>
      <div className="lg:col-span-4">
        <Navbar />
        <div className="py-8 px-4 sm:px-8 lg:px-16 ">{children}</div>
      </div>
    </main>
  );
}
