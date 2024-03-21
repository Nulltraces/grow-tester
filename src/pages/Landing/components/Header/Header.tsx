import {
  CashStackIcon,
  DieIcon,
  DiscordIcon,
  ExpandMoreIcon,
  GiftBoxIcon,
  StopwatchIcon,
  TrophyIcon,
} from "@/assets/svgs";
import { AnimateInOut, AuthForm, Button, Overlay } from "@/components";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { useSearchParams } from "react-router-dom";
import { Games } from "..";
import MenuButton from "../MenuButton";
import { games } from "@/data/games";
import { closeModal, triggerModal } from "@/store/slices/modal";
import { useAppDispatch } from "@/hooks/store";
import { useEffect } from "react";

export default function Header() {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const authModal = searchParams.get("modal");

  useEffect(() => {
    if (authModal === "sign-in") {
      dispatch(
        triggerModal({
          children: <AuthForm route="sign-in" />,
          clickToDisable: true,
          show: true,
          cancel: () => setSearchParams({ modal: "false" }),
        })
      );
    } else if (authModal === "register") {
      dispatch(
        triggerModal({
          children: <AuthForm route="register" />,
          clickToDisable: true,
          show: true,
          cancel: () => setSearchParams({ modal: "false" }),
        })
      );
    } else {
      dispatch(closeModal());
    }
  }, [authModal, dispatch, setSearchParams]);

  return (
    <header className="shrink-0 relative md:static h-16 flex py-2.5 w-full fixed_ !z-[10000000] top-0 left-0 min-h-[var(--header-height)] max-h-[var(--header-height)] bg-dark-850 shadow-md whitespace-nowrap">
      <div className="mx-auto w-[97%] flex items-center h-full">
        <div className="flex items-center w-full gap-4">
          <h1 className="">
            <img src="/logo.png" className="w-48" />
          </h1>

          {/* <div className="flex items-center gap-4"></div> */}
          <HeaderItems />
          <HeaderItemsSM />
          <div className="ml-auto flex items-center gap-4">
            <button
              onClick={() => setSearchParams({ modal: "sign-in" })}
              className="text-white text-sm font-semibold py-2 px-4"
            >
              Sign In
            </button>
            <Button onClick={() => setSearchParams({ modal: "register" })}>
              Register
            </Button>
            <div className="hidden sm:block md:hidden">
              <MenuButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeaderItems() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showMenuBar = searchParams.get("show-menu") === "true";

  const HeaderLinkItem = ({
    icon,
    text,
  }: {
    icon: React.FC<React.SVGProps<SVGElement>>;
    text: string;
  }) => {
    const Icon = icon;
    return (
      <div className="flex gap-1">
        <Icon />
        <p className="uppercase text-white text-sm font-bold">{text}</p>
      </div>
    );
  };
  return (
    <>
      <Overlay
        show={showMenuBar}
        handleShowOverlay={() => () =>
          setSearchParams({ "show-menu": String(!showMenuBar) })}
        disableOnClick
        className="mt-16"
      />
      <div
        className={clsx(
          "fixed top-16 z-[1000] right-0 w-full sm:w-[280px] h-full bg-dark-850 md:hidden transition-transform duration-150",
          showMenuBar ? "translate-x-0" : "translate-x-full md:translate-x-0"
        )}
      >
        <div className="w-[92%] h-full mt-4 mx-auto">
          <div className="-z-10">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex flex-row items-center w-fit gap-1 justify-between">
                    <DieIcon className="!fill-primary !stroke-primary" />
                    <h5 className="text-primary !font-bold uppercase">games</h5>
                    <ExpandMoreIcon
                      className={`${
                        open ? "rotate-180" : "rotate-0"
                      } transform transition-transform duration-200 !stroke-primary`}
                    />
                  </Disclosure.Button>
                  <AnimateInOut
                    show={open}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ type: "keyframes" }}
                    className="cursor-pointer flex flex-col w-full pt-[5px] overflow-clip space-y-2"
                  >
                    {games.map((game, i) => (
                      <p
                        className="text-sm text-white font-bold uppercase hover:-translate-y-[2px] transition-transform duration-100"
                        key={i}
                      >
                        {game.title}
                      </p>
                    ))}
                  </AnimateInOut>
                </>
              )}
            </Disclosure>
          </div>
          <div className="pt-4 bg-dark-850 z-10">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex flex-row items-center w-fit gap-1 justify-between">
                    <GiftBoxIcon className="!fill-primary !stroke-primary" />
                    <h5 className="text-primary !font-bold uppercase">
                      rewards
                    </h5>
                    <ExpandMoreIcon
                      className={`${
                        open ? "rotate-180" : "rotate-0"
                      } transform transition-transform duration-200 !stroke-primary`}
                    />
                  </Disclosure.Button>

                  <AnimateInOut
                    show={open}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ type: "keyframes" }}
                    className="cursor-pointer flex flex-col w-full pt-[5px] overflow-clip space-y-2"
                  >
                    {[{ title: "rakeback" }, { title: "promo codes" }].map(
                      (reward, i) => (
                        <p
                          className="text-sm text-white font-bold uppercase hover:-translate-y-[2px] transition-transform duration-100"
                          key={i}
                        >
                          {reward.title}
                        </p>
                      )
                    )}
                  </AnimateInOut>
                </>
              )}
            </Disclosure>
          </div>
          <div className="pt-4 space-y-4 bg-dark-850 h-full z-20">
            <HeaderLinkItem icon={CashStackIcon} text="affiliates" />
            <HeaderLinkItem icon={TrophyIcon} text="leaderboard" />
            <HeaderLinkItem icon={StopwatchIcon} text="race" />
            <HeaderLinkItem icon={DiscordIcon} text="discord" />
          </div>
        </div>
      </div>
    </>
  );
}

function HeaderItemsSM() {
  const HeaderLinkItem = ({
    icon,
    text,
  }: {
    icon: React.FC<React.SVGProps<SVGElement>>;
    text: string;
  }) => {
    const Icon = icon;
    return (
      <div className="flex gap-1">
        <Icon />
        <p className="uppercase text-white text-sm font-bold md:hidden">
          {text}
        </p>
      </div>
    );
  };
  return (
    <div className={clsx("w-full h-full hidden md:flex gap-2 ml-4")}>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="flex flex-row items-center w-fit gap-1 justify-between">
              <DieIcon className="!fill-white !stroke-white" />
              {/* <h5 className="md:hidden text-white !font-bold uppercase">
                games
              </h5> */}
              <ExpandMoreIcon
                className={`${
                  open ? "rotate-180" : "rotate-0"
                } transform transition-transform duration-200 !stroke-white`}
              />
            </Menu.Button>

            <AnimateInOut
              show={open}
              initial={{ translateY: -400, opacity: 0 }}
              exit={{ translateY: -400, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ type: "keyframes" }}
              className="absolute top-16 w-full left-0 h-full_ bg-dark-800 rounded-xl flex items-center justify-center p-2"
            >
              <div className="h-[96%] w-[99%] overflow-auto pr-2">
                <Games />
              </div>
              {/* </div> */}
            </AnimateInOut>
          </>
        )}
      </Menu>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex flex-row items-center w-fit gap-1 justify-between">
              <GiftBoxIcon className="!fill-white !stroke-white" />
              {/* <h5 className="md:hidden text-primary !font-bold uppercase">
                rewards
              </h5> */}
              <ExpandMoreIcon
                className={`${
                  open ? "rotate-180" : "rotate-0"
                } transform transition-transform duration-200 !stroke-white`}
              />
            </Disclosure.Button>

            <Transition
              show={open}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel className="cursor-pointer flex flex-col w-full pt-[5px]"></Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <div className="flex items-center gap-4">
        <HeaderLinkItem icon={CashStackIcon} text="affiliates" />
        <HeaderLinkItem icon={TrophyIcon} text="leaderboard" />
        <HeaderLinkItem icon={StopwatchIcon} text="race" />
        <HeaderLinkItem icon={DiscordIcon} text="discord" />
      </div>
    </div>
  );
}
