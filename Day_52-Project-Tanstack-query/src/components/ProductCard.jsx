import { useState } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full max-w-xs overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      {/* Product Image */}
      <div className="h-52 bg-gray-50 p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-4 p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>

        <p className="text-xl font-bold text-gray-900">${product.price}</p>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Quantity</span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="rounded-lg border p-2 hover:bg-gray-100"
            >
              <Minus size={16} />
            </button>

            <span className="font-semibold">{quantity}</span>

            <button
              onClick={() =>
                setQuantity((prev) => Math.min(product.stock, prev + 1))
              }
              className="rounded-lg border p-2 hover:bg-gray-100"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() =>
            console.log("Add to cart:", {
              product,
              quantity,
            })
          }
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
