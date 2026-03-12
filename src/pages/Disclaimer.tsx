import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl mb-8">Disclaimer</h1>
          <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. General Information</h2>
              <p>The information provided on this website is for general informational purposes only. While we strive to keep information accurate and up to date, we make no warranties about the completeness, reliability, or accuracy of this information.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">2. No Financial Advice</h2>
              <p>Content on this website should not be considered as financial advice. Always consult with qualified financial advisors before making any financial decisions.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">3. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">4. Limitation of Liability</h2>
              <p>Rayat Seva Urban Co-op Credit Society Ltd. shall not be liable for any losses, injuries, or damages resulting from the display or use of information from this website.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Changes</h2>
              <p>We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on the website.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
