import React, { useState} from "react";
// import Cancel from "../assets/cancelIcon.svg";
import C_bgl from "../assets/currency_bgl.png"
import C_dl from "../assets/currency_dl.png"
import C_wl from "../assets/currency_wl.png"
import API_BASE_URL from '../config';
import { useCookies } from 'react-cookie';



const DWpage = ({ DWpage, setDWpage , setbalance }) => {
  const [page, setpage] = useState(1);
  const [cookies] = useCookies(['jwt']);
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState(0);
  
  const handleTip = async () => {
    try {
      // Check if the user is logged in
      if (!cookies.jwt) {
        alert('Please log in to tip.');
        return;
      }

      // Check if a username is provided
      if (!username) {
        alert('Please enter a username.');
        return;
      }

      // Check if the amount is valid
      if (amount <= 0) {
        alert('Please enter a valid amount to tip.');
        return;
      }
      const jsonData = { jwt: cookies.jwt };
      const queryString = Object.keys(jsonData)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(jsonData[key])}`)
        .join('&');
      const response = await fetch(API_BASE_URL + '/api/tip/give?' + queryString, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${cookies.jwt}`,
        },
        body: JSON.stringify({
          recipient: username,
          amount: amount,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        alert('Tip successful!');
        setbalance(data.balance);
      } else {
        alert(`Tip failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error tipping:', error.message);
    }
  };
  return (
    <>
      {DWpage ? (
        <>
          {page === 1 ? (
            <>
              <div className="w-full h-96 mx-auto bg-transparent items-center fixed inset-0 outline-none focus:outline-none" style={{ zIndex: "1000", color: "white" }}>
                <div className="fixed w-[800px] rounded-md h-auto my-6 mx-auto py-2 px-2 top-[10%] inset-0 ">
                  <div class="sc-1fxen5m-2 czrbHJ">
                    <div>
                      <span>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ "margin-right": "8px" }}>
                          <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
                        </svg>
                        Wallet
                      </span>
                    </div>
                    <button class="sc-1fxen5m-5 hgdhtL" onClick={() => {
                      setDWpage(false);
                    }}>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="23" width="23" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="sc-1fxen5m-3 hNJbGO">
                    <div class="sc-sj19dc-0 jBRSPH">
                      <div class="sc-sj19dc-1 cxCNF">
                        <button class="sc-sj19dc-2 hRRrBj" onClick={() => {
                          setpage(1);
                        }}>Deposit</button>
                        <button class="sc-sj19dc-2 dakHdu" onClick={() => {
                          setpage(2);
                        }}>Withdraw</button>
                        <button class="sc-sj19dc-2 dakHdu" onClick={() => {
                          setpage(3);
                        }}>Tip</button>
                      </div>
                      <div class="sc-sj19dc-3 eJHThN">
                        <div class="sc-1ltrwo4-0 khouuz">
                          <div class="sc-1ltrwo4-3 bzdZRJ">
                            <p style={{ "font-size": "1.25rem", "font-weight": "600", "margin-top": "0px", "margin-bottom": "10px" }}>How to deposit?</p>
                            <ol class="sc-1ltrwo4-1 hzbCWr" >
                              <li class="sc-1ltrwo4-2 jrBuXm">Type in your Growtopia GrowID that you would like to deposit with, then press 'Start Deposit'.</li>
                              <li class="sc-1ltrwo4-2 jrBuXm">Wait for the loading to complete (it may take up to 30 seconds).</li>
                              <li class="sc-1ltrwo4-2 jrBuXm">Enter the generated world in Growtopia. (make sure that the world owner is in the world before dropping your locks).</li>
                              <li class="sc-1ltrwo4-2 jrBuXm" style={{ display: "flex" }}>Drop the amount of <img alt="" src={C_wl} width="20" height="20" class="sc-1xrgat9-0 bKACXb" />/<img src={C_dl} width="20" height="20" class="sc-1xrgat9-0 bKACXb" alt="" /> / <img src={C_bgl} width="20" height="20" class="sc-1xrgat9-0 bKACXb" alt="" /> you wish to deposit next to the white door.</li>
                              <li class="sc-1ltrwo4-2 jrBuXm">You should see your balance update on the site within a few seconds (If it did not update, message <a target="_blank" href="/discord">Support</a>).</li>
                            </ol>
                          </div>
                          <div class="sc-1ltrwo4-4 hLvaBN">
                            <p style={{ "font-size": "1.25rem", "font-weight": "600", "margin-top": "0px", "margin-bottom": "10px" }}>Deposit</p>
                            <div class="sc-1ltrwo4-7 fZxkxm">
                              <span id="label">GrowID</span>
                              <div id="growid" class="sc-1s5efk3-0 jXuMzF" style={{ "padding": "inherit", "border": "1px solid transparent", "box-shadow": "none" }}>
                                <input placeholder="" id="growid#input" type="text" value="" />
                              </div>
                            </div>
                            <div>
                              <iframe src="https://newassets.hcaptcha.com/captcha/v1/3073b34/static/hcaptcha.html#frame=checkbox&amp;id=20tdqmqixbu9l&amp;host=growdice.net&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=true&amp;custom=false&amp;hl=en&amp;tplinks=on&amp;pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&amp;sitekey=56c35176-b343-4a4d-b16f-144c2119567e&amp;theme=dark&amp;origin=https%3A%2F%2Fgrowdice.net" tabindex="0" frameborder="0" scrolling="no" allow="private-state-token-issuance 'src'; private-state-token-redemption 'src'" title="Widget containing checkbox for hCaptcha security challenge" data-hcaptcha-widget-id="20tdqmqixbu9l" data-hcaptcha-response="" style={{ "width": "303px", "height": "78px", "overflow": "hidden" }}>

                              </iframe>
                              <textarea id="g-recaptcha-response-20tdqmqixbu9l" name="g-recaptcha-response" style={{ "display": "none" }}>

                              </textarea>
                              <textarea id="h-captcha-response-20tdqmqixbu9l" name="h-captcha-response" style={{ "display": "none" }}>
                              </textarea>
                            </div>
                            <button disabled="" aria-disabled="true" class="sc-1swg0qv-0 ezyHRO" style={{ "width": "100%", "height": "45px", "margin-top": "5px" }}>Start Deposit</button>
                          </div>
                          <span style={{ "position": "relative", "top": "15px", "display": "flex", "align-items": "center", "font-size": "0.9rem", "margin-top": "5px" }}>Minimum deposit is<b style={{ "color": "white", "margin-left": "5px", "margin-right": "2px" }}>20</b><img alt="{money-image}" src={C_wl} width="25" height="25" class="sc-1xrgat9-0 kuHAts" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>

          ) : ( /*page 2*/
            <>
              {page === 2 ? (
                <>
                  <div className="w-full h-96 mx-auto bg-transparent items-center fixed inset-0 outline-none focus:outline-none" style={{ zIndex: "10000", color: "white", opacity: "1" }}>
                    <div className="fixed w-[800px] rounded-md h-auto my-6 mx-auto py-2 px-2 top-[5%] inset-0 ">
                      <div class="sc-1fxen5m-2 czrbHJ">
                        <div>
                          <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ "margin-right": "8px" }}>
                              <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
                            </svg>
                            Wallet
                          </span>
                        </div>
                        <button class="sc-1fxen5m-5 hgdhtL" onClick={() => {
                          setDWpage(false);
                        }}>
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="23" width="23" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="sc-1fxen5m-3 hNJbGO">
                        <div class="sc-sj19dc-0 jBRSPH">
                          <div class="sc-sj19dc-1 cxCNF">
                            <button class="sc-sj19dc-2 dakHdu" onClick={() => {
                              setpage(1);
                            }}>Deposit</button>
                            <button class="sc-sj19dc-2 hRRrBj" onClick={() => {
                              setpage(2);
                            }}>Withdraw</button>
                            <button class="sc-sj19dc-2 dakHdu" onClick={() => {
                              setpage(3);
                            }}>Tip</button>
                          </div>
                          <div class="sc-sj19dc-3 eJHThN">
                            <div class="sc-1ltrwo4-0 khouuz">
                              <div class="sc-1ltrwo4-3 bzdZRJ">
                                <p style={{ "font-size": "1.25rem", "font-weight": "600", "margin-top": "0px", "margin-bottom": "10px" }}>How to withdraw?</p>
                                <ol class="sc-1ltrwo4-1 hzbCWr" >
                                  <li class="sc-1ltrwo4-2 jrBuXm">Type in your Growtopia GrowID that you would like to withdraw with, then press 'Start Withdraw'.</li>
                                  <li class="sc-1ltrwo4-2 jrBuXm">Wait for the loading to complete (it may take up to 30 seconds).</li>
                                  <li class="sc-1ltrwo4-2 jrBuXm">Enter the generated world in Growtopia.</li>
                                  <li class="sc-1ltrwo4-2 jrBuXm" style={{ display: "flex" }}>Wait for the bot to drop your <img alt="" src={C_wl} width="20" height="20" class="sc-1xrgat9-0 bKACXb" />/<img src={C_dl} width="20" height="20" class="sc-1xrgat9-0 bKACXb" alt="" /> / <img src={C_bgl} width="20" height="20" class="sc-1xrgat9-0 bKACXb" alt="" /> and pick them up</li>
                                  <li class="sc-1ltrwo4-2 jrBuXm">If you encounter any issues, message <a target="_blank" href="/discord">Support</a>).</li>
                                </ol>
                              </div>
                              <div class="sc-1ltrwo4-4 hLvaBN">
                                <p style={{ "font-size": "1.25rem", "font-weight": "600", "margin-top": "0px", "margin-bottom": "10px" }}>Withdraw</p>
                                <div class="sc-1ltrwo4-7 fZxkxm">
                                  <span id="label">GrowID</span>
                                  <div id="growid" class="sc-1s5efk3-0 jXuMzF" style={{ "padding": "inherit", "border": "1px solid transparent", "box-shadow": "none" }}>
                                    <input placeholder="" id="growid#input" type="text" value="" />
                                  </div>
                                </div>
                                <div class="sc-1ltrwo4-7 fZxkxm">
                                  <span id="label">Withdraw Amount</span>
                                  <div class="sc-1s5efk3-0 jXuMzF" style={{ "padding": "inherit", "border": "1px solid transparent", "box-shadow": "none" }}>
                                    <div style={{ "margin-left": "0.25rem", "user-select": "none", "display": "flex", "align-items": "center", "justify-content": "center" }}>
                                      <img src={C_dl} width="22" height="22" class="sc-1xrgat9-0 eDmgdr withdraw_image"
                                        alt="" />
                                    </div>
                                    <input placeholder="0" type="number" />
                                  </div>
                                </div>
                                <div>
                                  <iframe src="https://newassets.hcaptcha.com/captcha/v1/3073b34/static/hcaptcha.html#frame=checkbox&amp;id=20tdqmqixbu9l&amp;host=growdice.net&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=true&amp;custom=false&amp;hl=en&amp;tplinks=on&amp;pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&amp;sitekey=56c35176-b343-4a4d-b16f-144c2119567e&amp;theme=dark&amp;origin=https%3A%2F%2Fgrowdice.net" tabindex="0" frameborder="0" scrolling="no" allow="private-state-token-issuance 'src'; private-state-token-redemption 'src'" title="Widget containing checkbox for hCaptcha security challenge" data-hcaptcha-widget-id="20tdqmqixbu9l" data-hcaptcha-response="" style={{ "width": "303px", "height": "78px", "overflow": "hidden" }}>

                                  </iframe>
                                  <textarea id="g-recaptcha-response-20tdqmqixbu9l" name="g-recaptcha-response" style={{ "display": "none" }}>

                                  </textarea>
                                  <textarea id="h-captcha-response-20tdqmqixbu9l" name="h-captcha-response" style={{ "display": "none" }}>
                                  </textarea>
                                </div>
                                <button disabled="" aria-disabled="true" class="sc-1swg0qv-0 ezyHRO" style={{ "width": "100%", "height": "45px", "margin-top": "5px" }}>Start Withdraw</button>
                              </div>
                              <div class="sc-1ltrwo4-5 emppjW">
                                <span style={{ "display": "flex", "align-items": "center", "font-size": "0.9rem", "margin-top": "5px", "margin-right": "5px" }}>Minimum withdrawal is<b style={{ "color": "white", "margin-left": "5px", "margin-right": "2px" }}>20</b><img alt="" src={C_wl} width="25" height="25" class="sc-1xrgat9-0 kuHAts" />
                                </span>
                                <span style={{ "display": "flex", "align-items": "center", "font-size": "0.9rem", "margin-top": "5px" }}>Maximum withdrawal is<b style={{ "color": "white", "margin-left": "5px", "margin-right": "2px" }}>15</b><img alt="" src={C_bgl} width="25" height="25" class="sc-1xrgat9-0 kuHAts" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : ( /*page 3 :tips */
                <>
                  <div className="w-full h-auto mx-auto bg-transparent items-center fixed inset-0 outline-none focus:outline-none" style={{ zIndex: "1000", color: "white" }}>
                    <div className="fixed w-[250px] rounded-md my-6 mx-auto py-2 px-2 top-[25%] inset-0 " style={{ height: "fit-content" }}>
                      <div class="sc-1fxen5m-2 czrbHJ">
                        <div>
                          <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ "margin-right": "8px" }}>
                              <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
                            </svg>
                            Wallet
                          </span>
                        </div>
                        <button class="sc-1fxen5m-5 hgdhtL" onClick={() => {
                          setDWpage(false);
                        }}>
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="23" width="23" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="sc-1fxen5m-3 hNJbGO">
                        <div class="sc-sj19dc-0 jBRSPH">
                          <div class="sc-sj19dc-1 cxCNF">
                            <button class="sc-sj19dc-2 dakHdu" onClick={() => {
                              setpage(1);
                            }}>Deposit</button>
                            <button class="sc-sj19dc-2 dakHdu" onClick={() => {
                              setpage(2);
                            }}>Withdraw</button>
                            <button class="sc-sj19dc-2 hRRrBj" onClick={() => {
                              setpage(3);
                            }}>Tip</button>
                          </div>
                          <div class="sc-sj19dc-3 eJHThN">
                            <div class="sc-1lrwhpm-0 GwiMb">
                              <span style={{ "margin-top": "15px", "margin-bottom": "5px" }}>Username</span>
                              <div class="sc-1s5efk3-0 jXuMzF" style={{ "padding": "5px", "border": "1px solid transparent", "box-shadow": "none" }} value={username} onChange={(e) => setUsername(e.target.value)}>
                                <input placeholder="" type="text" />
                              </div>
                              <span style={{ "margin-top": "15px", "margin-bottom": "5px" }}>Amount</span>
                              <div id="amount" class="sc-1s5efk3-0 jXuMzF" style={{ "padding": "5px", "border": "1px solid transparent", "box-shadow": "none" }}>
                                <div style={{ "margin-left": "0.25rem", "user-select": "none", "display": "flex", "align-items": "center", "justify-content": "center" }}>
                                  <img alt="" src={C_dl} width="24" height="24" class="sc-1xrgat9-0 gxrmZA withdraw_image" />
                                </div>
                                <input placeholder="0.1" id="amount#input" type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
                              </div>
                              <button class="sc-1swg0qv-0 ezyHRO" style={{ "margin-top": "15px", "height": "45px" }} onClick={handleTip}>Send Tip</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </>
      ) : null}
    </>
  );
};
export default DWpage;
