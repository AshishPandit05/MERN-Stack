import { useRef } from "react";

const Form = () => {
  let formRef = useRef({});

  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Product</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Product Name */}
          <div>
            <label className="block mb-2 font-medium">Product Name</label>
            <input
              ref={(e) => (formRef.current.productName = e)}
              type="text"
              name="name"
              placeholder="Enter product name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 font-medium">Price</label>
            <input
              ref={(e) => (formRef.current.price = e)}
              type="number"
              name="price"
              placeholder="Enter price"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-medium">Category</label>
            <select
              ref={(e) => (formRef.current.catogry = e)}
              name="category"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-2 font-medium">Image URL</label>
            <input
              ref={(e) => (formRef.current.image = e)}
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
