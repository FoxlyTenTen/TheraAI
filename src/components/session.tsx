import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const SessionPage = () => {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    if (showWidget) {
      // Check if the script is already loaded
      if (!document.getElementById("elevenlabs-script")) {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
        script.id = "elevenlabs-script";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [showWidget]);

  const handleStart = () => {
    setShowWidget(true);
  };

  return (
    <section className="py-16 px-4 bg-muted/30 min-h-screen">
      <div className="container mx-auto max-w-3xl">
        {/* Back Button */}
        <div className="mb-6">
          <Button asChild variant="ghost">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        {/* Session Card */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Active Counseling Session</CardTitle>
            <CardDescription className="text-center">
              You are now connected with the AI counselor. Tap start to begin your voice session.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Mic Icon Centered */}
            <div className="flex justify-center">
              <div className="p-8 bg-background/50 rounded-full shadow-md">
                <Mic className="h-16 w-16 text-primary" />
              </div>
            </div>

            {/* Single Start Button */}
            <div className="flex justify-center">
              <Button variant="hero" size="lg" onClick={handleStart}>
                Start Now
              </Button>
            </div>

            {/* ElevenLabs Widget */}
            {showWidget && (
              <div className="mt-8">
                <elevenlabs-convai agent-id="agent_2601k5nz72vne9pafzb8hzex9f5e"></elevenlabs-convai>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SessionPage;
