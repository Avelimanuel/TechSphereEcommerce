import { getSingleProductBySlug } from "@/lib/actions/productActions";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductPriceComponent from "@/components/products/product-price";
import SingleProductImages from "@/components/products/single-product-images";

const SingleProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const decodedSlug = decodeURIComponent(slug);
  const singleProduct = await getSingleProductBySlug(decodedSlug);
  if (!singleProduct) notFound();
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Images column */}
          <div className="col-span-2">
            <SingleProductImages images={singleProduct.images}/>
          </div>
          {/* Details column */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {singleProduct.brand} {singleProduct.category}
              </p>
              <h1 className="h3-bold">{singleProduct.name}</h1>
              <p>
                {singleProduct.rating} of {singleProduct.numReviews} reviews.
              </p>
              <div className="flex items-center justify-center flex-col sm:flex-row sm:items-center gap-3 bg-green-100 w-24 rounded-full px-5 py-2 text-green-700">
                <ProductPriceComponent value={singleProduct.price} />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p>{singleProduct.description}</p>
            </div>
          </div>
          {/* Action column */}
          <div>
            <Card>
              <CardContent className="p-4">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>
                    <ProductPriceComponent value={singleProduct.price} />
                  </div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  {singleProduct.stock > 0 ? (
                    <Badge variant="outline">In stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out of stock</Badge>
                  )}
                </div>
                {singleProduct.stock > 0 && (
                  <div className="flex-center">
                    <Button className="w-full">Add to cart</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductDetailsPage;
