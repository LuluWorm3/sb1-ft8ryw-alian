import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-background py-4 payload-inspired-border">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold payload-inspired-text mb-4 md:mb-0">Mupolo USCO</Link>
        <div className="space-x-4 flex flex-wrap justify-center">
          <Link href="/about" className="text-foreground hover:payload-inspired-text transition-colors">About</Link>
          <Link href="/services" className="text-foreground hover:payload-inspired-text transition-colors">Services</Link>
          <Link href="/case-studies" className="text-foreground hover:payload-inspired-text transition-colors">Case Studies</Link>
          <Link href="/testimonials" className="text-foreground hover:payload-inspired-text transition-colors">Testimonials</Link>
          <Link href="/team" className="text-foreground hover:payload-inspired-text transition-colors">Our Team</Link>
          <Link href="/blog" className="text-foreground hover:payload-inspired-text transition-colors">Blog</Link>
          <Link href="/faq" className="text-foreground hover:payload-inspired-text transition-colors">FAQ</Link>
          <Link href="/contact" passHref>
            <Button variant="outline" className="glow-line payload-inspired-glow">Contact Us</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;