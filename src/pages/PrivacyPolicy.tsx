import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl mb-8">Privacy Policy</h1>
          <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. Information Collection</h2>
              <p>We collect information that you provide directly to us, including personal information such as name, address, contact details, and financial information necessary for banking services.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">2. Use of Information</h2>
              <p>We use your information to provide banking services, process transactions, communicate with you, and comply with legal and regulatory requirements.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">3. Information Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">4. Data Sharing</h2>
              <p>We may share your information with third parties only as necessary to provide our services or as required by law. We do not sell your personal information to third parties.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. Contact our privacy team for any privacy-related concerns or requests.</p>
              <p>Email: Rayatsevaurban@gmail.com</p>
              <p>Phone: +91 8805612797</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
