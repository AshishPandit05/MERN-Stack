import { useQuery } from "@tanstack/react-query";
import { getProductDataApi } from "../api/productApi";

export const useProductApi = () => {
  let { isPending, data } = useQuery({
    queryKey: ["Products"],
    queryFn: getProductDataApi,
    staleTime: 10000,
  });

  return {
    isPending,
    data,
  };
};
