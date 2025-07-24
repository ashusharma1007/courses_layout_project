import { BookOpen, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function Placeholder({ 
  title, 
  description, 
  icon = <BookOpen className="w-12 h-12 text-blue-600" />
}: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  LearnHub
                </span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Explore</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Business</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">Log In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                Join for Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <Card className="max-w-lg w-full bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 p-4 bg-blue-50 rounded-full w-fit">
              {icon}
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
              {title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              This page is under development. Continue prompting to help us build out this section of the platform!
            </p>
            <div className="space-y-3">
              <Link to="/">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button variant="outline" className="w-full">
                Request This Feature
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
