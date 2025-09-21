import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Calendar, Clock, Sparkles, Play } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ import Link

const SessionDashboard = () => {
  return (
    <section id="sessions" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Your <span className="text-primary">AI Counseling</span> Sessions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engage in meaningful conversations with our AI counselor. 
            Each session is tailored to your current needs and emotional state.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Start New Session */}
          <Card className="lg:col-span-2 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  {/* ✅ Replace router.push with Link */}
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <Link to="/session">Start New Session</Link>
                  </CardTitle>
                  <CardDescription>
                    Begin a personalized counseling conversation
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Ready
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-background/50 rounded-lg">
                  <MessageCircle className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold">Chat Therapy</h3>
                  <p className="text-sm text-muted-foreground">
                    AI Voice-based conversation
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <Calendar className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold">Scheduled</h3>
                  <p className="text-sm text-muted-foreground">
                    Book for later
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold">Quick Check-in</h3>
                  <p className="text-sm text-muted-foreground">
                    5-minute session
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                {/* ✅ Use Link inside Button */}
                <Button asChild variant="hero" className="flex-1">
                  <Link to="/session">
                    <Play className="h-4 w-4 mr-2" />
                    Start Session Now
                  </Link>
                </Button>
                <Button variant="therapeutic">
                  Schedule Later
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Sessions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Sessions</CardTitle>
              <CardDescription>Your latest counseling activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { date: "Today, 2:30 PM", topic: "Anxiety Management", duration: "45 min", mood: "Improved" },
                { date: "Yesterday", topic: "Daily Check-in", duration: "15 min", mood: "Stable" },
                { date: "3 days ago", topic: "Goal Setting", duration: "60 min", mood: "Motivated" },
              ].map((session, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{session.topic}</p>
                      <p className="text-xs text-muted-foreground">{session.date}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {session.duration}
                    </Badge>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Mood: {session.mood}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SessionDashboard;
