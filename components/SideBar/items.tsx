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
    href: "admin/dashboard",
  },
  { name: "Chave pix", icon: Icons.MdPix, href: "admin/chave" },
  { name: "Saques", icon: Icons.BiMoneyWithdraw, href: "admin/saques" },
];
