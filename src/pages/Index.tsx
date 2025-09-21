import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SessionDashboard from "@/components/SessionDashboard";
import MilestoneTracker from "@/components/MilestoneTracker";
import ReportsSection from "@/components/ReportsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SessionDashboard />
        <MilestoneTracker />
        <ReportsSection />
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">TheraAI</h3>
            <p className="text-muted-foreground">Your AI-powered journey to mental wellness</p>
          </div>
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
