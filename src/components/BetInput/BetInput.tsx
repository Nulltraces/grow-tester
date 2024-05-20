import { SilverLockIcon } from "@/assets/icons";
import { ComponentProps, useEffect, useState } from "react";
import Input from "../Input";

type Props = { inputProps: ComponentProps<typeof Input> };

export default function BetInput({ inputProps }: Props) {
  const { value: val, ...iProps } = inputProps;

  const [value, setValue] = useState((val && +val) || 0);

  const multiplyValue = (multiplier: number) => {
    setValue(value * multiplier);
  };

  useEffect(() => {
    console.log("VALUE: ", val);
    // setValue((prev) => (val ? +val : prev));
    setValue(val !== undefined && !isNaN(+val) ? +val : 0);
  }, [val]);

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
        value={value}
        {...iProps}
      />
      <div className="absolute flex items-center gap-2 right-2">
        <div className="flex gap-2.5 font-semibold">
          <button
            type="button"
            onClick={() => multiplyValue(0.5)}
            className="active:scale-90 transition-all duration-200 hover:text-white"
          >
            1/2
          </button>
          <button
            type="button"
            onClick={() => multiplyValue(2)}
            className="active:scale-90 transition-all duration-200 hover:text-white"
          >
            2×
          </button>
        </div>
      </div>
    </div>
  );
}
