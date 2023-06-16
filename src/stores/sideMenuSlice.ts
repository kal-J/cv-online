import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "MENU",
    {
      icon: "Home",
      title: "Dashboard",
      
    },
    {
      icon: "FileText",
      pathname: "/cv",
      title: "CV",
      
    },
    {
      icon: "CreditCard",
      pathname: "/orders",
      title: "Payment plans",
    },
    {
      icon: "Activity",
      pathname: "/orders",
      title: "Invoices",
    },
   
    
    
    
    
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
