import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AdminPanel from '@/components/AdminPanel';
import { useProducts } from '@/hooks/useProducts';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const { products, addProduct, removeProduct } = useProducts();

  return (
    <>
      <Helmet>
        <title>Kalki Groups - Premium Woven Bags & Industrial Stitching Thread</title>
        <meta 
          name="description" 
          content="Kalki Groups is a leading manufacturer of premium PP woven bags, HDPE sacks, and industrial mouth stitching thread. Quality packaging solutions for agriculture and industry." 
        />
        <meta name="keywords" content="woven bags, PP bags, HDPE sacks, stitching thread, packaging, industrial packaging, Kalki Groups" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar onAdminClick={() => setIsAdminOpen(true)} />
        <Hero />
        <About />
        <Products products={products} />
        <Contact />
        <Footer />

        <AdminPanel
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
          products={products}
          onAddProduct={addProduct}
          onRemoveProduct={removeProduct}
        />
      </div>
    </>
  );
};

export default Index;
