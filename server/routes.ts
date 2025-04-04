import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication routes
  await setupAuth(app);

  // Protected route example
  app.get("/api/dashboard", (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Authentication required" });
    }
    
    // Sample dashboard data - in a real app you'd fetch this from a database
    const dashboardData = {
      stats: {
        rankImprovement: "+28.4%",
        visibilityScore: "62/100",
        backlinks: 842,
        keywordsTracked: 156
      },
      keywords: [
        { name: "SEO automation tools", position: 3, change: "+2", volume: 4200 },
        { name: "AI SEO ranking", position: 5, change: "+7", volume: 2800 },
        { name: "Best SEO software", position: 8, change: "-1", volume: 6500 },
        { name: "Autonomous SEO", position: 4, change: "+12", volume: 1900 }
      ],
      notifications: [
        { 
          type: "improvement", 
          title: "Rank improvement detected", 
          message: "Your website moved up 5 positions for \"AI SEO ranking\"", 
          time: "2 hours ago" 
        },
        { 
          type: "warning", 
          title: "Competitor alert", 
          message: "A competitor has published new content targeting your keywords", 
          time: "6 hours ago" 
        },
        { 
          type: "success", 
          title: "Optimization complete", 
          message: "The AI has completed optimizing 12 pages on your website", 
          time: "Yesterday" 
        }
      ]
    };
    
    res.json(dashboardData);
  });

  const httpServer = createServer(app);
  return httpServer;
}
