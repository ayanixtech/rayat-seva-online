import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const depositPlans = [
  {
    title: "Fixed Deposit",
    description: "Earn guaranteed returns with our fixed deposit schemes. Choose from flexible tenures and competitive interest rates.",
    rate: "Up to 8.50% p.a.",
    minAmount: "₹10,000",
    duration: "6 months to 10 years",
    features: [
      "Higher interest rates for senior citizens",
      "Auto-renewal facility available",
      "Loan facility against FD",
      "Monthly interest payout option",
      "Premature withdrawal facility",
    ],
  },
  {
    title: "Recurring Deposit",
    description: "Build your savings with regular monthly deposits. Perfect for achieving your financial goals.",
    rate: "Up to 9.00% p.a.",
    minAmount: "₹500/month",
    duration: "12 months to 10 years",
    features: [
      "Flexible monthly deposit amounts",
      "Standing instruction facility",
      "Higher returns than savings account",
      "Goal-based savings plan",
      "Partial withdrawal facility",
    ],
  },
  {
    title: "Monthly Income Scheme (MIS)",
    description: "Enjoy a steady monthly income with our MIS. Invest a lump sum and receive regular interest payouts, making it ideal for retirees and those seeking predictable returns.",
    rate: "Up to 8.5% p.a.",
    minAmount: "₹1,00,000",
    duration: "from 1 year (lock-in)",
    features: [
      "Guaranteed monthly interest payouts",
      "Ideal for retirees and fixed income seekers",
      "No market risk, principal is safe",
      "Flexible investment amount options",
      "Easy nomination and transfer facility",
    ],
  },
  {
    title: "Senior Citizen Fixed Deposit",
    description: "Special fixed deposit scheme for senior citizens with higher interest rates and additional benefits.",
    rate: "Up to 9.00% p.a.",
    minAmount: "₹1,00,000",
    duration: "1 year to 10 years",
    features: [
      "Additional 0.50% interest rate",
      "Monthly interest payout option",
      "Nomination facility",
      "Auto-renewal facility",
      "Doorstep banking services",
    ],
  },
  {
    title: "Daily Deposit (Pigmy)",
    description: "Grow your savings with small daily deposits collected at your doorstep. Ideal for individuals and small businesses looking for disciplined savings and easy liquidity.",
    rate: "0.00% p.a.",
    minAmount: "₹100/day",
    duration: "Flexible tenure",
    features: [
      "Daily doorstep collection",
      "Flexible deposit amounts",
      "Easy withdrawal facility",
      "Doorstep withdrawal option",
      "Suitable for traders and small businesses",
    ],
  },
];

const Deposits = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <div className="relative isolate overflow-hidden hero-gradient">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] hero-blur opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8">
            <span className="section-label-blue">Savings & Growth</span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">Deposit Products</h1>
            <p className="mt-6 max-w-2xl text-lg text-blue-100">
              Grow your wealth with our range of deposit products. We offer competitive interest rates and flexible terms to help you achieve your financial goals.
            </p>
            <div className="mt-8 flex gap-8">
              <div className="stat-card">
                <p className="text-sm text-blue-200">Max Interest Rate p.a.</p>
                <p className="text-2xl font-bold text-primary-foreground">8.5%</p>
              </div>
              <div className="stat-card">
                <p className="text-sm text-blue-200">Deposit Schemes</p>
                <p className="text-2xl font-bold text-primary-foreground">5+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Deposit Plans */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-primary rounded" />
                <span className="text-sm font-semibold text-primary">Available Plans</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Choose Your Deposit Plan</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Select from our range of deposit options designed to meet your financial objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {depositPlans.map((plan) => (
                <div key={plan.title} className="feature-card flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground">{plan.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                  <div className="mt-4 p-3 rounded-lg bg-primary/5">
                    <p className="text-xs text-muted-foreground">Interest Rate</p>
                    <p className="text-lg font-bold text-primary">{plan.rate}</p>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Min Amount</p>
                      <p className="text-sm font-semibold text-foreground">{plan.minAmount}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-semibold text-foreground">{plan.duration}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t flex-grow">
                    <p className="text-xs font-semibold text-foreground mb-2">Features</p>
                    <ul className="space-y-1.5">
                      {plan.features.map((f, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">→</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="hero-gradient py-16">
          <div className="mx-auto max-w-4xl text-center px-6">
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Looking for something specific?
            </h2>
            <p className="mt-4 text-blue-100">
              Our financial experts are here to help you choose the right deposit product.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Deposits;
