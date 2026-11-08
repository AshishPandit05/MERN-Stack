import React from "react";
import useAuth from "../hooks/auth";

const LoginPage = () => {
  let { navigate, register, handleSubmit, errors, logInForm } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080B16] px-4 py-10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-37.5 left-50 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-37.5 right-50 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white/4 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Enter your credentials to access your account.
          </p>
        </div>

        {/* Form UI */}
        <form onSubmit={handleSubmit(logInForm)} className="space-y-5">
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
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-300">
                Password
              </label>
              <span className="text-sm text-violet-400 cursor-pointer hover:text-violet-300">
                Forgot password?
              </span>
            </div>

            <input
              {...register("password", {
                required: "password is required",
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition duration-300"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-violet-500 w-4 h-4" />
            <span className="text-sm text-gray-400">Remember me</span>
          </div>

          {/* Login Button */}
          <button
            className="w-full py-3.5 rounded-xl bg-linear-to-r from-violet-600 to-blue-600 text-white font-semibold shadow-lg shadow-violet-600/20 hover:opacity-90 transition duration-300 cursor-pointer"
            type="submit"
          >
            Sign In
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Don't have an account?
          <span
            onClick={() => {
              navigate("/register");
            }}
            className="text-violet-400 font-semibold ml-1 cursor-pointer hover:text-violet-300"
          >
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
