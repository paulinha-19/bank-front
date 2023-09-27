import { Icons } from "@/utils/icons";

const { BiSolidEditAlt, BsEyeFill, AiFillDelete } = Icons;

export const buttonsActions = [
  {
    colorScheme: "orange",
    fontSize: "20px",
    ariaLabel: "Editar",
    icon: BiSolidEditAlt,
  },
  {
    colorScheme: "teal",
    fontSize: "20px",
    ariaLabel: "Ver",
    icon: BsEyeFill,
  },
  {
    colorScheme: "red",
    fontSize: "20px",
    ariaLabel: "Excluir",
    icon: AiFillDelete,
  },
];
