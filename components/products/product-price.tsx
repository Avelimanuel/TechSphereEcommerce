const ProductPriceComponent = ({ value }: { value: string }) => {
  return (
    <p className="flex items-center justify-center gap-1 text-lg font-semibold text-gray-800">
      <span className="text-sm text-gray-500">KSh</span>
      <span className="text-xl font-bold text-primary">
        {value.toLocaleString()}
      </span>
    </p>
  );
};

export default ProductPriceComponent;
