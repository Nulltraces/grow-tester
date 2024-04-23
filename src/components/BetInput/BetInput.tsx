import { SilverLockIcon } from "@/assets/icons";
import { ComponentProps } from "react";
import Input from "../Input";

type Props = { inputProps: ComponentProps<typeof Input> };

export default function BetInput({ inputProps }: Props) {
  return (
    <div className="relative flex items-center w-full">
      <div className="absolute flex items-center gap-2 left-2">
        <img
          src={SilverLockIcon}
          width="18"
          height="18"
          className="sc-x7t9ms-0 grLtgJ"
        />
      </div>
      <Input
        placeholder="Bet"
        className="outline-none indent-5 border-none p-1 text-[0.9rem] flex-grow text-white font-medium"
        type="number"
        // onChange={onChange}
        {...inputProps}
      />
      <div className="absolute flex items-center gap-2 right-2">
        <div className="flex gap-2.5 font-semibold">
          <button className="transition-colors hover:text-white">1/2</button>
          <button className="transition-colors hover:text-white">2×</button>
        </div>
      </div>
    </div>
  );
}
