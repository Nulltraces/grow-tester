import { ScrollIcon } from "@/assets/svgs";
import { Button } from "@/components";

export default function ChatFooter() {
  return (
    <footer className="shrink-0 bg-dark-800  py-2">
      <form className="w-[94%] mx-auto space-y-2">
        <div className="outline-gray-600 outline outline-2 bg-dark-800 rounded-sm h-9">
          <input
            type="text"
            className="w-full h-full cursor-not-allowed placeholder:text-center placeholder:font-semibold"
            placeholder="You must be logged in to chat"
            disabled
          />
        </div>
        <div className="flex w-full">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 aspect-square rounded-full bg-green-500" />
            <p className="text-sm font-semibold">{"452"} online</p>
          </div>
          <div className="flex ml-auto items-center gap-2">
            <p className="text-sm font-semibold">150</p>
            <button type="button" className="p-2 bg-gray-700 px-4 rounded-sm">
              <ScrollIcon />
            </button>
            <Button type="submit" className="!py-1">
              Send
            </Button>
          </div>
        </div>
      </form>
    </footer>
  );
}
