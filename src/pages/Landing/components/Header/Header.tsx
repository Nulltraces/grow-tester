import { Button } from "@/components";

export default function Header() {
  return (
    <header className="shrink-0 absolute_ md:static h-16 flex max-xl:px-4 px-5 py-2.5 w-full fixed_ z-[10000000] top-0 left-0 min-h-[var(--header-height)] max-h-[var(--header-height)] bg-dark-850 shadow-md">
      <div className="mx-auto w-[98%] flex items-center h-full">
        <div className="flex items-center w-full">
          <h1 className="text-[1.7rem] font-bold uppercase">
            GAME <span className="text-primary">GROW</span>
          </h1>
          <div className="flex items-center gap-4"></div>
          <div className="ml-auto flex items-center gap-4">
            <button className="text-white text-sm font-semibold py-2 px-4">
              Sign In
            </button>
            <Button>Register</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
