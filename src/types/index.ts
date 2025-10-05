import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface ProductCardProps {
  _id: number;
  name: string;
  price: number;
  rating?: number;
  discount?: number;
  image: string;
  totalRating?: number;
  type?: "product" | "wishlist";
  categoryName?: string;
  slug: string;
  description: string;
}

export interface ProductDataProps {
  _id: number;
  name: string;
  price: number;
  rating?: number;
  discount?: number;
  images: string[];
  totalRating?: number;
  type?: "product" | "wishlist";
  categoryName?: string;
  slug: string;
  description: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: string;
  height?: string;
  btnType?: "primary" | "secondary";
}

export interface CountdownTimerProps {
  date: string;
}

export interface HamburgerType {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export interface CustomRadioProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export interface CartItemProps {
  name: string;
  quantity: number;
  price: number;
  itemImage: string;
}
