import React from "react";

const UserCard = () => {
  return (
    <div className="m-3 w-80">
      <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Sarah Johnson"
            className="h-16 w-16 rounded-full object-cover"
          />

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Sarah Johnson
            </h2>
            <p className="text-sm text-gray-500">Product Designer</p>
          </div>
        </div>

        <div className="mt-6 space-y-3 border-t border-gray-100 pt-5 text-sm">
          <div>
            <p className="text-gray-400">Email</p>
            <p className="font-medium text-gray-700">sarah.johnson@email.com</p>
          </div>

          <div>
            <p className="text-gray-400">Contact</p>
            <p className="font-medium text-gray-700">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
            Update
          </button>
          <button className="flex-1 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-300">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
