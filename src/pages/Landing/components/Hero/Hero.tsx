import { Button } from "@/components";
import { useSearchParams } from "react-router-dom";

export default function Hero() {
  const setSearchParams = useSearchParams()[1];

  return (
    <div className="bg-[linear-gradient(to_right,rgb(0,0,0),rgba(0,0,0,0.5)),url('/public/images/landing/banner.webp')] flex-1 min-h-[270px] max-h-[270px] w-full bg-center !bg-cover bg-no-repeat flex flex-col rounded-md">
      <div className="flex flex-col justify-center flex-grow items-start p-10 gap-3">
        <h1 className="text-5xl font-extrabold uppercase">
          {/* GAME <span className="text-primary">GROW</span> */}

          <img src="/logo.png" className="w-72" />
        </h1>
        <span className="font-semibold text-light">
          The first Growtopia web-based gaming platform.
        </span>
        <div className="">
          <Button onClick={() => setSearchParams({ modal: "register" })}>
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
}
