import { Product } from '../types/product.type';
import ProductsList from './components/products-list';

export default async function ProductsPage() {
  const products: Product[] = await fetch('http://localhost:8079/products', {
    cache: 'no-store',
  }).then(response => response.json());

  return (
    <div>
      <h1>Products</h1>
      <ProductsList products={products} />
    </div>
  );
}
