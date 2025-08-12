/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import ProductPriceComponent from "./product-price";
import { ProductType } from "@/types";

const ProductCardComponent = ({ product }: { product: ProductType }) => {
  return (
    <Card className="w-full max-w-sm shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0 overflow-hidden rounded-t-2xl">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority
            className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </CardHeader>

      <CardContent className="p-4 space-y-2">
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          {product.brand}
        </p>

        <Link href={`/product/${product.slug}`}>
          <h2 className="text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
            {product.name}
          </h2>
        </Link>

        <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-yellow-600 font-medium">
            {product.rating} ★
          </p>
          {product.stock > 0 ? (
            <ProductPriceComponent value={product.price} />
          ) : (
            <span className="text-sm text-red-500 font-medium">
              Out of stock
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardComponent;
