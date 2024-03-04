import ProductFilterConditionsProvider from './ProductFilterConditionsProvider';
import ProductFilterModalProvider from './ProductFilterModalProvider';

type ProductListProvidersProps = {
  children: React.ReactNode;
};

export default function ProductListProviders({
  children,
}: ProductListProvidersProps) {
  return (
    <ProductFilterConditionsProvider>
      <ProductFilterModalProvider>{children}</ProductFilterModalProvider>
    </ProductFilterConditionsProvider>
  );
}
