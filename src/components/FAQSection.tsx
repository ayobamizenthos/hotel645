import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in time is from 2:00 PM, and check-out is by 12:00 PM (noon). Early check-in and late check-out can be arranged based on availability—just contact our concierge in advance.",
  },
  {
    question: "Do you offer airport pickup services?",
    answer:
      "Yes! We offer premium airport pickup and drop-off services for our guests. Please contact us via WhatsApp at least 24 hours before your arrival to arrange transportation.",
  },
  {
    question: "What amenities are included in the suites?",
    answer:
      "All our suites include fully equipped kitchens, high-speed WiFi, smart TVs, air conditioning, premium bedding, 24/7 power supply, and complimentary toiletries. Some suites also feature private workspaces and balconies.",
  },
  {
    question: "Is there a minimum stay requirement?",
    answer:
      "Our standard minimum stay is 1 night. However, for special rates on extended stays (weekly or monthly), please contact us directly to discuss customized packages.",
  },
  {
    question: "Are pets allowed at 6:45 Suites?",
    answer:
      "We currently do not allow pets in our suites to ensure the comfort of all guests and maintain our high cleanliness standards. Service animals are welcome with proper documentation.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, card payments (via Paystack/Flutterwave), and cash. All bookings require a deposit, with the balance due upon check-in. Our pricing is fully transparent with no hidden fees.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we provide secure on-site parking for all guests at no additional cost. Our parking area is monitored 24/7 for your peace of mind.",
  },
  {
    question: "Can I host events or photoshoots at the suites?",
    answer:
      "Absolutely! Our suites are perfect for intimate events, photoshoots, and small gatherings. Please contact us in advance to discuss your requirements and any applicable rates.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-4">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-wider text-foreground/80">
                Common Questions
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <p className="text-foreground/50 text-sm sm:text-base">
              Everything you need to know about your stay at 6:45 Suites
            </p>
          </motion.div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl sm:rounded-2xl px-4 sm:px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-[0_0_20px_hsl(43_74%_49%/0.1)] transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-display font-medium text-foreground hover:text-primary hover:no-underline py-4 sm:py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-sm sm:text-base leading-relaxed pb-4 sm:pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12 text-center"
          >
            <div className="glass-premium rounded-2xl p-6 sm:p-8 inline-block">
              <p className="text-foreground/70 mb-4 text-sm sm:text-base">
                Still have questions? We're here to help!
              </p>
              <a
                href="https://wa.me/2348035009283?text=Hello%206:45%20Suites,%20I%20have%20a%20question..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-medium text-sm hover:bg-[#22c55e] transition-all hover-lift"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
