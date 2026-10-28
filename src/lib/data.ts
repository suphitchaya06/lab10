import type { Menu } from "./logic";

export const MENUS: Menu[] = [
  { id: 1, name: "ข้าวมันไก่", price: 45, category: "ข้าว", spicy: false, emoji: "🍗" },
  { id: 2, name: "ก๋วยเตี๋ยวต้มยำ", price: 50, category: "เส้น", spicy: true, emoji: "🍜" },
  { id: 3, name: "กะเพราหมูกรอบ", price: 60, category: "ข้าว", spicy: true, emoji: "🌶️" },
  { id: 4, name: "สเต๊กหมู", price: 89, category: "จานเดียว", spicy: false, emoji: "🥩" },
  { id: 5, name: "ชาไทย", price: 25, category: "เครื่องดื่ม", spicy: false, emoji: "🧋" },
];
