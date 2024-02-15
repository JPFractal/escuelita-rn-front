"use client";

import Icon from "../Icon";

import { button as colors } from "@/themes/colors";
import React, { MouseEventHandler } from "react";
import { start } from "repl";

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  color?: "green" | "sky" | "gray" | "pink";
  intensity?: "light" | "dark";
  iconSize?: "md" | "xs" | "lg";
  startIcon?: string;
  endIcon?: string;
  EndIcon?: React.ReactNode;
  StartIcon?: React.ReactNode;
  className?: string;
  href?: string;
  title?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler;
}

export default function Button({
  children,
  variant = "contained",
  color = "green",
  startIcon,
  endIcon,
  EndIcon,
  StartIcon,
  intensity = "dark",
  iconSize = "md",
  className = "",
  onClick = () => {},
  type = "button",
  title = "",
  href,
}: ButtonProps) {
  let styles =
    className +
    " flex rounded-lg px-4 py-[10px] items-center capitalize font-semibold gap-2 justify-center";

  if (variant === "outlined")
    styles += ` border ${colors[color].border} ${colors[color].text}`;

  if (variant === "contained")
    styles += ` ${colors[color].background[intensity]} ${
      intensity === "dark" ? "text-white-10" : colors[color].text
    }`;

  if (variant === "text") styles += ` ${colors[color].text}`;

  const content = (
    <>
      {startIcon && <Icon src={startIcon} size={iconSize} />}
      {StartIcon}
      {children}
      {EndIcon}
      {endIcon && <Icon src={endIcon} size={iconSize} />}
    </>
  );

  return href ? (
    <a href={href} className={styles}>
      {content}
    </a>
  ) : (
    <button className={styles} onClick={onClick} type={type} title={title}>
      {content}
    </button>
  );
}
