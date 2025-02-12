import React from "react";
import {
  ChevronRight,
  ChevronLeft,
  Home,
  FileText,
  CreditCard,
  Settings,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/#", icon: FileText, label: "Content Management" },
  { href: "/#", icon: Settings, label: "Accounts" },
  { href: "/#", icon: CreditCard, label: "Billing & Payment" },
];

type ActionProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const SideBar: React.FC<ActionProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0 w-60" : "-translate-x-0 w-16"} transition-transform duration-300 ease-in-out bg-primary-700 text-white`}
      >
        <div className="relative flex items-center justify-between p-4">
          <h5 className={`text-xl font-bold ${isOpen ? "block" : "hidden"}`}>
            Logo
          </h5>
          <button
            onClick={toggleSidebar}
            className="absolute right-0 top-4 transform translate-x-1/2 top-4 text-gray-800 focus:outline-none bg-gray-100 rounded-full p-1 shadow-md"
          >
            {isOpen ? <ChevronLeft size={30} /> : <ChevronRight size={30} />}
          </button>
        </div>
        <nav className="mt-4">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-white/9 ${
                location.pathname === link.href ? "bg-white/50" : ""
              }`}
            >
              <link.icon size={20} className="mr-2" />
              <span className={`${isOpen ? "block" : "hidden"}`}>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
