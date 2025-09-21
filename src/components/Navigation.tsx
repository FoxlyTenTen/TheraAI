import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">TheraAI</h1>
              <p className="text-xs text-muted-foreground">Your AI Counseling Companion</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#sessions" className="text-foreground hover:text-primary transition-colors">
              Sessions
            </a>
            <a href="#milestones" className="text-foreground hover:text-primary transition-colors">
              Progress
            </a>
            <a href="#reports" className="text-foreground hover:text-primary transition-colors">
              Reports
            </a>
            <Button variant="therapeutic">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col gap-4 mt-4">
              <a href="#sessions" className="text-foreground hover:text-primary transition-colors">
                Sessions
              </a>
              <a href="#milestones" className="text-foreground hover:text-primary transition-colors">
                Progress
              </a>
              <a href="#reports" className="text-foreground hover:text-primary transition-colors">
                Reports
              </a>
              <Button variant="therapeutic" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;