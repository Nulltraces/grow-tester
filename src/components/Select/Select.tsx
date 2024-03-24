import { ExpandMoreIcon } from "@/assets/svgs";
import { Menu } from "@headlessui/react";
import { AnimateInOut } from "..";
import clsx from "clsx";

type Props = {
  label: string;
  data: { label: string; value: string }[];
};

export default function Select({ label, data }: Props) {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="flex flex-row items-center w-full gap-1 justify-between border border-gray-600 rounded p-2 bg-dark-700">
            <label className="text-white !font-bold uppercase">{label}</label>
            <ExpandMoreIcon
              className={`${
                open ? "rotate-180" : "rotate-0"
              } transform transition-transform duration-200 !stroke-white ml-auto`}
            />
          </Menu.Button>
          <AnimateInOut
            show={open}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "keyframes" }}
            className="flex_ flex-col_ w-full pt-[5px] space-y-1 max-h-[15rem] overflow-auto rounded-b-lg px-1 bg-dark-700 py-1"
          >
            <Menu.Items className="focus:outline-none">
              {data.map((datum, i) => (
                <Menu.Item key={i}>
                  {({ active }) => (
                    <button
                      type="button"
                      className={clsx(
                        "text-sm text-white block w-full text-left font-bold uppercase py-2 rounded px-2",
                        active && "bg-primary"
                      )}
                      tabIndex={0}
                      key={i}
                    >
                      <label>{datum.label}</label>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </AnimateInOut>
        </>
      )}
    </Menu>
  );
}
