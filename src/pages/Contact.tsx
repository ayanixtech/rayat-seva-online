import { useState, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_rayatseva";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_rayatseva";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
const CONTACT_RECEIVER_EMAIL = "rayatsevaurban@gmail.com";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!EMAILJS_PUBLIC_KEY) {
      toast({
        title: "Email setup pending",
        description: "Please add your EmailJS public key in VITE_EMAILJS_PUBLIC_KEY.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);

    const formData = new FormData(formRef.current);
    const data = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      },
    };

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast({ title: "Message sent!", description: "We'll get back to you soon." });
        formRef.current?.reset();
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({ title: "Failed to send", description: "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
                      <a href="mailto:rayatsevaurban@gmail.com" className="text-sm text-primary hover:underline">rayatsevaurban@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">First name</label>
                      <input name="first_name" type="text" required className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Last name</label>
                      <input name="last_name" type="text" required className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                    <input name="email" type="email" required className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Phone number</label>
                    <input name="phone" type="tel" required className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                    <textarea name="message" rows={4} required className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" disabled={sending} className="btn-primary disabled:opacity-50">
                      {sending ? "Sending..." : "Send message"}
                    </button>
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
