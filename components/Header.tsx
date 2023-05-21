import { LogOutIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          BME-VES
        </h1>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Biomedical Engineering Virtual Education System for Radiology and
          Nuclear Medicine Devices
        </h4>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" onClick={() => signOut()}>
              <LogOutIcon size={40} className="m-1" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Log out</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Header;
