import { useState } from 'react';
import { Product } from '@/data/products';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  const [filter, setFilter] = useState<'all' | 'bags' | 'thread'>('all');

  const filteredProducts = products.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
            Quality <span className="text-gradient">Packaging</span> Products
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Explore our comprehensive range of woven bags and industrial stitching threads.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {(['all', 'bags', 'thread'] as const).map((tab) => (
            <Button
              key={tab}
              variant={filter === tab ? 'default' : 'outline'}
              onClick={() => setFilter(tab)}
              className="capitalize"
            >
              {tab === 'all' ? 'All Products' : tab === 'bags' ? 'Woven Bags' : 'Stitching Thread'}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No products found. Add some products from the admin panel.
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
