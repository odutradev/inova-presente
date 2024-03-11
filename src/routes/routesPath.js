import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineSolution, AiOutlineQrcode, AiOutlineSetting, AiOutlineFolderAdd, AiOutlineUserSwitch } from "react-icons/ai";

const routesPath = {
  admin: [
    {
      name: "Visão Geral",
      icon: AiOutlineHome,
      route: "/dashboard"
    },
    {
      name: "Presença",
      icon: AiOutlineQrcode,
      route: "/dashboard/presence"
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
  ],
  normal: [
    {
      name: "Presença",
      icon: AiOutlineQrcode,
      route: "/dashboard/presence"
    },
    {
      name: "Configurações",
      icon: AiOutlineSetting,
      route: "/dashboard/settings"
    }
  ],
}

  export default routesPath