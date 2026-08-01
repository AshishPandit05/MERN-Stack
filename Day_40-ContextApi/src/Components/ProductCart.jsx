import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);

  return (
    <div className="m-2 gap-3">
      <article className="w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-52 items-center justify-center bg-slate-50 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-full max-w-full object-contain"
          />
        </div>

        <div className="p-4">
          <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold capitalize text-indigo-600">
            {product.category}
          </span>

          <h2 className="mt-3 line-clamp-2 text-lg font-bold text-slate-900">
            {product.title}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
            {product.description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-2xl font-bold text-slate-900">
              ${product.price}
            </p>

            <div className="text-right">
              <div className="flex items-center gap-1 text-amber-500">
                <span>★</span>
                <span className="font-semibold text-slate-700">
                  {product.rating.rate}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {product.rating.count} reviews
              </p>
            </div>
          </div>

          <button className="mt-5 w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 cursor-pointer">
            Add to Cart
          </button>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
