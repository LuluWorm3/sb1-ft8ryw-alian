"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [isLoading, setIsLoading] = useState(true);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFaqs([
        {
          id: "faq-1",
          question: "What services does Mupolo USCO offer?",
          answer: "Mupolo USCO offers a range of business solutions including business consulting, software development, data analytics, and cybersecurity services."
        },
        {
          id: "faq-2",
          question: "How can Mupolo USCO help my business?",
          answer: "We can help your business by providing strategic advice, developing custom software solutions, analyzing your data for insights, and securing your digital assets."
        },
        {
          id: "faq-3",
          question: "What industries does Mupolo USCO work with?",
          answer: "We work with a wide range of industries including finance, healthcare, retail, manufacturing, and technology. Our solutions are adaptable to various business needs."
        },
        {
          id: "faq-4",
          question: "How do I get started with Mupolo USCO?",
          answer: "To get started, simply contact us through our website or give us a call. We'll schedule a consultation to discuss your needs and how we can help."
        },
        {
          id: "faq-5",
          question: "Does Mupolo USCO offer ongoing support?",
          answer: "Yes, we offer ongoing support and maintenance for all our services and solutions. We're committed to ensuring the long-term success of our clients."
        }
      ]);
      setIsLoading(false);
    };

    fetchFAQs();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-12 w-3/4 mb-6" />
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} className="h-16 w-full mb-4" />
        ))}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-6 glow-line pb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}