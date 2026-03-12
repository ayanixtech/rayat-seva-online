import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RegulatoryInfo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl mb-8">Regulatory Information</h1>
          <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. Registration</h2>
              <p>Rayat Seva Urban Co-op Credit Society Ltd. is a registered cooperative credit society operating under the Maharashtra State Co-operative Societies Act.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">2. Deposit Insurance</h2>
              <p>Deposits with Rayat Seva Urban Co-op Credit Society Ltd. are subject to applicable regulations and guidelines issued by the relevant authorities.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">3. Compliance</h2>
              <p>We comply with all applicable regulations, including Know Your Customer (KYC) norms, Anti-Money Laundering (AML) guidelines, and other regulatory directives.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">4. Fair Practice Code</h2>
              <p>We follow the Fair Practice Code to ensure transparency and fair dealing with our customers.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Grievance Redressal</h2>
              <p>We have a dedicated grievance redressal mechanism in place. Customers can reach out to our office for unresolved complaints.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegulatoryInfo;
