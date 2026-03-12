import { Link } from "react-router-dom";
import { Shield, Users, TrendingUp, Landmark, ArrowRight, Smartphone, Home, CreditCard, Send, Zap, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Users,
    title: "Personal Loans",
    description: "Quick and hassle-free personal loans with competitive interest rates.",
  },
  {
    icon: Shield,
    title: "Fixed Deposits",
    description: "Secure your future with our high-yield fixed deposit schemes.",
  },
  {
    icon: TrendingUp,
    title: "Savings Account",
    description: "Start your savings journey with our feature-rich savings accounts.",
  },
  {
    icon: Landmark,
    title: "SME Support",
    description: "Growth-oriented loans fostering local business expansion and job creation.",
  },
];

const bankingServices = [
  { icon: Smartphone, title: "Mobile Banking", description: "Bank on the go with our secure mobile banking app" },
  { icon: Home, title: "Doorstep Banking", description: "Banking services delivered right to your doorstep" },
  { icon: Send, title: "NEFT", description: "National Electronic Funds Transfer for seamless money transfers" },
  { icon: CreditCard, title: "RTGS", description: "Real-Time Gross Settlement for instant high-value transfers" },
  { icon: Zap, title: "IMPS", description: "Immediate Payment Service for instant fund transfers 24/7" },
  { icon: FileText, title: "Demand Draft", description: "Quick and reliable demand draft issuance services" },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <div className="relative isolate overflow-hidden hero-gradient">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] hero-blur opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:px-8">
            <div className="mx-auto max-w-3xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <Link to="/about" className="inline-flex space-x-6">
                  <span className="section-label-blue">Rayat Seva Urban Society</span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium text-blue-200">
                    <span>Explore Our Story</span>
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">
                Empowering Dreams,<br />Building Futures
              </h1>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                Your trusted partner in financial growth. We provide comprehensive banking solutions tailored to your needs.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link to="/loans" className="btn-primary">Explore Loans</Link>
                <Link to="/contact" className="btn-outline text-blue-200 hover:text-blue-100">
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-label-hero">Banking Made Simple</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Everything you need to manage your finances
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover our range of banking products and services designed to meet your financial goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="feature-card">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banking Services */}
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-label-hero">Banking Services</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Everything you need for your banking needs
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Access a wide range of banking services designed to make your financial transactions smooth and convenient.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bankingServices.map((service) => (
                <div key={service.title} className="feature-card">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="hero-gradient py-24">
          <div className="mx-auto max-w-4xl text-center px-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to start your financial journey?
            </h2>
            <p className="mt-6 text-lg text-blue-100">
              Join thousands of members who trust Rayat Seva Urban for their financial needs.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link to="/loans" className="btn-primary">View Loan Options</Link>
              <Link to="/deposits" className="btn-outline text-blue-200 hover:text-blue-100">
                Deposit Schemes →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
