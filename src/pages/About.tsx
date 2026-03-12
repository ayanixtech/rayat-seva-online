import { Target, Eye, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
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
            <span className="section-label-blue">Our Story</span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">About Us</h1>
            <p className="mt-6 max-w-2xl text-lg text-blue-100">
              Rayat Seva Urban Co-op Credit Society Ltd., Pathri, is a dynamic financial cooperative dedicated to fostering economic growth in the Parbhani region since its incorporation in 2019.
            </p>
          </div>
        </div>

        {/* Mission Vision Values */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-label-hero">Our Purpose</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Mission & Vision</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Building a stronger financial future for our community through trust, innovation, and excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="feature-card">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Mission</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To empower individuals and businesses by providing accessible, innovative financial solutions while maintaining the highest standards of service and integrity.
                </p>
              </div>
              <div className="feature-card">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To build a financially inclusive Pathri where every individual and business thrives through accessible, member-focused credit solutions.
                </p>
              </div>
              <div className="feature-card">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Values</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We are committed to sustainable development, transparency, community upliftment, and excellence in all our dealings in Maharashtra.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-label-hero">Leadership</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Leadership</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Under the visionary guidance of our leaders, we blend entrepreneurial drive with operational excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="feature-card text-center">
                <div className="mb-4 mx-auto inline-flex items-center justify-center rounded-full bg-primary/10 h-20 w-20">
                  <span className="text-2xl font-bold text-primary">AP</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Abhishekraje Paul</h3>
                <p className="text-sm text-muted-foreground">Chairman</p>
              </div>
              <div className="feature-card text-center">
                <div className="mb-4 mx-auto inline-flex items-center justify-center rounded-full bg-primary/10 h-20 w-20">
                  <span className="text-2xl font-bold text-primary">GS</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Gajanan Shinde</h3>
                <p className="text-sm text-muted-foreground">CEO</p>
              </div>
            </div>
          </div>
        </section>

        {/* Aims */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-label-hero">Our Aims</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What We Aim For</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="feature-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">Women Empowerment</h3>
                <p className="text-sm text-muted-foreground">
                  Empower women via tailored financial products that promote independence and entrepreneurship.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">SME Support</h3>
                <p className="text-sm text-muted-foreground">
                  Support small and medium enterprises (SMEs) with growth-oriented loans, fostering local business expansion and job creation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
