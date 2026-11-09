const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm animate-pulse">
      {/* Image Skeleton */}
      <div className="h-52 bg-gray-200 p-4">
        <div className="h-full w-full rounded-xl bg-gray-300" />
      </div>

      {/* Product Details Skeleton */}
      <div className="space-y-4 p-4">
        {/* Product Name */}
        <div className="h-5 w-3/4 rounded-md bg-gray-200" />

        {/* Price */}
        <div className="h-6 w-1/3 rounded-md bg-gray-200" />

        {/* Quantity Selector */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-20 rounded-md bg-gray-200" />

          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gray-200" />
            <div className="h-4 w-5 rounded-md bg-gray-200" />
            <div className="h-9 w-9 rounded-lg bg-gray-200" />
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="h-12 w-full rounded-xl bg-gray-200" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
