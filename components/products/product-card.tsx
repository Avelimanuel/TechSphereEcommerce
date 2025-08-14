/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import ProductPriceComponent from "./product-price";
import { ProductType } from "@/types";

const ProductCardComponent = ({ product }: { product: ProductType }) => {
  return (
    <Card className="w-full max-w-sm rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
      {/* Product Image */}
      <CardHeader className="p-0 overflow-hidden rounded-t-2xl">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority
            className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </CardHeader>

      {/* Product Info */}
      <CardContent className="p-4 space-y-3">
        {/* Brand */}
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          {product.brand}
        </p>

        {/* Product Name */}
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg font-semibold text-gray-800 leading-tight hover:text-blue-600 transition-colors duration-200 line-clamp-2">
            {product.name}
          </h2>
        </Link>

        {/* Rating & Price */}
        <div className="flex items-center justify-between">
          {product.rating && (
            <p className="text-sm font-medium text-yellow-600 flex items-center gap-1">
              {product.rating} <span className="text-xs">★</span>
            </p>
          )}

          {product.stock > 0 ? (
            <ProductPriceComponent value={product.price} />
          ) : (
            <span className="text-sm font-semibold text-red-500">
              Out of stock
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardComponent;
