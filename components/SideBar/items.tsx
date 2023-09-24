import { IconType } from "react-icons";
import { Icons } from "./icons";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

export const LinkItems: Array<LinkItemProps> = [
  {
    name: "Dashboard",
    icon: Icons.AiOutlineDashboard,
    href: "dashboard",
  },
  { name: "Chave pix", icon: Icons.MdPix, href: "chave" },
  { name: "Saque", icon: Icons.BiMoneyWithdraw, href: "saque" },
];
