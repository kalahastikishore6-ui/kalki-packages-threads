import { Product } from '@/data/products';
import bagsImage from '@/assets/bags-product.jpg';
import threadImage from '@/assets/thread-product.jpg';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const image = product.category === 'bags' ? bagsImage : threadImage;

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full capitalize">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {product.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
