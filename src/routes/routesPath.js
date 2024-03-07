import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineSolution, AiOutlineSetting, AiOutlineFolderAdd, AiOutlineUserSwitch } from "react-icons/ai";

const routesPath = [
      {
        name: "Visão Geral",
        icon: AiOutlineHome,
        route: "/dashboard"
      },
      {
        name: "Carrinho",
        icon: AiOutlineShoppingCart,
        route: "/dashboard/cart"
      },
      {
        name: "Categorias",
        icon: AiOutlineFolderAdd,
        route: "/dashboard/category"
      },
      {
        name: "Usuarios",
        icon: AiOutlineUserSwitch,
        route: "/dashboard/users"
      },
      {
        name: "Sobre mim",
        icon: AiOutlineSolution,
        route: "/dashboard/profile"
      },
      {
        name: "Configurações",
        icon: AiOutlineSetting,
        route: "/dashboard/settings"
      }
  
  ];

  export default routesPath