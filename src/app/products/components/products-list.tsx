import { Product } from '@/app/types/product.type';
import ProductComponent from './product';

type ProductsListProps = {
  products: Product[];
};

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map(product => (
        <ProductComponent
          key={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}
