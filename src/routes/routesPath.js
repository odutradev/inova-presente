import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineSolution, AiOutlineSetting, AiOutlineFolderAdd, AiOutlineUserSwitch } from "react-icons/ai";

const routesPath = [
      {
        name: "Visão Geral",
        icon: AiOutlineHome,
        route: "/dashboard"
      },
      {
        name: "Turmas",
        icon: AiOutlineFolderAdd,
        route: "/dashboard/classes"
      },
      {
        name: "Configurações",
        icon: AiOutlineSetting,
        route: "/dashboard/settings"
      }
  
  ];

  export default routesPath