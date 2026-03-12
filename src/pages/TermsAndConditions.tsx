import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl mb-8">Terms and Conditions</h1>

          <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
              <p>Welcome to Rayat Seva Urban Co-op Credit Society Ltd. These Terms and Conditions ("Terms") govern your use of our banking services. By opening an account or using any of our services, you agree to comply with and be bound by these Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Definitions</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>"Account" refers to any account opened by the Customer with Rayat Seva Urban Co-op Credit Society Ltd.</li>
                <li>"Customer" refers to any individual or entity that holds an account or uses banking services.</li>
                <li>"Services" refers to all banking services offered, including savings accounts, loans, and mobile banking.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Account Opening and Maintenance</h2>
              <p>Customers must provide accurate and complete information when opening an account. Rayat Seva Urban reserves the right to refuse to open an account or close an existing account at its discretion. Customers must promptly notify us of any changes to their personal information.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Use of Services</h2>
              <p>Customers must use the Services in compliance with applicable laws and regulations. We may set limits on transactions for security reasons. Customers are responsible for maintaining the confidentiality of their account information.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Deposits and Withdrawals</h2>
              <p>Deposits can be made by various methods as allowed. Withdrawals are subject to availability of funds and applicable limits. We may impose fees for certain types of transactions.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Interest and Fees</h2>
              <p>Interest rates for savings accounts and other interest-bearing accounts will be determined by Rayat Seva Urban and may change from time to time. Fees may be charged for various services as outlined in our fee schedule.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Electronic Banking Services</h2>
              <p>We offer online and mobile banking services to eligible customers. Customers must use secure devices. We are not liable for any loss arising from unauthorized access due to the customer's failure to safeguard login credentials.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Privacy Policy</h2>
              <p>Rayat Seva Urban respects the privacy of its customers. Our Privacy Policy outlines how we collect, use, and protect your personal information.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
              <p>We are not liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Services. We do not warrant that the Services will be uninterrupted, timely, secure, or error-free.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of India.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
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

export default TermsAndConditions;
