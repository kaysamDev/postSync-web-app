import { useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/Button";
import { Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { LogOut, User } from "lucide-react";
import { Separator } from "../../../../components/ui/separator";
import { useState, useEffect } from "react";

export default function Header() {
  const [title, setTitle] = useState<string>("");
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/dashboard") {
      setTitle("Dashboard");
    } else if (pathname === "/accounts") {
      setTitle("Accounts");
    } else if (pathname === "/billing-payment") {
      setTitle("Billing & Payment");
    }
  }, [pathname]);

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h5>{title}</h5>
        <div className="flex items-center gap-4 md:mr-8">
          <Button variant="secondary">
            <Plus />
            New post
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">
                <LogOut />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator />
    </>
  );
}
