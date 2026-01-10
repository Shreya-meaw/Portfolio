import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Github, Linkedin, Download, MessageCircle 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trackSocialClick, trackContactSubmit } from "@/lib/analytics";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "shreyasingh7297@gmail.com",
      href: "mailto:shreyasingh7297@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+91 8279948895",
      href: "https://wa.me/8279948895",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India – Available Globally",
      href: "https://www.google.com/maps?q=Dehradun+248003+Uttarakhand+India",
      color: "text-purple-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "@shreyasingh",
      href: "https://github.com/Shreya-meaw",
      color: "text-foreground"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Shreya Singh",
      href: "https://www.linkedin.com/in/shreya-singh-a14868303/",
      color: "text-sky-600"
    },
    {
      icon: MessageCircle,
      title: "msg",
      value: "shreya",
      href: "https://wa.me/8279948895",
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 via-background to-muted/10 relative overflow-hidden" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" aria-hidden="true" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="contact-heading" className="text-4xl font-extrabold tracking-tight mb-4">
            Let’s Connect
          </h2>
         <p className="text-lg text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
  <span>
    Ready to start your project? Reach out through any of the methods below
  </span>
  {/* <MessageCircle className="text-primary w-5 h-5" aria-hidden="true" /> */}
</p>

        </motion.header>

        <div className="max-w-5xl mx-auto">
          {/* Contact Methods */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl shadow-card hover:shadow-hover transition-all duration-500 group hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <CardContent className="p-8 text-center relative z-10">
                    <method.icon
                      className={`mx-auto mb-4 ${method.color} group-hover:scale-110 transition-transform`}
                      size={48}
                    />
                    <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.value}</p>
                    <Button
                      variant="outline"
                      className="rounded-full px-6 hover:scale-105 transition-all"
                      onClick={() => {
                        trackContactSubmit();
                        window.open(method.href, "_blank");
                      }}
                    >
                      Get in Touch
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-bold mb-8">Follow Me</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.title}
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 120
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-16 h-16 rounded-full hover:scale-110 hover:shadow-md transition-all group"
                    onClick={() => {
                      trackSocialClick(social.title);
                      window.open(social.href, "_blank");
                    }}
                  >
                    <social.icon
                      className={`${social.color} group-hover:scale-110 transition-transform`}
                      size={28}
                    />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-md border border-border/40 rounded-2xl shadow-lg hover:shadow-xl transition-all max-w-md mx-auto">
              <CardContent className="p-10">
                <Download className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-bold mb-2">View Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a detailed overview of my skills and experience
                </p>
             <Button
  className="bg-gradient-to-r from-primary to-indigo-500 text-white rounded-full px-8 py-2 font-semibold shadow hover:scale-105 transition-all"
  size="lg"
  onClick={() => window.open("https://docs.google.com/document/d/14fe4fa38hTpc0UFlq_M2Wx7mQhMpSVpp/edit?usp=sharing&ouid=117596840770019124674&rtpof=true&sd=true", "_blank")}
>
  <Download className="mr-2" size={16} />
  View Resume
</Button>

              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Response */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-600 px-6 py-3 rounded-full">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <span className="font-medium">I typically respond within 2–4 hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
