"use client";

import { Button, Input } from "@/components";
import { clsx } from "clsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import { type ChangeEvent, useState, type FormEvent } from "react";

interface formData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

type Props = {
  route: "register" | "sign-in";
};

export default function AuthForm({ route = "sign-in" }: Props) {
  const setSearchParams = useSearchParams()[1];

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<formData>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const formDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isDisabled =
    (route === "sign-in" && !(formData.email && formData.password)) ||
    (route === "register" &&
      !(
        formData?.email &&
        formData?.password &&
        formData?.firstName &&
        formData?.lastName
      ));

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

        // const response = await fetch("/api/auth/sign-in", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ idToken }),
        // });
        const response = await fetch("/api/auth/sign-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const resBody = await response.json();
        console.log({ resBody });

        const user = resBody.data;

        if (!user) throw new Error(resBody.message);

        // Store user details in local storage
        localStorage.setItem("currentUser", JSON.stringify(user));

        // Add success message
        // alert("Login Successful");
        console.log("User signed in:", user);
        console.log("Success: User signed in successfully.");
        navigate("/dashboard");
      } else {
        // Handle register logic
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData?.email,
            firstname: formData?.firstName,
            lastname: formData?.lastName,
          }),
        });

        const resBody = await response.json();
        console.log({ resBody });

        const user = resBody.data;

        if (!user) throw new Error(resBody.message);

        // alert("signup successful");
        navigate("/signin");
      }
    } catch (error: any) {
      const errorM = error as Error;
      console.error({ error, errorM });
      // Handle sign-in error

      // Display error message
      // alert(errorMessage);
      console.error("Error signing in:", error);
      console.error("Error: Sign-in failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={clsx(
        "w-full lg:h-screen flex flex-col lg:grid lg:grid-cols-5 justify-center items-center bg-dark-850"
      )}
    >
      <div className="h-full w-full flex flex-col lg:pt-20 lg:pb-8 lg:col-span-2 items-center justify-center overflow-auto">
        <div className="flex w-[96%] lg:w-auto_ lg:px-0 mx-auto flex-col items-start">
          <h2 className="font-matter leading-normal font-semibold text-center md:-tracking-[0.96px] -tracking-[0.64px] text-xl text-gray-400 flex gap-1.5 items-center">
            {route === "register" ? "register" : "sign in"}
          </h2>

          <form
            className="flex flex-col lg:py-0 w-full items-start md:items-center"
            onSubmit={handleSubmit}
          >
            {/* SIGN UP */}
            {route === "register" && (
              <>
                <fieldset className="gap-1 mt-3 flex flex-col w-full">
                  <div className="flex flex-row justify-between w-full">
                    <label className="text-white font-aeonik -tracking-[0.28px] font-normal text-[14px]">
                      First Name
                    </label>
                  </div>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData?.firstName}
                    onChange={formDataHandler}
                    placeholder="Enter your First Name"
                  />
                </fieldset>
                <fieldset className="gap-1 mt-3 flex flex-col w-full">
                  <div className="flex flex-row justify-between w-full">
                    <label className="text-white font-aeonik -tracking-[0.28px] font-normal text-[14px]">
                      Last Name
                    </label>
                  </div>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData?.lastName}
                    onChange={formDataHandler}
                    placeholder="Enter your Last Name"
                  />
                </fieldset>
                <fieldset className="gap-1 mt-3 flex flex-col w-full">
                  <div className="flex flex-row justify-between w-full">
                    <label className="text-white font-aeonik -tracking-[0.28px] font-normal text-[14px]">
                      Email
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
                    <label className="text-white font-aeonik -tracking-[0.28px] font-normal text-[14px]">
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
                <Button
                  disabled={isDisabled}
                  loading={loading}
                  className="capitalize mt-3 w-full"
                >
                  {"register"}
                </Button>
              </>
            )}

            {/* sign in */}
            {route === "sign-in" && (
              <>
                <fieldset className="gap-1 mt-3 flex flex-col w-full">
                  <div className="flex flex-row justify-between">
                    <label className="text-white font-aeonik -tracking-[0.28px] font-normal text-[14px]">
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
                    <label className="text-white font-aeonik -tracking-[0.28px] font-normal text-[14px]">
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

          <p className="text-gray-500 w-fit mx-auto mt-3">
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
