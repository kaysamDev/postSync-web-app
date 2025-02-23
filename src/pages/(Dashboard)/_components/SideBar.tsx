import React, { useState } from "react";
import {
  Home,
  FileText,
  CreditCard,
  Settings,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  {
    href: "#",
    icon: FileText,
    label: "Content Management",
    subLinks: [
      { href: "/post-scheduler", label: "Post Scheduler" },
      { href: "/draft-post", label: "Draft Post" },
    ],
  },
  { href: "/accounts", icon: Settings, label: "Accounts" },
  { href: "/billing-payment", icon: CreditCard, label: "Billing & Payment" },
];

type ActionProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const SideBar: React.FC<ActionProps> = ({ isOpen }) => {
  const location = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  return (
    <div>
      <div
        className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0 w-68" : "-translate-x-0 w-16"} transition-transform duration-300 ease-in-out bg-primary-700 text-white`}
      >
        <div className="flex items-center justify-between p-4">
          <h5 className={`text-xl font-bold ${isOpen ? "block" : "hidden"}`}>
            Logo
          </h5>
        </div>
        <nav className="mt-4">
          {links.map((link, index) => (
            <div key={index}>
              <Link
                to={link.href}
                className={`flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-white/9 ${
                  location.pathname === link.href ? "bg-white/50" : ""
                }`}
                onClick={() => link.subLinks && toggleSubMenu(link.label)}
              >
                <link.icon size={20} className="mr-2" />
                <span className={`${isOpen ? "block" : "hidden"}`}>
                  {link.label}
                </span>
                {link.subLinks && (
                  <span className="ml-auto">
                    {openSubMenu === link.label ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </span>
                )}
              </Link>
              {link.subLinks && openSubMenu === link.label && (
                <div className={`ml-8 ${isOpen ? "block" : "hidden"}`}>
                  {link.subLinks.map((subLink, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subLink.href}
                      className={`flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-white/9 ${
                        location.pathname === subLink.href ? "bg-white/50" : ""
                      }`}
                    >
                      <span>{subLink.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
