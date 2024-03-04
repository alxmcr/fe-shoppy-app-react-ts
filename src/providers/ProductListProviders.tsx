import TokenProvider from './TokenProvider';

type ProductListProvidersProps = {
  children: React.ReactNode;
};

export default function ProductListProviders({
  children,
}: ProductListProvidersProps) {
  return <TokenProvider>{children}</TokenProvider>;
}
