import React from "react";
import { useAuthHook } from "../../hooks/useAuthHook";

const RegisterPage = () => {
  let { navigate, register, handleSubmit, errors, registerForm } =
    useAuthHook();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080B16] px-4 py-10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-37.5 left-25 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-37.5 right-25  w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

      {/* Register Card */}
      <div className="relative w-full max-w-md bg-white/4 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
        {/* Heading */}
        <div className="text-center mb-7">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Create Account
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Get started by creating your free account.
          </p>
        </div>

        {/* Form UI */}
        <form onSubmit={handleSubmit(registerForm)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              {...register("name", {
                required: "name is required",
              })}
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition duration-300"
            />
            {errors.name && (
              <p className="text-red-500"> {errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "email is required",
              })}
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition duration-300"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              {...register("password", {
                required: "pasword is required",
                minLength: {
                  value: 6,
                  message: "minimum 6 charactor are required",
                },
              })}
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition duration-300"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              className="accent-violet-500 w-4 h-4 mt-0.5"
            />
            <p className="text-xs text-gray-400 leading-relaxed">
              I agree to the
              <span className="text-violet-400 mx-1 cursor-pointer">
                Terms & Conditions
              </span>
              and
              <span className="text-violet-400 ml-1 cursor-pointer">
                Privacy Policy.
              </span>
            </p>
          </div>

          {/* Register Button */}
          <button
            className="w-full py-3.5 rounded-xl bg-linear-to-r from-violet-600 to-blue-600 text-white font-semibold shadow-lg shadow-violet-600/20 hover:opacity-90 transition duration-300 cursor-pointer"
            type="submit"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-400 mt-7">
          Already have an account?
          <span
            onClick={() => {
              navigate("/");
            }}
            className="text-violet-400 font-semibold ml-1 cursor-pointer hover:text-violet-300"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
