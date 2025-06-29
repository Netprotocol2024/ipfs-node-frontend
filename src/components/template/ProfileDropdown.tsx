import { Link, useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PATHS } from "@/constants/page-paths";
// import { useGetProfile } from "@/lib/hooks/api/profile.hook";

import { useAppConfig } from "../layouts/AppConfigProvider";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

interface ProfileMenuList {
  title: string;
  path: string;
}



export function ProfileDropdown() {
  const navigate=useNavigate();
  return (
    <Button className="text-white" onClick={()=>navigate('/login')}>Login</Button>
  );
}
