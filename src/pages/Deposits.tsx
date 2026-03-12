import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const depositSchemes = [
  {
    title: "Monthly Deposit Scheme (15 Months)",
    rows: [
      { monthly: "₹1,000", months: 15, total: "₹15,000", maturity: "₹16,000", interest: "₹1,000" },
      { monthly: "₹2,000", months: 15, total: "₹30,000", maturity: "₹32,000", interest: "₹2,000" },
      { monthly: "₹3,000", months: 15, total: "₹45,000", maturity: "₹48,000", interest: "₹3,000" },
      { monthly: "₹5,000", months: 15, total: "₹75,000", maturity: "₹80,000", interest: "₹5,000" },
    ],
  },
  {
    title: "Monthly Deposit Scheme (24 Months)",
    rows: [
      { monthly: "₹1,000", months: 24, total: "₹24,000", maturity: "₹27,000", interest: "₹3,000" },
      { monthly: "₹2,000", months: 24, total: "₹48,000", maturity: "₹54,000", interest: "₹6,000" },
      { monthly: "₹5,000", months: 24, total: "₹1,20,000", maturity: "₹1,35,000", interest: "₹15,000" },
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

        {/* Deposit Tables */}
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

            <div className="space-y-12">
              {depositSchemes.map((scheme) => (
                <div key={scheme.title} className="feature-card overflow-hidden p-0">
                  <div className="bg-primary/5 px-6 py-4 border-b">
                    <h3 className="text-lg font-semibold text-foreground">{scheme.title}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="px-6 py-3 text-left font-medium text-muted-foreground">Monthly Deposit</th>
                          <th className="px-6 py-3 text-left font-medium text-muted-foreground">Months</th>
                          <th className="px-6 py-3 text-left font-medium text-muted-foreground">Total Deposit</th>
                          <th className="px-6 py-3 text-left font-medium text-muted-foreground">Maturity Amount</th>
                          <th className="px-6 py-3 text-left font-medium text-muted-foreground">Interest Earned</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scheme.rows.map((row, idx) => (
                          <tr key={idx} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                            <td className="px-6 py-4 font-medium text-foreground">{row.monthly}</td>
                            <td className="px-6 py-4 text-muted-foreground">{row.months}</td>
                            <td className="px-6 py-4 text-muted-foreground">{row.total}</td>
                            <td className="px-6 py-4 font-semibold text-primary">{row.maturity}</td>
                            <td className="px-6 py-4 text-accent-foreground font-medium">{row.interest}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Deposits;
