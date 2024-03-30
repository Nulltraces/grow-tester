import {
  DiamondLockIcon,
  SilverLockIcon,
  YellowLockIcon,
} from "@/assets/icons";
import { Input } from "..";

export default function Deposit() {
  return (
    <div className="opacity-100">
      <div className="flex flex-col gap-2.5">
        <div>
          <p className="text-lg font-bold">How to deposit?</p>
          <ol className="numbered-list">
            <li className="numbered-list-item">
              Type in your Growtopia GrowID that you would like to deposit with,
              then press 'Start Deposit'.
            </li>
            <li className="numbered-list-item">
              Wait for the loading to complete (it may take up to 30 seconds).
            </li>
            <li className="numbered-list-item">
              Enter the generated world in Growtopia. (make sure that the world
              owner is in the world before dropping your locks).
            </li>
            <li className="numbered-list-item flex gap-1">
              Drop the amount of{" "}
              <img
                src={YellowLockIcon}
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />{" "}
              /{" "}
              <span>
                <img
                  src={SilverLockIcon}
                  width="18"
                  height="18"
                  className="sc-x7t9ms-0 dnLnNz"
                />
              </span>{" "}
              /{" "}
              <img
                src={DiamondLockIcon}
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />{" "}
              you wish to deposit next to the white door.
            </li>
            <li className="numbered-list-item">
              You should see your balance update on the site within a few
              seconds (If it did not update, message{" "}
              <a
                target="_blank"
                className="text-white"
                href="https://discord.com"
              >
                support
              </a>
              ).
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold">Deposit</p>
          <div className="flex flex-col gap-0.5">
            <span>GrowID</span>
            <div className="flex flex-col gap-1">
              {/* <div className="bg-dark-700 h-[38px] text-gray-400 rounded-sm py-0.5 border transition-colors px-2 flex items-center gap-1.5 w-full border-dark-650"> */}
              {/* <input
                        className="bg-transparent outline-none border-none p-1 text-[0.9rem] flex-grow text-white"
                        type="text"
                        value=""
                      /> */}
              <Input className="" type="text" value="" />
              {/* </div> */}
            </div>
          </div>
          <div>
            <iframe
              src="https://newassets.hcaptcha.com/captcha/v1/04f9464/static/hcaptcha.html#frame=checkbox&amp;id=2vtsby0ca5vo&amp;host=growdice.net&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=true&amp;custom=false&amp;hl=en&amp;tplinks=on&amp;pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&amp;sitekey=219fabe6-4390-4bfd-9a12-a72dd236b56f&amp;theme=dark&amp;origin=https%3A%2F%2Fgrowdice.net"
              tabIndex={0}
              // frameBorder={0}
              allow="private-state-token-issuance 'src'; private-state-token-redemption 'src'"
              title="Widget containing checkbox for hCaptcha security challenge"
              data-hcaptcha-widget-id="2vtsby0ca5vo"
              data-hcaptcha-response=""
              className="pointer-events-auto w-[303px] h-[78px] overflow-hidden"
            ></iframe>
            <textarea
              id="g-recaptcha-response-2vtsby0ca5vo"
              name="g-recaptcha-response"
              className="hidden"
            ></textarea>
            <textarea
              id="h-captcha-response-2vtsby0ca5vo"
              name="h-captcha-response"
              className="hidden"
            ></textarea>
          </div>
          <button
            disabled
            aria-disabled="true"
            className="sc-1xm9mse-0 wallet-button text-sm rounded-sm"
            content="w-full h-[40px]"
          >
            Start Deposit
          </button>
        </div>
        <span className="flex items-center gap-1 pt-2">
          Minimum deposit is <b className="text-white">0.20</b>
          <img
            src={SilverLockIcon}
            width="18"
            height="18"
            className="sc-x7t9ms-0 dnLnNz"
          />
        </span>
        <div className="flex flex-col bg-dark-800 p-2  justify-center overflow-hidden pl-3.5 rounded-sm text-white relative">
          <div className="w-[5px] h-full absolute left-0 top-0 bg-red-600"></div>
          <span className="uppercase">Warning!</span>
          <span className="text-gray-400">
            Using GrowDice for saving (storing in order to avoid bans) or
            reselling DLs is strictly prohibited. Doing so will result in your
            balance getting removed without any warnings.
          </span>
        </div>
      </div>
    </div>
  );
}
