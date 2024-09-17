import { Product } from '@/app/types/product.type';

export async function generateStaticParams() {
  const products: Product[] = await fetch(
    'http://localhost:8079/products',
  ).then(response => response.json());

  return products.map(product => ({
    params: { id: product.id.toString() },
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Product Detail Page{params.id}</h1>
    </div>
  );
}
