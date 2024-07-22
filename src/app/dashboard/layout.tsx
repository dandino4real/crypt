import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import Footer from "@/components/footer/page";
import DashboardNavbar from "@/components/dashboard/navbar/navbar";
// import ProtectedRoute from "@/components/protectedRoute/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "user-dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ProtectedRoute>
      <div className="max-w-screen">
        <div className="grid grid-cols-5 min-h-screen ">
          <div
            // className=" col-span-1 rounded-br-3xl sticky top-0 h-screen and overflow-y-auto scroll-easy bg-[#1A1F30] "
            className=" col-span-1 sticky top-0 h-screen and overflow-y-auto scroll-easy   "
            // style={{
            //   backgroundColor: "#0A0C0F",
            // }}
          >
            <div className="absolute inset-0 bg-black opacity-30 "></div>
            <Sidebar />
          </div>

          <div className=" col-span-4 overflow-x-hidden">
            <div>
              <DashboardNavbar />
            </div>
            <div>{children}</div>
          </div>
        </div>
        {/* <div>
          <Footer />
        </div> */}
      </div>
    // </ProtectedRoute>
  );
}
