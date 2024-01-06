import { IconType } from "react-icons";
import { Icons } from "../../utils/icons";

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
  { name: "Saques", icon: Icons.BiMoneyWithdraw, href: "saques" },
  { name: "Aprovar conta", icon: Icons.BiMoneyWithdraw, href: "aprovar-conta" },
];
