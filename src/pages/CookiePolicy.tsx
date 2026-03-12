import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl mb-8">Cookie Policy</h1>
          <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. What Are Cookies</h2>
              <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better online banking experience.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">2. How We Use Cookies</h2>
              <p>We use cookies for essential functions (such as security and session management), analytics, and to remember your preferences.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">3. Types of Cookies</h2>
              <p>We use both session cookies (temporary) and persistent cookies. Session cookies are deleted when you close your browser, while persistent cookies remain for a specified period.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">4. Managing Cookies</h2>
              <p>You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our online banking services.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Updates to This Policy</h2>
              <p>We may update this Cookie Policy periodically. Continue checking this page for the latest information about our cookie practices.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
