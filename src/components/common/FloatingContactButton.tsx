import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { trackContactSubmit } from "@/lib/analytics";

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Replace with your EmailJS credentials
    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "shreyasingh7297@gmail.com",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        trackContactSubmit();
        toast({
          title: "Message Sent!",
          description: "I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
        setIsOpen(false);
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-xl bg-primary hover:bg-primary/90 transition-all duration-300"
          size="icon"
        >
          <Mail className="h-6 w-6" />
        </Button>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Quick Contact</DialogTitle>
            <DialogDescription>
              Send me a message and I'll get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="quick-name">Name</Label>
              <Input
                id="quick-name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quick-email">Email</Label>
              <Input
                id="quick-email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="your.email@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quick-message">Message</Label>
              <Textarea
                id="quick-message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your message..."
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingContactButton;
