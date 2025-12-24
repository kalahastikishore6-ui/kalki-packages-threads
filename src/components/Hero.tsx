import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Scissors } from 'lucide-react';
import heroImage from '@/assets/hero-bags.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Kalki Groups Packaging Solutions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-muted/80 backdrop-blur px-4 py-2 rounded-full animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Trusted by 500+ Industries</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-up delay-100">
            Premium{' '}
            <span className="text-gradient">Packaging</span>{' '}
            Solutions
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
            Kalki Groups delivers exceptional quality woven bags and industrial stitching threads. 
            Serving agriculture, cement, and manufacturing industries with reliability and excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="xl">
              Explore Products
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8 animate-fade-up delay-400">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground">10M+</p>
                <p className="text-sm text-muted-foreground">Bags Delivered</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Scissors className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Thread Varieties</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
