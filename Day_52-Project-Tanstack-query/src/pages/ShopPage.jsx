import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useProductApi } from "../hooks/productHook";

const ShopPage = () => {
  let { isPending, data } = useProductApi();

  return (
    <div className="grid grid-cols-4 gap-3">
      {isPending
        ? Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        : data.map((val) => {
            return <ProductCard key={val.id} product={val} />;
          })}
    </div>
  );
};

export default ShopPage;
