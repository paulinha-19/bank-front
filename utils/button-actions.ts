import { Icons } from "@/utils/icons";

const { BiSolidEditAlt, BsEyeFill, AiFillDelete,AiFillDislike, AiFillLike } = Icons;

export const buttonActionsEVE = [
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

export const buttonActionsAR = [
  {
    colorScheme: "green",
    fontSize: "20px",
    ariaLabel: "Aprovar",
    icon: AiFillLike,
  },
  {
    colorScheme: "red",
    fontSize: "20px",
    ariaLabel: "Recusar",
    icon: AiFillDislike,
  },
];

export const buttonActions = {
  buttonActionsEVE, 
  buttonActionsAR
}


