import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Send, Church, Mail, User } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import ContactCardActions from "./ContactCard";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    churchName: "",
    role: "",
    needs: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Submitting form data:", formData);
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: "omit",
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response status:", response.status);
      console.log("Response data:", data);

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for reaching out. We'll be in touch within 24-48 hours.",
        });

        setFormData({
          name: "",
          email: "",
          churchName: "",
          role: "",
          needs: "",
        });
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please check if the server is running.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#30b7f9]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#30b7f9]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-black/60 uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-[#30b7f9] text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Let's Partner Together
            </h2>
          </div>

          {/* Contact Form */}
          <ContactCardActions />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
