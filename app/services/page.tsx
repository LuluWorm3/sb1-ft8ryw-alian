"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LucideIcon, Briefcase, Code, LineChart, Shield } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
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
  {
    id: 4,
    title: 'Cybersecurity',
    description: 'Protect your business from digital threats.',
    icon: Shield,
  },
];

export default function Services() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-12 w-3/4 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="h-48 w-full" />
          ))}
        </div>
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
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <service.icon className="h-6 w-6 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}