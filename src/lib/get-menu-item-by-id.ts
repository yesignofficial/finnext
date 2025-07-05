import type { MenuItem } from "@/types/menu";

export const getMenuItemById = (id: string, items: MenuItem[]) => {
  return items.find((item) => item._id === id);
};
