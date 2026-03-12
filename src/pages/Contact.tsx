import { MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Info */}
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get in touch</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Whether you have questions about our services or need assistance, our team is ready to help.
                </p>

                <div className="mt-10 space-y-8">
                  <div className="flex gap-4 items-start p-6 rounded-xl border bg-card">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">Head Office</h3>
                      <p className="text-sm text-muted-foreground mt-1">Rayat Seva Urban Main Office</p>
                      <p className="text-sm text-muted-foreground">Beside Rayat Seva School, Netaji Subhash Colony, Pathri, Dist.- Parbhani, Maharashtra - 431506</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-6 rounded-xl border bg-card">
                    <Phone className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Sat from 10am to 6pm</p>
                      <a href="tel:+918805612797" className="text-sm text-primary hover:underline block">+91 8805612797</a>
                      <a href="tel:+919156114870" className="text-sm text-primary hover:underline block">+91 9156114870</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-6 rounded-xl border bg-card">
                    <Mail className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-sm text-muted-foreground mt-1">Our support team is here to help</p>
                      <a href="mailto:Rayatsevaurban@gmail.com" className="text-sm text-primary hover:underline">Rayatsevaurban@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">First name</label>
                      <input type="text" className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Last name</label>
                      <input type="text" className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                    <input type="email" className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Phone number</label>
                    <input type="tel" className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                    <textarea rows={4} className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="btn-primary">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
