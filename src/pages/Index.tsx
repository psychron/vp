import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import logo from "@/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
