import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Shreya Singh</title>
        <meta
          name="description"
          content="Privacy Policy for Shreya Singh's portfolio website. Learn how your information is collected, used, and protected."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              className="mb-8 hover:bg-primary/10"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Button>

            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Privacy Policy
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <p className="text-muted-foreground text-lg">
                This Privacy Policy explains how information is collected, used, and protected when you visit my portfolio website.
              </p>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Information Collection</h2>
                <p className="text-muted-foreground">
                  I do not collect personal data automatically. Information is only collected if you voluntarily provide it through contact forms or email communication.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Use of Information</h2>
                <p className="text-muted-foreground">
                  Any information shared is used solely for communication purposes, such as responding to inquiries, collaboration requests, or professional discussions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookies & Tracking</h2>
                <p className="text-muted-foreground">
                  This website does not use cookies, trackers, or third-party analytics tools that collect personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Links</h2>
                <p className="text-muted-foreground">
                  This portfolio may contain links to external websites. I am not responsible for the privacy practices or content of those websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
                <p className="text-muted-foreground">
                  Reasonable measures are taken to ensure that any voluntarily shared information remains secure. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Policy Updates</h2>
                <p className="text-muted-foreground">
                  This Privacy Policy may be updated periodically. Any changes will be reflected on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact</h2>
                <p className="text-muted-foreground">
                  If you have questions regarding this Privacy Policy, you may contact me via the details provided in the "Let's Connect" section.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
