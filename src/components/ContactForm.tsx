import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.interest) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Google Apps Script submission
      const response = await fetch(https://script.google.com/macros/s/AKfycbycn9k6-H2gTf-BT4sYkPJQlGvVJJ0s8w1eRLP4YzBfVlogbyWFNFzUg8NtuBuEejo/exec, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Thank you for your interest!",
          description: "We'll get back to you shortly.",
        });
        
        // Reset form
        setFormData({
          name: "",
          company: "",
          email: "",
          interest: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Interested in learning more? Let us know how we can help.
          </p>
        </div>

        {/* Removed hidden Netlify form */}

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-lg shadow-lg p-8 space-y-6 border border-border"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="bg-background border-input"
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-foreground font-medium">
              Company
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              className="bg-background border-input"
              placeholder="Your company name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="bg-background border-input"
              placeholder="your.email@company.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest" className="text-foreground font-medium">
              Area of Interest <span className="text-destructive">*</span>
            </Label>
            <Select
              name="interest"
              required
              value={formData.interest}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, interest: value }))
              }
            >
              <SelectTrigger className="bg-background border-input">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="pilot-trials">Pilot Trials</SelectItem>
                <SelectItem value="licensing">Licensing</SelectItem>
                <SelectItem value="investment">Investment</SelectItem>
                <SelectItem value="collaboration">Collaboration</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground font-medium">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-background border-input min-h-[120px] resize-none"
              placeholder="Tell us more about your interest..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 text-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
