import { Home, User, Briefcase, Car, GraduationCap, Gem } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const loanTypes = [
  {
    icon: Home,
    title: "Home Loan",
    description: "Make your dream home a reality with our affordable home loans.",
    rate: "10.5%",
    maxAmount: "₹25,00,000",
  },
  {
    icon: User,
    title: "Personal Loan",
    description: "Quick personal loans for your immediate financial needs.",
    rate: "12%",
    maxAmount: "₹5,00,000",
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    description: "Fuel your business growth with our flexible business loans.",
    rate: "11%",
    maxAmount: "₹10,00,000",
  },
  {
    icon: Car,
    title: "Vehicle Loan",
    description: "Drive your dream vehicle home with our easy vehicle loans.",
    rate: "11.5%",
    maxAmount: "₹8,00,000",
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    description: "Invest in your future with our education loan schemes.",
    rate: "10%",
    maxAmount: "₹5,00,000",
  },
  {
    icon: Gem,
    title: "Gold Loan",
    description: "Get instant funds against your gold at attractive interest rates.",
    rate: "9.5%",
    maxAmount: "₹10,00,000",
  },
];

const Loans = () => {
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
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-primary-foreground rounded" />
              <span className="text-sm font-medium text-blue-200">Loans</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">Empower Your Dreams</h1>
            <p className="mt-6 max-w-2xl text-lg text-blue-100">
              Choose from our range of flexible loan options designed to meet your financial needs. Whether you're planning to buy a home or need funds for personal use, we've got you covered.
            </p>
            <div className="mt-8 flex gap-8">
              <div className="stat-card">
                <p className="text-sm text-blue-200">Processing Time</p>
                <p className="text-2xl font-bold text-primary-foreground">24 hrs</p>
              </div>
              <div className="stat-card">
                <p className="text-sm text-blue-200">Choose from</p>
                <p className="text-2xl font-bold text-primary-foreground">6+ products</p>
              </div>
            </div>
          </div>
        </div>

        {/* Loan highlight */}
        <section className="py-16 bg-accent/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              १ लाख रुपये कर्जासाठी फक्त ₹10 दैनिक व्याज दराने!
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              महिला सबलीकरण व उद्योजकतेला प्रोत्साहन देण्यासाठी विशेष कर्ज योजना उपलब्ध.
            </p>
          </div>
        </section>

        {/* Loan Types */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-primary rounded" />
                <span className="text-sm font-semibold text-primary">Available Loans</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Choose Your Loan Type</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Select from our range of loan options tailored to meet your specific financial requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loanTypes.map((loan) => (
                <div key={loan.title} className="feature-card group hover:border-primary/30">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                    <loan.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{loan.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{loan.description}</p>
                  <div className="mt-4 flex justify-between items-center pt-4 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground">Interest Rate</p>
                      <p className="text-sm font-semibold text-primary">{loan.rate} p.a.</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Up to</p>
                      <p className="text-sm font-semibold text-foreground">{loan.maxAmount}</p>
                    </div>
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

export default Loans;
