import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ProductsAndServicesSection from '@/components/sections/ProductsAndServicesSection';
import ContactsSection from '@/components/sections/ContactsSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <Header onNavigate={scrollToSection} />
      <HeroSection onNavigate={scrollToSection} />
      <ProductsAndServicesSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
