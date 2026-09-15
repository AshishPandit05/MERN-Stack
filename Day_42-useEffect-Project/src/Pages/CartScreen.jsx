const CartScreen = ({ cartItem }) => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl bg-white p-5 shadow-md">
      <div className="flex flex-col gap-6 sm:flex-row">
        {/* Product Image */}
        <div className="flex h-48 w-full items-center justify-center rounded-xl bg-gray-100 sm:h-40 sm:w-40">
          <img
            src={cartItem.image}
            alt={cartItem.title}
            className="h-full w-full rounded-xl object-contain p-4"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-1 flex-col justify-between">
          {/* Title & Category */}
          <div>
            <p className="mb-1 text-sm font-medium capitalize text-gray-500">
              {cartItem.category}
            </p>

            <h2 className="text-xl font-semibold text-gray-900">
              {cartItem.title}
            </h2>

            <p className="mt-2 line-clamp-2 text-sm text-gray-500">
              {cartItem.description}
            </p>
          </div>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">
              ★ {cartItem.rating.rate}
            </span>

            <span className="text-sm text-gray-500">
              ({cartItem.rating.count} ratings)
            </span>
          </div>

          {/* Price & Actions */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            {/* Price */}
            <p className="text-2xl font-bold text-gray-900">
              ${cartItem.price}
            </p>

            {/* Quantity */}
            <div className="flex items-center rounded-lg border border-gray-300">
              <button className="px-3 py-1.5 text-lg font-semibold text-gray-600 hover:bg-gray-100">
                −
              </button>

              <span className="px-4 py-1.5 text-sm font-semibold">1</span>

              <button className="px-3 py-1.5 text-lg font-semibold text-gray-600 hover:bg-gray-100">
                +
              </button>
            </div>

            {/* Remove */}
            <button className="text-sm font-medium text-red-500 transition hover:text-red-700">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
