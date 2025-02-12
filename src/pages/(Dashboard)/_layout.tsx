import { Outlet } from "react-router-dom";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";
import { useState } from "react";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <div className={`flex-none ${isOpen ? "w-60" : "w-24"}`}>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <main className="flex-1">
        <div className="flex flex-col gap-4">
          <Header />
          <div className="px-4">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
