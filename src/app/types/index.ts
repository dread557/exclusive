import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface ItemCardProps {
  name: string;
  price: number;
  rating: number;
  discount?: number;
  image: string;
  totalRating: number;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: string;
}

export interface CountdownTimerProps {
  date: string;
}
