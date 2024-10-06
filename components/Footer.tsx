import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-muted py-8 payload-inspired-border">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-muted-foreground">&copy; 2024 Mupolo USCO. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/privacy" className="text-muted-foreground hover:payload-inspired-text transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-muted-foreground hover:payload-inspired-text transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;