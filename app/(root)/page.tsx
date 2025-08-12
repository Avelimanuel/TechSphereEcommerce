import ProductListComponent from "@/components/products/priduct-list";
import { getLatestProducts } from "@/lib/actions/productActions";

const HomePage = async() => {
  const latestProducts = await getLatestProducts()
  return (
    <>
      <ProductListComponent
        data={latestProducts}
        title="Latest Samples"
        limit={8}
      />
    </>
  );
};

export default HomePage;
