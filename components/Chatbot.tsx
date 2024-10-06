"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [input, setInput] = useState('');

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thank you for your message. Our team will get back to you soon.", sender: 'bot' }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full p-4 payload-inspired-glow"
        onClick={toggleChatbot}
      >
        <MessageCircle size={24} />
      </Button>
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-background border payload-inspired-border rounded-lg shadow-lg payload-inspired-glow">
          <div className="flex justify-between items-center p-4 border-b payload-inspired-border">
            <h3 className="font-semibold payload-inspired-text">Chat with us</h3>
            <Button variant="ghost" size="icon" onClick={toggleChatbot}>
              <X size={20} />
            </Button>
          </div>
          <div className="h-64 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t payload-inspired-border">
            <div className="flex">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button type="submit">Send</Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;