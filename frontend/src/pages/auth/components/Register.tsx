import { useContext, useState } from "react";
import { Form, Navigate, Link } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";

import { z } from "zod";

import { X, Mail, Lock, CircleUserRound, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import InputError from "./InputError";

const schema = z
  .object({
    username: z.string().min(5, "Username must be at least 5 characters"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must contain at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Register() {
  const { currentUser, signup, authError } = useContext(AuthContext);

  const [errors, setErrors] = useState([]);
  const [passwordShown, setPasswordShown] = useState(false);

  // Redirect if user is already logged in
  if (currentUser) {
    return <Navigate to="/games" />;
  }

  // Toggle isShown state
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // Handle form submission for signup
  const handleSignup = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = Object.fromEntries(formData);

    try {
      schema.parse(credentials);
      await signup(credentials);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.errors);
      }
    }
  };

  return (
    <div className="bg-midnight min-h-screen w-full">
      <div className="w-full px-6 sm:px-24">
        {/* Sign up and close button */}
        <div className="flex w-full items-center justify-between py-[20px]">
          <div className="grid h-[50px] w-[50px] place-items-center">
            <Link to="/">
              <X className="hover:text-bee h-8 w-8 border-none text-white" />
            </Link>
          </div>
          <Button
            variant="primary"
            className="hover:bg-dusk border-bee rounded-xl bg-dark px-6 py-6"
          >
            <Link to="/login">
              <span className="text-bee mb-0 text-[16px] font-bold uppercase">
                Log in
              </span>
            </Link>
          </Button>
        </div>

        <div className="flex w-full flex-col items-center justify-center py-[50px]">
          {/* Sign in and sign up form */}
          <div className="w-full max-w-[560px]">
            <div className="mx-auto w-full max-w-[340px]">
              {/* Form header */}
              <div className="mb-[30px] w-full text-center">
                <span className="h3 font-bold text-white">
                  Create a new account
                </span>
              </div>

              {/* Form */}
              <Form
                method="post"
                onSubmit={handleSignup}
                className="flex flex-col items-center justify-center"
              >
                {/* Error message */}
                {authError && (
                  <div className="text-center text-sm font-semibold uppercase text-red-500">
                    {authError}
                  </div>
                )}

                {/* Username Field */}
                <fieldset className="mb-4 w-full">
                  <div className="relative">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      className="border-xl border-dusk focus:border-bee block w-full cursor-text rounded-xl border-2 bg-dark py-3 pl-12 pr-6 text-sm text-white placeholder:text-[#747778] focus:outline-none"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-white">
                      <CircleUserRound />
                    </span>
                  </div>
                  {errors.map((error, index) => {
                    if (error.path[0] === "username") {
                      return <InputError key={index} error={error.message} />;
                    }
                  })}
                </fieldset>

                {/* Email Field */}
                <fieldset className="mb-4 w-full">
                  <div className="relative">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="border-xl border-dusk focus:border-bee block w-full cursor-text rounded-xl border-2 bg-dark py-3 pl-12 pr-6 text-sm text-white placeholder:text-[#747778] focus:outline-none"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-white">
                      <Mail />
                    </span>
                  </div>
                  {errors.map((error, index) => {
                    if (error.path[0] === "email") {
                      return <InputError key={index} error={error.message} />;
                    }
                  })}
                </fieldset>

                {/* Password Field */}
                <fieldset className="mb-4 w-full">
                  <div className="relative">
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="border-xl border-dusk focus:border-bee block w-full cursor-text rounded-xl border-2 bg-dark py-3 pl-12 pr-6 text-sm text-white placeholder:text-[#747778] focus:outline-none"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-white">
                      <Lock />
                    </span>
                    <span
                      onClick={togglePassword}
                      className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-white"
                    >
                      {passwordShown ? <EyeOff /> : <Eye />}
                    </span>
                  </div>
                  {errors.map((error, index) => {
                    if (error.path[0] === "password") {
                      return <InputError key={index} error={error.message} />;
                    }
                  })}
                </fieldset>

                {/* Confirm Password Field */}
                <fieldset className="mb-[40px] w-full">
                  <div className="relative">
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm password"
                      className="border-xl border-dusk focus:border-bee block w-full cursor-text rounded-xl border-2 bg-dark py-3 pl-12 pr-6 text-sm text-white placeholder:text-[#747778] focus:outline-none"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-white">
                      <Lock />
                    </span>
                  </div>
                  {errors.map((error, index) => {
                    if (error.path[0] === "confirmPassword") {
                      return <InputError key={index} error={error.message} />;
                    }
                  })}
                </fieldset>

                <fieldset className="w-full">
                  <Button
                    type="submit"
                    variant="primary"
                    className="flex h-[50px] w-full items-center justify-center rounded-xl text-[16px] font-bold uppercase hover:bg-dark"
                  >
                    Create account
                  </Button>
                </fieldset>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
