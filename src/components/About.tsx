import { Shield, Truck, Award, Leaf } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'ISO certified manufacturing processes ensuring consistent quality in every product.',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'Reliable logistics network for timely delivery across all states and industrial zones.',
  },
  {
    icon: Award,
    title: '15+ Years Experience',
    description: 'Decades of expertise in packaging solutions serving diverse industries.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Options',
    description: 'Sustainable packaging solutions with recyclable and biodegradable materials.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider animate-fade-up">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 animate-fade-up delay-100">
            Why Choose <span className="text-gradient">Kalki Groups</span>?
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed animate-fade-up delay-200">
            We are a leading manufacturer and supplier of premium woven bags and industrial stitching threads, 
            committed to delivering excellence in every fiber.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
