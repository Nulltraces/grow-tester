"use client";

import { Button, Input } from "@/components";
import { clsx } from "clsx";
import { useSearchParams } from "react-router-dom";
import { type ChangeEvent, useState, type FormEvent, useEffect } from "react";
import api from "@/api/axios";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/hooks/store";
import { setUser } from "@/store/slices/auth";
import { closeModal } from "@/store/slices/modal";

interface formData {
  email: string;
  password: string;
  username: string;
  affiliateCode: string;
}

type Props = {
  route: "register" | "sign-in";
};

export default function AuthForm({ route = "sign-in" }: Props) {
  const dispatch = useAppDispatch();
  const setSearchParams = useSearchParams()[1];

  const [loading, setLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [formData, setFormData] = useState<formData>({
    email: "",
    password: "",
    username: "",
    affiliateCode: "",
  });

  const formDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    return () => {
      console.log("EXITING AUTH_FORM");
      setSearchParams({ modal: "false" });
    };
  }, []);

  useEffect(() => {
    console.log(
      { isDisabled },
      formData?.email,
      formData?.password,
      formData?.username,
      formData?.affiliateCode,
    );
    setIsDisabled(
      (route === "sign-in" && !(formData.email && formData.password)) ||
        (route === "register" &&
          !(
            formData?.email &&
            formData?.password &&
            formData?.username &&
            formData?.affiliateCode
          )),
    );
  }, [
    formData?.email,
    formData?.password,
    formData?.username,
    formData?.affiliateCode,
    isDisabled,
  ]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      if (route === "sign-in") {
        // HANDLE SIGN-IN LOGIC
        // const userCredential = await signInWithEmailAndPassword(
        //   auth,
        //   formData?.email,
        //   formData?.password
        // );
        // // User signed in successfully
        // const user = userCredential.user;
        // const idToken = await userCredential.user.getIdToken();

        // const response = await fetch("/auth/sign-in", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ idToken }),
        // });
        // const response = await fetch("/auth/sign-in", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: formData.email,
        //     password: formData.password,
        //   }),
        // });

        const response: AxiosResponse<{
          message: string;
          user: User;
          token: string;
        }> = await api.post("/auth/sign-in", {
          email: formData.email,
          password: formData.password,
        });

        const data = response.data;

        console.log({ response, data });

        const user = data.user;
        // if (!user) throw new Error(data.message);

        // Store user details in local storage
        // localStorage.setItem("currentUser", JSON.stringify(user));

        // Add success message
        // alert("Login Successful");
        // console.log("User signed in:", user);
        console.log("Success: User signed in successfully.", {
          // token_: response.data.token,
          user,
          token: data.user,
        });

        // navigate("/dashboard");
        dispatch(setUser({ isAuthenticated: true, user, token: data.token }));
        setSearchParams({
          modal: "",
        });
        toast.success("signed in successfully");
        dispatch(closeModal());
      } else {
        // Handle register logic
        // const response = await fetch("/auth/register", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: formData?.email,
        //     username: formData?.username,
        //     affiliateCode: formData?.affiliateCode,
        //   }),
        // });
        console.log("REACHED!");
        // const resBody = await response.json();
        const response = await api.post("/auth/sign-up", formData);

        const data = await response.data;
        console.log({ data });

        const user = data.user;
        console.log({ user });

        if (!user) throw new Error(data.message);
        dispatch(setUser({ isAuthenticated: true, user, token: data.token }));

        // alert("signup successful");
        setSearchParams({
          modal: "",
        });
        toast.success("signed up successfully");
        dispatch(closeModal());
      }
    } catch (error: any) {
      const errorM = error as Error;
      console.error({ error, errorM });
      // Handle sign-in error

      // Display error message
      // alert(errorMessage);
      console.error("Error signing in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={clsx(
        "w-full justify-center overflow-y-auto overscroll-contain items-center sm:w-[60vw] lg:w-[30rem]",
      )}
    >
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex w-[96%] mx-auto flex-col items-start">
          <h2 className="font-matter leading-normal font-semibold text-center md:-tracking-[0.96px] -tracking-[0.64px] text-xl text-gray-400 flex gap-1.5 items-center">
            {route === "register" ? "register" : "sign in"}
          </h2>

          <form
            className="flex flex-col w-full items-start md:items-center"
            onSubmit={handleSubmit}
          >
            {/* SIGN UP */}
            {route === "register" && (
              <>
                <fieldset className="gap-1 mt-3 flex flex-col w-full">
                  <div className="flex flex-row justify-between w-full">
                    <label className="text-white -tracking-[0.28px] font-normal text-[14px]">
                      Username
                    </label>
                  </div>
                  <Input
                    type="text"
                    name="username"
                    value={formData?.username}
                    onChange={formDataHandler}
                    // placeholder="Enter your First Name"
                  />
                </fieldset>

                <fieldset className="gap-1 mt-3 flex flex-col w-full">
                  <div className="flex flex-row justify-between w-full">
                    <label className="text-white -tracking-[0.28px] font-normal text-[14px]">
                      Password
                    </label>
                  </div>
                  <Input
                    type="password"
                    name="password"
                    value={formData?.password}
                    onChange={formDataHandler}
                    placeholder="Enter your Password"
                  />
                </fieldset>

                <fieldset className="gap-1 mt-3 flex flex-col w-full">
                  <div className="flex flex-row justify-between w-full">
                    <label className="text-white -tracking-[0.28px] font-normal text-[14px]">
                      Email
                    </label>
                  </div>
                  <Input
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={formDataHandler}
                    // placeholder="Enter your Email Address"
                  />
                </fieldset>

                <fieldset className="gap-1 mt-3 flex flex-col w-full">
                  <div className="flex flex-row justify-between w-full">
                    <label className="text-white -tracking-[0.28px] font-normal text-[14px]">
                      Affiliate Code
                    </label>
                  </div>
                  <Input
                    type="text"
                    name="affiliateCode"
                    value={formData?.affiliateCode}
                    onChange={formDataHandler}
                    // placeholder="Enter your First Name"
                  />
                </fieldset>
                <fieldset className="gap-1 mt-3 w-full">
                  <Button
                    type="submit"
                    disabled={isDisabled}
                    loading={loading}
                    className="capitalize mt-3 w-full"
                  >
                    {"Register"}
                  </Button>
                </fieldset>
              </>
            )}

            {/* sign in */}
            {route === "sign-in" && (
              <>
                <fieldset className="gap-1 mt-3 flex flex-col w-full">
                  <div className="flex flex-row justify-between">
                    <label className="text-white -tracking-[0.28px] font-normal text-[14px]">
                      Email Address
                    </label>
                  </div>
                  <Input
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={formDataHandler}
                    placeholder="Enter your Email Address"
                  />
                </fieldset>
                <fieldset className="gap-1 mt-3 flex flex-col w-full">
                  <div className="flex flex-row justify-between w-full">
                    <label className="text-white -tracking-[0.28px] font-normal text-[14px]">
                      Password
                    </label>
                  </div>
                  <Input
                    type="password"
                    name="password"
                    value={formData?.password}
                    onChange={formDataHandler}
                    placeholder="Enter Password"
                  />
                </fieldset>
                <fieldset className="gap-1 mt-3 w-full">
                  <Button
                    type="submit"
                    disabled={isDisabled}
                    loading={loading}
                    className="capitalize mt-3 w-full"
                  >
                    {"Sign In"}
                  </Button>
                </fieldset>
              </>
            )}
          </form>

          <p className="text-gray-500 w-fit mx-auto mt-3 mb-16 sm:mb-0">
            {route === "sign-in"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              onClick={() =>
                setSearchParams({
                  modal: route === "sign-in" ? "register" : "sign-in",
                })
              }
              className="text-white font-semibold"
            >
              {route === "sign-in" ? "Register" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
