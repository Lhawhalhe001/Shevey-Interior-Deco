import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Instagram, X } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-interior.jpg";
import aboutImage from "@/assets/about-image.jpg";
import serviceHome from "@/assets/service-home.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceFurniture from "@/assets/service-furniture.jpg";
import serviceLighting from "@/assets/service-lighting.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Home = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const services = [
    {
      image: serviceHome,
      title: "Home Interior Design",
      description:
        "Transform your house into a dream home with our personalized residential design services. We create warm, inviting spaces that reflect your lifestyle and personality.",
    },
    {
      image: serviceOffice,
      title: "Office Space Design",
      description:
        "Boost productivity and impress clients with professional office interiors. We design functional, inspiring workspaces that enhance your business image.",
    },
    {
      image: serviceFurniture,
      title: "Furniture Arrangement",
      description:
        "Optimize your space with expert furniture placement and selection. We ensure perfect flow, balance, and functionality in every room.",
    },
    {
      image: serviceLighting,
      title: "Wall Art & Lighting Setup",
      description:
        "Complete your space with carefully curated art pieces and lighting design. We create ambiance and visual interest through strategic lighting and artwork placement.",
    },
  ];

  const images = [
    { src: gallery1, alt: "Luxury Bedroom Design" },
    { src: gallery2, alt: "Contemporary Dining Room" },
    { src: gallery3, alt: "Modern Kitchen Interior" },
    { src: gallery4, alt: "Elegant Home Office" },
    { src: gallery5, alt: "Cozy Living Room" },
    { src: gallery6, alt: "Luxury Bathroom Design" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/90" />
        </div>

        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-background">
            Shevey Interior Deco
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-background/90 max-w-2xl mx-auto">
            Transforming Spaces with Art & Elegance
          </p>
          <Button
            onClick={scrollToGallery}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-semibold shadow-lg"
          >
            View Our Work
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding elegant-gradient">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Where Vision Meets Design
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            At Shevey Interior Deco, we believe that every space tells a story. Our mission is to
            craft environments that reflect your unique personality while maintaining the highest
            standards of elegance and functionality.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From residential sanctuaries to professional workspaces, we bring your vision to life
            with meticulous attention to detail and a passion for timeless design.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
              About Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Crafting timeless interiors that inspire and delight
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-scale-in">
            <div>
              <img
                src={aboutImage}
                alt="Interior Design Process"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-4xl font-serif font-bold mb-6 text-foreground">
                Our Story
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Founded with a passion for transforming ordinary spaces into extraordinary
                environments, Shevey Interior Deco has become synonymous with elegance and
                sophistication in interior design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced designers brings creativity, innovation, and a deep
                understanding of architectural harmony to every project. We don't just decorate
                spaces; we create experiences that resonate with the people who inhabit them.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-lg shadow-md animate-fade-in">
              <h4 className="text-2xl font-serif font-semibold mb-4 gold-accent">
                Mission
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                To transform spaces into personalized sanctuaries that reflect the unique vision
                and lifestyle of our clients through innovative design solutions.
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-lg shadow-md animate-fade-in">
              <h4 className="text-2xl font-serif font-semibold mb-4 gold-accent">
                Vision
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as the premier interior design firm known for creating timeless,
                elegant spaces that seamlessly blend form and function.
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-lg shadow-md animate-fade-in">
              <h4 className="text-2xl font-serif font-semibold mb-4 gold-accent">
                Values
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Excellence, creativity, sustainability, and client satisfaction guide every
                decision we make, ensuring spaces that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding elegant-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive design solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in">
            <h3 className="text-4xl font-serif font-bold mb-6 text-foreground">
              Ready to Transform Your Space?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and bring your vision to life
            </p>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 font-semibold shadow-lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
              Our Portfolio
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our collection of beautifully crafted interiors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer animate-scale-in"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-background font-semibold p-6">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-primary/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-background hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding elegant-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's bring your vision to life together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-scale-in">
              <h3 className="text-3xl font-serif font-bold mb-6 text-foreground">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in">
              <h3 className="text-3xl font-serif font-bold mb-6 text-foreground">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Mail className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Email</h4>
                    <a
                      href="mailto:contact@sheveyinterior.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      contact@sheveyinterior.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Phone</h4>
                    <a
                      href="tel:+15551234567"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Social Media</h4>
                    <div className="space-y-1">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-muted-foreground hover:text-accent transition-colors"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://pinterest.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-muted-foreground hover:text-accent transition-colors"
                      >
                        Pinterest
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-3 text-foreground">Business Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
