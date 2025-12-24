import { useState } from 'react';
import { X, Plus, Trash2, Package, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';
import bagsImage from '@/assets/bags-product.jpg';
import threadImage from '@/assets/thread-product.jpg';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddProduct: (product: Omit<Product, 'id'>) => void;
  onRemoveProduct: (id: string) => void;
}

const AdminPanel = ({ isOpen, onClose, products, onAddProduct, onRemoveProduct }: AdminPanelProps) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    category: 'bags' as 'bags' | 'thread',
    features: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.description) return;

    onAddProduct({
      name: newProduct.name,
      description: newProduct.description,
      category: newProduct.category,
      image: newProduct.category === 'bags' ? '/bags' : '/thread',
      features: newProduct.features.split(',').map((f) => f.trim()).filter(Boolean),
    });

    setNewProduct({ name: '', description: '', category: 'bags', features: '' });
    setShowAddForm(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm animate-fade-in">
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-background shadow-2xl animate-slide-in overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-foreground">Admin Panel</h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Add Product Button */}
          {!showAddForm && (
            <Button onClick={() => setShowAddForm(true)} className="w-full" variant="hero">
              <Plus className="h-4 w-4" />
              Add New Product
            </Button>
          )}

          {/* Add Product Form */}
          {showAddForm && (
            <form onSubmit={handleSubmit} className="bg-muted rounded-xl p-6 space-y-4 animate-scale-in">
              <h3 className="font-semibold text-foreground">Add New Product</h3>

              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Product Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
                  placeholder="e.g., Premium PP Bags"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Description</label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground resize-none"
                  rows={3}
                  placeholder="Product description..."
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Category</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={newProduct.category === 'bags'}
                      onChange={() => setNewProduct({ ...newProduct, category: 'bags' })}
                      className="text-primary"
                    />
                    <Package className="h-4 w-4" />
                    Woven Bags
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={newProduct.category === 'thread'}
                      onChange={() => setNewProduct({ ...newProduct, category: 'thread' })}
                      className="text-primary"
                    />
                    <Scissors className="h-4 w-4" />
                    Thread
                  </label>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Features (comma-separated)
                </label>
                <input
                  type="text"
                  value={newProduct.features}
                  onChange={(e) => setNewProduct({ ...newProduct, features: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
                  placeholder="UV Resistant, High Strength, Custom Sizes"
                />
              </div>

              <div className="flex gap-3">
                <Button type="submit" variant="gold" className="flex-1">
                  Add Product
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          )}

          {/* Products List */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Manage Products ({products.length})</h3>
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-soft"
              >
                <img
                  src={product.category === 'bags' ? bagsImage : threadImage}
                  alt={product.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate">{product.name}</h4>
                  <p className="text-sm text-muted-foreground capitalize">{product.category}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemoveProduct(product.id)}
                  className="text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
