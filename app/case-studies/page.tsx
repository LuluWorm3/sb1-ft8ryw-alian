"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  industry: string;
  result: string;
  slug: string;
}

export default function CaseStudies() {
  const [isLoading, setIsLoading] = useState(true);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCaseStudies([
        {
          id: 1,
          title: "Revolutionizing Retail with AI",
          description: "How we helped a major retailer implement AI-driven inventory management.",
          industry: "Retail",
          result: "30% reduction in overstock, 15% increase in sales",
          slug: "retail-ai-revolution"
        },
        {
          id: 2,
          title: "Securing Financial Data",
          description: "Implementing robust cybersecurity measures for a growing fintech startup.",
          industry: "Finance",
          result: "Zero data breaches, 99.99% uptime achieved",
          slug: "fintech-security-overhaul"
        },
        {
          id: 3,
          title: "Optimizing Supply Chain",
          description: "Streamlining logistics for a global manufacturing company.",
          industry: "Manufacturing",
          result: "40% reduction in delivery times, 25% cost savings",
          slug: "supply-chain-optimization"
        }
      ]);
      setIsLoading(false);
    };

    fetchCaseStudies();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-12 w-3/4 mb-6" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} className="h-64" />
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
        Case Studies
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription>{study.industry}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{study.description}</p>
                <p className="font-semibold mb-4">Result: {study.result}</p>
                <Link href={`/case-studies/${study.slug}`} passHref>
                  <Button variant="outline" className="w-full">Read More</Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}