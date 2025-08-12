/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCardComponent from "./product-card";
import { ProductType } from "@/types";

const ProductListComponent = ({
  data,
  title,
  limit,
}: {
  data: ProductType[];
  title?: string;
  limit?: number;
}) => {
  const trimmedProducts = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-12 px-4 md:px-8">
      {title && (
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 border-b pb-2 border-gray-200">
          {title}
        </h2>
      )}

      {data.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {trimmedProducts.map((product: ProductType) => (
            <ProductCardComponent key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500 text-sm">
          <h3>No products available</h3>
        </div>
      )}
    </div>
  );
};

export default ProductListComponent;
