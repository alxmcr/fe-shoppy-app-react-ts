import TokenProvider from './TokenProvider';

type AppProvidersProps = {
  children: React.ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
  return <TokenProvider>{children}</TokenProvider>;
}
