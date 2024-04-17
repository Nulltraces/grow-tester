import { AnimateInOut } from "@/components";
import { Menu } from "@headlessui/react";
import { PropsWithChildren, useState } from "react";
import AllBets from "./AllBets";
import clsx from "clsx";
import MyBets from "./MyBets";
import Race from "./Race";
import BigBets from "./BigBets";
import { useAppSelector } from "@/hooks/store";

enum NavOptions {
  ALL_BETS = "All Bets",
  BIG_BETS = "Big Bets",
  MY_BETS = "My Bets",
  RACE = "Race",
}

const navComponents = {
  [NavOptions.ALL_BETS]: <AllBets />,
  [NavOptions.BIG_BETS]: <BigBets />,
  [NavOptions.MY_BETS]: <MyBets />,
  [NavOptions.RACE]: <Race />,
};

const navDropClassnames = "absolute left-0 top-12";

export default function Bets() {
  const auth = useAppSelector((state) => state.auth);
  const [navOption, setNavOption] = useState<NavOptions>(NavOptions.ALL_BETS);

  const NavWrapper = ({ children }: PropsWithChildren) => {
    return (
      <AnimateInOut
        show
        initial={{ translateY: 200, opacity: 0 }}
        exit={{ translateY: 200, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "keyframes", duration: 0.6 }}
        className={navDropClassnames}
      >
        <div className="max-h-[500px] min-h-[500px]_ overflow-y-auto overflow-hidden overflow-x-auto min-h-[100px] bg-green-400_  ">
          <div className="table-wrapper ">
            <table className="pr-1 overflow-x-scroll max-w-[100vw] overflow-y-auto border-separate table-fixed border-spacing-0 border-spacing-y-1 sm:w-full">
              {children}
            </table>
          </div>
        </div>
      </AnimateInOut>
    );
  };

  return (
    <div className="flex flex-col w-full gap-1 pt-1 text-sm font-semibold rounded-md table-test ">
      <div className="flex relative justify-between gap-2.5 items-center w-full">
        <span className="flex max-sm:hidden">{navOption}</span>
        <div className="flex gap-1.5">
          {Object.values(NavOptions)
            .filter((option) => {
              if (!auth.isAuthenticated) return option !== NavOptions.MY_BETS;
              return option;
            })
            .map((option, i) => (
              <Menu key={i}>
                {() => {
                  const currentOption = option;
                  const isActive = navOption === currentOption;
                  return (
                    <>
                      <Menu.Button
                        onClick={() => setNavOption(currentOption)}
                        className={clsx(
                          "flex py-1 px-2 rounded-sm transition-colors hover:text-white text-gray-400 ",
                          isActive && "text-white bg-dark-800",
                        )}
                      >
                        <p>{currentOption}</p>
                      </Menu.Button>

                      <NavWrapper>{navComponents[currentOption]}</NavWrapper>
                    </>
                  );
                }}
              </Menu>
            ))}
        </div>
      </div>
    </div>
  );
}
