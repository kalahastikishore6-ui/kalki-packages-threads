import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Send, Loader2, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import bagsImage from '@/assets/bags-product.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate Gmail format
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(formData.email)) {
      toast.error('Please enter a valid Gmail address');
      return;
    }

    if (!formData.name || !formData.phone || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 hidden lg:block">
        <img 
          src={bagsImage} 
          alt="Decorative background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Ready to elevate your packaging solutions? Contact us today for custom quotes and bulk orders.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground text-lg">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-semibold text-foreground text-lg">kalki182@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit Us</p>
                  <p className="font-semibold text-foreground text-lg">Industrial Area, India</p>
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="rounded-2xl overflow-hidden shadow-card mt-6">
              <img 
                src={bagsImage} 
                alt="Our Products" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  <User className="h-4 w-4 inline mr-2" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  <Phone className="h-4 w-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Gmail ID
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="yourname@gmail.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
