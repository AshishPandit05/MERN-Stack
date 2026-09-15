import React from "react";

const ProductCards = ({ product, setCartItem }) => {
  //  export default function Product({ product }) {
  const { category, description, image, price, rating, title } = product;

  return (
    <article className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-72 items-center justify-center bg-slate-50 p-8">
        <img src={image} alt={title} className="h-full w-full object-contain" />
      </div>

      <div className="p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {category}
        </p>

        <h2 className="line-clamp-2 text-lg font-bold text-slate-900">
          {title}
        </h2>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-amber-500">★</span>
          <span className="text-sm font-semibold text-slate-700">
            {rating.rate}
          </span>
          <span className="text-sm text-slate-400">
            ({rating.count} reviews)
          </span>
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-2xl font-bold text-slate-900">
            ${price.toFixed(2)}
          </span>
          <button
            onClick={() => setCartItem((prev) => [...prev, product])}
            type="button"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

// Example:
// <Product product={product} />

export default ProductCards;
