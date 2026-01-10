import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Terms of Service | Shreya Singh</title>
        <meta
          name="description"
          content="Terms of Service for Shreya Singh's portfolio website. Read the terms and conditions for using this website."
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
              Terms of Service
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <p className="text-muted-foreground text-lg">
                By accessing and using this portfolio website, you agree to the following terms and conditions.
              </p>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Purpose of Website</h2>
                <p className="text-muted-foreground">
                  This website is intended to showcase my skills, projects, experience, and professional background.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, including text, designs, code samples, and visuals, is the intellectual property of the site owner unless otherwise stated. Unauthorized reproduction or redistribution is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Usage Restrictions</h2>
                <p className="text-muted-foreground">
                  You agree not to misuse, copy, scrape, or exploit any content for commercial purposes without prior written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Accuracy of Information</h2>
                <p className="text-muted-foreground">
                  While efforts are made to ensure accuracy, the content is provided "as is" without warranties of any kind.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  I am not responsible for any direct or indirect damages resulting from the use of this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  These Terms may be updated at any time. Continued use of the website indicates acceptance of the updated terms.
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

export default TermsOfService;
