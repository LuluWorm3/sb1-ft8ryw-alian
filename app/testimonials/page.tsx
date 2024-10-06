"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  avatar: string;
  content: string;
}

export default function Testimonials() {
  const [isLoading, setIsLoading] = useState(true);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setTestimonials([
        {
          id: 1,
          name: "John Smith",
          company: "Tech Innovators Inc.",
          avatar: "https://i.pravatar.cc/150?img=1",
          content: "Mupolo USCO's business consulting services transformed our operations. Their insights were invaluable."
        },
        {
          id: 2,
          name: "Sarah Johnson",
          company: "Data Dynamics Ltd.",
          avatar: "https://i.pravatar.cc/150?img=2",
          content: "The data analytics solution provided by Mupolo USCO gave us actionable insights that boosted our revenue."
        },
        {
          id: 3,
          name: "Michael Chen",
          company: "Secure Systems Co.",
          avatar: "https://i.pravatar.cc/150?img=3",
          content: "We feel much safer after implementing Mupolo USCO's cybersecurity recommendations. Top-notch service!"
        }
      ]);
      setIsLoading(false);
    };

    fetchTestimonials();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-12 w-3/4 mb-6" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} className="h-48" />
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
        Client Testimonials
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}