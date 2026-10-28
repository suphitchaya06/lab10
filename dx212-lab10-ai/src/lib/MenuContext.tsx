import { createContext, useContext, useState, type ReactNode } from "react";

import { MENUS } from "./data";
import type { Menu } from "./logic";

type MenuContextValue = {
  menus: Menu[];
  addMenu: (menu: Omit<Menu, "id">) => void;
};

const MenuContext = createContext<MenuContextValue | null>(null);

// ตัวเก็บ state กลาง — ครอบทั้งแอปไว้ใน app/_layout.tsx
export function MenuProvider({ children }: { children: ReactNode }) {
  const [menus, setMenus] = useState<Menu[]>(MENUS);

  const addMenu = (menu: Omit<Menu, "id">) => {
    setMenus([...menus, { ...menu, id: Date.now() }]);
  };

  return (
    <MenuContext.Provider value={{ menus, addMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

// หน้าจอไหนอยากใช้ข้อมูลเมนู เรียก useMenus()
export function useMenus() {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("useMenus ต้องอยู่ภายใน <MenuProvider>");
  return ctx;
}
