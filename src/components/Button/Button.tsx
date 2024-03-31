"use client";
import Spinner from "../Spinner";
import { ButtonProps } from "./types";
import clsx from "clsx";
import { useEffect } from "react";

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  stroke?: string;
  isActive?: boolean;
  icon?: React.FC<React.SVGProps<SVGElement>>;
}

const Button = ({
  children,
  className,
  full,
  color,
  text,
  loading,
  ...buttonProps
}: PropsWithChildren<Props & ButtonProps>) => {
  useEffect(() => {
    console.log({ full, color, text });
  }, [full, color, text]);

  return (
    <button
      // className={btnStyles + " " + className}
      className={clsx(
        "button whitespace-nowrap rounded-md active:scale-[.99] mx-auto transition-all duration-200 !py-1 disabled:opacity-50",
        className
      )}
      {...buttonProps}
    >
      {loading ? <Spinner size="small" color="body" className="" /> : children}
    </button>
  );
};

export default Button;
