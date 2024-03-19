"use client";
import useButtonStyle from "@/hooks/useButtonStyle";
import Spinner from "../Spinner";
import { ButtonProps } from "./types";
import clsx from "clsx";
import { useEffect } from "react";

const Button = ({
  children,
  className,
  onClick,
  full,
  color,
  text,
  disabled,
  loading,
}: ButtonProps) => {
  const btnStyles = useButtonStyle({
    full,
    color,
    text,
    disabled: disabled !== undefined && disabled,
  });

  useEffect(() => {
    console.log({ btnStyles });
  }, [btnStyles]);

  return (
    <button
      onClick={(e) => onClick?.(e)}
      disabled={disabled}
      // className={btnStyles + " " + className}
      className={clsx(
        "button rounded-md active:scale-95 transition-all duration-100",
        className
      )}
    >
      {loading ? <Spinner size="small" color="body" /> : children}
    </button>
  );
};

export default Button;
