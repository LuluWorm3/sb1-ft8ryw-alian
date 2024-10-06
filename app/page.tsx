"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LucideIcon, Briefcase, Code, LineChart } from 'lucide-react';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import Chatbot from '@/components/Chatbot';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const featuredServices: Service[] = [
  {
    id: 1,
    title: 'Business Consulting',
    description: 'Strategic advice to help your business grow and thrive.',
    icon: Briefcase,
  },
  {
    id: 2,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your needs.',
    icon: Code,
  },
  {
    id: 3,
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights.',
    icon: LineChart,
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 payload-inspired-bg">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <Skeleton className="h-12 w-3/4 mb-6" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <div className="flex mt-6">
            <Skeleton className="h-10 w-32 mr-4" />
            <Skeleton className="h-10 w-32" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} className="h-48 w-full" />
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 payload-inspired-bg">
      <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-20 text-center">
        <motion.h1 
          className="text-4xl sm:text-6xl font-bold mb-6 payload-inspired-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Mupolo USCO
        </motion.h1>
        <motion.p 
          className="mt-3 text-xl sm:text-2xl mb-8 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your Trusted Partner in Business Solutions
        </motion.p>
        <motion.div 
          className="flex mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/services" passHref>
            <Button variant="outline" className="mr-4 glow-line payload-inspired-glow">Our Services</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button className="glow-line payload-inspired-glow">Contact Us</Button>
          </Link>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {featuredServices.map((service, index) => (
            <Card key={service.id} className="payload-inspired-border payload-inspired-glow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <service.icon className="h-6 w-6 payload-inspired-text" />
                  <CardTitle className="payload-inspired-text">{service.title}</CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </motion.div>
        <motion.div
          className="mt-12 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <NewsletterSubscription />
        </motion.div>
      </main>
      <Chatbot />
    </div>
  );
}