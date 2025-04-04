import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import KeywordTable from "@/components/ui/keyword-table";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle, AlertTriangle, Bell, Search, Copy, ChartBar } from "lucide-react";

type DashboardData = {
  stats: {
    rankImprovement: string;
    visibilityScore: string;
    backlinks: number;
    keywordsTracked: number;
  };
  keywords: {
    name: string;
    position: number;
    change: string;
    volume: number;
  }[];
  notifications: {
    type: string;
    title: string;
    message: string;
    time: string;
  }[];
};

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { data, isLoading, error } = useQuery<DashboardData>({
    queryKey: ["/api/dashboard"],
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "improvement":
        return <Bell className="text-primary h-5 w-5" />;
      case "warning":
        return <AlertTriangle className="text-yellow-500 h-5 w-5" />;
      case "success":
        return <CheckCircle className="text-green-500 h-5 w-5" />;
      default:
        return <Bell className="text-primary h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-[#333333]">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex-grow flex">
        <Sidebar isOpen={isSidebarOpen} />
        
        <main className="flex-1 overflow-auto">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-foreground">Welcome</h1>
              <p className="mt-2 text-muted-foreground">
                You are in for this amazing mock up (Disclaimer: this design is not mine, and is used only for educational purpose)
              </p>
            </div>
            
            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {isLoading ? (
                Array(4).fill(0).map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-5">
                      <div className="flex items-center">
                        <Skeleton className="h-12 w-12 rounded-md" />
                        <div className="ml-5 w-full">
                          <Skeleton className="h-4 w-24 mb-2" />
                          <Skeleton className="h-6 w-12" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : error ? (
                <Card className="col-span-full">
                  <CardContent className="p-5 text-center text-red-500">
                    Error loading dashboard data
                  </CardContent>
                </Card>
              ) : (
                <>
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-primary bg-opacity-20 rounded-md p-3">
                          <ChartBar className="text-primary h-5 w-5" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <p className="text-sm font-medium text-muted-foreground truncate">Rank Improvement</p>
                          <p className="text-lg font-medium text-foreground">{data?.stats.rankImprovement}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-green-500 bg-opacity-20 rounded-md p-3">
                          <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <p className="text-sm font-medium text-muted-foreground truncate">Visibility Score</p>
                          <p className="text-lg font-medium text-foreground">{data?.stats.visibilityScore}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-blue-500 bg-opacity-20 rounded-md p-3">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <p className="text-sm font-medium text-muted-foreground truncate">Backlinks</p>
                          <p className="text-lg font-medium text-foreground">{data?.stats.backlinks}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-yellow-500 bg-opacity-20 rounded-md p-3">
                          <Search className="h-5 w-5 text-yellow-500" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <p className="text-sm font-medium text-muted-foreground truncate">Keywords Tracked</p>
                          <p className="text-lg font-medium text-foreground">{data?.stats.keywordsTracked}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
            
            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Performance Chart */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-lg font-medium text-foreground mb-4">Performance Overview</h2>
                    {isLoading ? (
                      <Skeleton className="h-64 w-full" />
                    ) : (
                      <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Performance chart visualization would appear here</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                {/* Keywords Table */}
                <Card className="overflow-hidden">
                  <div className="px-6 py-5 border-b">
                    <h2 className="text-lg font-medium text-foreground">Top Performing Keywords</h2>
                  </div>
                  {isLoading ? (
                    <CardContent className="p-0">
                      <div className="p-6">
                        <Skeleton className="h-48 w-full" />
                      </div>
                    </CardContent>
                  ) : error ? (
                    <CardContent className="p-6">
                      <p className="text-center text-red-500">Error loading keyword data</p>
                    </CardContent>
                  ) : (
                    <KeywordTable keywords={data?.keywords || []} />
                  )}
                </Card>
              </div>
              
              {/* Right Column */}
              <div className="space-y-8">
                {/* Notifications */}
                <Card className="overflow-hidden">
                  <div className="px-6 py-5 border-b">
                    <h2 className="text-lg font-medium text-foreground">Recent Notifications</h2>
                  </div>
                  {isLoading ? (
                    <CardContent className="p-0">
                      {Array(3).fill(0).map((_, i) => (
                        <div key={i} className="px-6 py-4 border-b last:border-b-0">
                          <div className="flex items-start">
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <div className="ml-3 w-full">
                              <Skeleton className="h-4 w-40 mb-2" />
                              <Skeleton className="h-3 w-full mb-1" />
                              <Skeleton className="h-3 w-20" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  ) : error ? (
                    <CardContent className="p-6">
                      <p className="text-center text-red-500">Error loading notifications</p>
                    </CardContent>
                  ) : (
                    <div className="divide-y">
                      {data?.notifications.map((notification, index) => (
                        <div key={index} className="px-6 py-4">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              {getNotificationIcon(notification.type)}
                            </div>
                            <div className="ml-3 w-0 flex-1">
                              <p className="text-sm font-medium text-foreground">{notification.title}</p>
                              <p className="text-sm text-muted-foreground">{notification.message}</p>
                              <p className="mt-1 text-xs text-gray-400">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
                
                {/* Quick Actions */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-lg font-medium text-foreground mb-4">Quick Actions</h2>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-between bg-[#FFEDFA] dark:bg-gray-700 hover:bg-opacity-75 group">
                        <div className="flex items-center">
                          <Search className="mr-3 h-4 w-4 text-primary" />
                          Run keyword analysis
                        </div>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between bg-[#FFEDFA] dark:bg-gray-700 hover:bg-opacity-75 group">
                        <div className="flex items-center">
                          <Copy className="mr-3 h-4 w-4 text-primary" />
                          Generate content ideas
                        </div>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between bg-[#FFEDFA] dark:bg-gray-700 hover:bg-opacity-75 group">
                        <div className="flex items-center">
                          <ChartBar className="mr-3 h-4 w-4 text-primary" />
                          View detailed reports
                        </div>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
