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
      const response = await fetch("https://script.google.com/macros/s/AKfycbxhYL6eHkh-SLZyIL6T9GvayEaW_v44m3mN-0JoeJKNPs-TFhqovacrL_IcmLtFUSlK/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        console.error("Failed to parse JSON from Apps Script:", jsonError);
        result = { success: false, error: "Invalid JSON response" };
      }

      console.log("Apps Script response:", result);

      if (response.ok && result.success) {
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
        const errorMsg = result?.error || "Unknown error";
        console.error("Form submission failed:", errorMsg);
        toast({
          title: "Submission Error",
          description: `Something went wrong: ${errorMsg}`,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("Network or fetch error:", error);
      toast({
        title: "Submission Error",
        description: `Something went wrong: ${error.message}`,
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
