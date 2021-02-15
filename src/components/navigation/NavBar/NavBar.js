import React from "react";
import { AppView } from "base";
import NavItem from "../NavItem";
import tailwind from "tailwind";
import home from "./home.png";
import maintenance from "./maintenance.png";
import quickId from "./quickId.png";
import more from "./more.png";
import add from "./add.png";

export default function NavBar() {
  //TODO: add navigation action here as well
  const navItems = [
    {
      id: 1,
      title: "Home",
      icon: home
    },
    {
      id: 2,
      title: "Maintenance",
      icon: maintenance
    },
    {
      id: 3,
      title: null,
      icon: add
    },
    {
      id: 4,
      title: "Quick ID",
      icon: quickId
    },
    {
      id: 5,
      title: "More",
      icon: more
    }
  ];
  return (
    <AppView
      style={tailwind(
        "absolute bottom-0 flex flex-row justify-evenly bg-vgb-white w-full h-20"
      )}
    >
      {navItems.map(item => (
        <NavItem key={item.id} title={item.title} icon={item.icon} />
      ))}
    </AppView>
  );
}
