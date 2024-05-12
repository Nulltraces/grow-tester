import { useAppSelector } from "@/hooks/store";
import { PropsWithChildren } from "react";

export default function BackgroundImage({
  variant = "profile",
  children,
}: PropsWithChildren<{ variant?: "profile" | "edit" }>) {
  const auth = useAppSelector((state) => state.auth);

  console.log("BACKGROUND: ", auth.user);

  return variant === "edit" ? (
    <div
      className={`sc-134abzr-0 edit-modal-bg`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(
${auth.user?.background || "/images/characters/backgrounds/sunny.webp"},
        )`,
      }}
    >
      {children}
    </div>
  ) : (
    <div
      className="flex flex-col mt-2 rounded-md sm:flex-row sm:items-end overflow-clip __user-bg__ sm:h-40"
      style={{
        backgroundImage: `linear-gradient(#e7bfbfa6, rgba(0,0,0,0.65)), url(
${auth.user?.background || "/images/characters/backgrounds/sunny.webp"})`,
      }}
    >
      {children}
    </div>
  );
}
