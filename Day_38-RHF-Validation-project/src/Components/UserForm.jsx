import React from "react";
import { useForm } from "react-hook-form";

const UserForm = ({ setUsers, setToggle }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {
    console.log(data);
    setUsers((prev) => [...prev, data]);
    reset();
    setToggle((prev) => !prev);
  };
  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-xl font-semibold text-gray-900">User Details</h2>
      <p className="mt-1 text-sm text-gray-500">
        Add or update user information.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Profile Image URL
          </label>
          <input
            {...register("Url", {
              required: "URL is required",
            })}
            type="url"
            placeholder="https://example.com/avatar.jpg"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>
        {errors.url && <p>Url do</p>}

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            {...register("name", {
              required: "name is required",
            })}
            type="text"
            placeholder="Enter full name"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            {...register("email", {
              required: "email is required",
            })}
            type="email"
            placeholder="name@email.com"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Contact Number
          </label>
          <input
            {...register("mobile", {
              required: "mobile is required",
            })}
            type="tel"
            placeholder="+1 (555) 123-4567"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="submit"
          className="flex-1 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Save User
        </button>
      </div>
    </form>
  );
};

export default UserForm;
