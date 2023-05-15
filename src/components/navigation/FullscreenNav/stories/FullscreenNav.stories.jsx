import React from "react";
import { FullscreenNav } from "..";

const story = {
  title: "navigation/FullscreenNav/Default",
  components: [FullscreenNav],
};

const navObject = [
  {
    subTitle: "ADMINISTRATE",
    routes: [
      {
        id: 1,
        label: "Privilegios",
        description: "Modifica las propiedades y permisos de tu cuenta",
        icon: "<MdVpnKey />",
        url: "/privileges",
      },
      {
        id: 2,
        label: "Contabilidad",
        description: "Registra ingresos y gastos económicos de la compañía",
        icon: "<MdMoney />",
        url: "/accounting",
      },
      {
        id: 3,
        label: "Contactos",
        description: "Registra tus contactos y almacénalos de manera óptima",
        icon: "<MdContacts />",
        url: "/contacts",
      },
    ],
  },
  {
    subTitle: "REQUEST",
    routes: [
      {
        id: 1,
        label: "Documents",
        description: "documents",
        icon: "<MdBadge />",
        url: "/documents",
      },
      {
        id: 2,
        label: "Marketing",
        description: "marketing",
        icon: "<MdStar />",
        url: "/marketing",
      },
      {
        id: 3,
        label: "Savings",
        description: "savings",
        icon: "<MdAccountBalanceWallet />",
        url: "/savings",
      },
      {
        id: 4,
        label: "Credit",
        description: "credit",
        icon: "<MdAccountBalance />",
        url: "/credit",
      },
    ],
  },
];

const Default = (args) => <FullscreenNav {...args} />;

Default.args = {
  portalId: "portals",
  navObject,
};

export default story;

export { Default };
