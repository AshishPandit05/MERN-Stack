import React, { useMemo, useState } from "react";

const Cart = ({ cartItems, setCartItems }) => {
  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const { subtotal, shipping, totalItems, total } = useMemo(() => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const shipping = subtotal > 100 || subtotal === 0 ? 0 : 9.99;
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return {
      subtotal,
      shipping,
      totalItems,
      total: subtotal + shipping,
    };
  }, [cartItems]);

  if (!cartItems.length) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12">
          <p className="text-5xl">🛒</p>
          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Your cart is empty
          </h1>
          <p className="mt-2 text-slate-500">
            Add products to your cart to see them here.
          </p>
          <button className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Shopping Cart</h1>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">
          {totalItems} item{totalItems > 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {cartItems.map((item) => (
            <article
              key={item.id}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex h-28 w-24 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-between">
                <div className="flex justify-between gap-3">
                  <h2 className="line-clamp-2 font-semibold text-slate-900">
                    {item.title}
                  </h2>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="shrink-0 text-sm font-medium text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-4 flex items-end justify-between">
                  <div className="flex items-center overflow-hidden rounded-lg border border-slate-200">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-2 text-lg text-slate-600 hover:bg-slate-100"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>

                    <span className="min-w-10 border-x border-slate-200 px-3 py-2 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-2 text-lg text-slate-600 hover:bg-slate-100"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-lg font-bold text-slate-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </article>
          ))}

          <button className="font-semibold text-indigo-600 hover:text-indigo-800">
            ← Continue Shopping
          </button>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>

          <div className="mt-5 space-y-3 border-b border-slate-200 pb-5 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-slate-600">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>

            {subtotal < 100 && (
              <p className="rounded-lg bg-amber-50 p-3 text-xs text-amber-700">
                Add ${(100 - subtotal).toFixed(2)} more for free shipping.
              </p>
            )}
          </div>

          <div className="mt-5 flex justify-between text-lg font-bold text-slate-900">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700">
            Proceed to Checkout
          </button>

          <p className="mt-4 text-center text-xs text-slate-400">
            Secure checkout · Free shipping on orders over $100
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Cart;
