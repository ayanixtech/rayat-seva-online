import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, User, Briefcase, Car, GraduationCap, Gem, Building, Landmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const loanTypes = [
  {
    icon: Gem,
    title: "Gold Loan",
    description: "Unlock the value of your gold assets with instant loans at attractive interest rates. Enjoy quick processing, minimal paperwork, and flexible repayment options.",
    rate: "9.5%",
    maxAmount: "₹10,00,000",
    tenure: "Up to 1 year",
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    description: "Fuel your business growth with our flexible business loans. Benefit from competitive interest rates, fast approvals, and tailored repayment plans.",
    rate: "11%",
    maxAmount: "₹10,00,000",
    tenure: "Up to 5 years",
  },
  {
    icon: User,
    title: "Personal Loan",
    description: "Quick personal loans for your immediate needs with minimal documentation.",
    rate: "12%",
    maxAmount: "₹5,00,000",
    tenure: "Up to 5 years",
  },
  {
    icon: Home,
    title: "Home Loan",
    description: "Make your dream home a reality with our affordable home loans.",
    rate: "10.5%",
    maxAmount: "₹25,00,000",
    tenure: "Up to 20 years",
  },
  {
    icon: Landmark,
    title: "Loan Against Fixed Deposit",
    description: "Get instant liquidity against your fixed deposits with low interest rates and flexible repayment options. Ideal for emergencies or planned expenses.",
    rate: "9%",
    maxAmount: "₹20,00,000",
    tenure: "Depending upon FD tenure",
  },
  {
    icon: Building,
    title: "Loan Against Property",
    description: "Leverage your property to secure funds for business expansion, education, or personal needs. Enjoy low interest rates and flexible repayment terms.",
    rate: "10.5%",
    maxAmount: "₹20,00,000",
    tenure: "Up to 5 years",
  },
];

const Loans = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(12);

  const monthlyRate = interestRate / 12 / 100;
  const emi = monthlyRate > 0
    ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) / (Math.pow(1 + monthlyRate, loanTenure) - 1)
    : loanAmount / loanTenure;
  const totalAmount = emi * loanTenure;
  const totalInterest = totalAmount - loanAmount;

  const formatCurrency = (val: number) => "₹" + Math.round(val).toLocaleString("en-IN");

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
              १ लाख रुपये कर्जासाठी फक्त 10000 रु वार्षिक व्याज!
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
                  <div className="mt-4 grid grid-cols-3 gap-2 pt-4 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground">Interest Rate</p>
                      <p className="text-sm font-semibold text-primary">{loan.rate} p.a.</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Max Amount</p>
                      <p className="text-sm font-semibold text-foreground">{loan.maxAmount}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Tenure</p>
                      <p className="text-sm font-semibold text-foreground">{loan.tenure}</p>
                    </div>
                  </div>
                  <Link to="/contact" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMI Calculator */}
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-primary rounded" />
              <span className="text-lg font-bold text-primary">EMI Calculator</span>
            </div>
            <p className="text-muted-foreground mb-10">
              Calculate your monthly EMI based on your loan amount, interest rate, and tenure.
            </p>

            <div className="space-y-8">
              {/* Loan Amount */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Loan Amount: {formatCurrency(loanAmount)}
                </label>
                <input
                  type="range"
                  min={10000}
                  max={1000000}
                  step={10000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>₹10,000</span>
                  <span>₹10 Lakh</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Interest Rate: {interestRate}% p.a.
                </label>
                <input
                  type="range"
                  min={5}
                  max={20}
                  step={0.5}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>5%</span>
                  <span>20%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Loan Tenure: {loanTenure} months
                </label>
                <input
                  type="range"
                  min={1}
                  max={240}
                  step={1}
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 month</span>
                  <span>20 years</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-primary p-6 text-center">
                <p className="text-sm text-primary-foreground/80">Monthly EMI</p>
                <p className="text-2xl font-bold text-primary-foreground">{formatCurrency(emi)}</p>
              </div>
              <div className="rounded-2xl border bg-card p-6 text-center">
                <p className="text-sm text-muted-foreground">Total Interest</p>
                <p className="text-2xl font-bold text-foreground">{formatCurrency(totalInterest)}</p>
              </div>
              <div className="rounded-2xl border bg-card p-6 text-center">
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="text-2xl font-bold text-foreground">{formatCurrency(totalAmount)}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Loans;
