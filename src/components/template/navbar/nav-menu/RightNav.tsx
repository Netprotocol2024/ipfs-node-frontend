import { AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { PATHS } from "@/constants/page-paths";
import { useAuth } from "@/lib/hooks/useAuth";

import { ProfileDropdown } from "../../ProfileDropdown";
import { DesktopMenu } from './DesktopMenu';
export const RightNav = () => {
  const navigate = useNavigate();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  return (
    <div className="flex items-center  text-md justify-between gap-2 md:gap-6 h-full px-10">
      
        <ProfileDropdown />
    </div>
  );
};
