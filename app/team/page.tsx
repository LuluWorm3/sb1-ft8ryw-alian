"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export default function Team() {
  const [isLoading, setIsLoading] = useState(true);
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setTeam([
        {
          id: 1,
          name: "Dr. Emily Chen",
          role: "CEO & Founder",
          avatar: "https://i.pravatar.cc/150?img=4",
          bio: "Dr. Chen has over 20 years of experience in business strategy and technology innovation."
        },
        {
          id: 2,
          name: "Marcus Johnson",
          role: "CTO",
          avatar: "https://i.pravatar.cc/150?img=5",
          bio: "Marcus leads our technology initiatives with his extensive background in software development and AI."
        },
        {
          id: 3,
          name: "Sophia Rodriguez",
          role: "Head of Data Analytics",
          avatar: "https://i.pravatar.cc/150?img=6",
          bio: "Sophia is an expert in turning complex data into actionable business insights."
        },
        {
          id: 4,
          name: "Alex Kim",
          role: "Chief Security Officer",
          avatar: "https://i.pravatar.cc/150?img=7",
          bio: "Alex ensures our clients' data and systems are protected with cutting-edge cybersecurity measures."
        }
      ]);
      setIsLoading(false);
    };

    fetchTeam();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-12 w-3/4 mb-6" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, index) => (
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
        Our Team
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}