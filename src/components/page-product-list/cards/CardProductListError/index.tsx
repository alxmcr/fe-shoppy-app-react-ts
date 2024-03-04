type CardProductListErrorProps = {
  errorProducts: Error | null;
};

export default function CardProductListError({
  errorProducts,
}: CardProductListErrorProps) {
  if (errorProducts === null) return null;

  return (
    <article className="card-fruit-list-error">
      <div className="error-fruits">
        <h2 className="error-fruits__title">Error: {errorProducts.name}</h2>
        <p className="error-fruits__message">{errorProducts.message}</p>
      </div>
    </article>
  );
}
