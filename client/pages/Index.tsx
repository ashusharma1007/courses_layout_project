import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Search, Play, Star, Users, Clock, Award, ChevronRight, BookOpen, Code, Palette, Brain, Sparkles, TrendingUp, Globe, Zap, Quote, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroInView = useInView(heroRef, { once: true });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featuredCourses = [
    {
      id: 1,
      title: "Machine Learning Specialization",
      instructor: "Andrew Ng",
      rating: 4.9,
      students: "4.2M",
      duration: "11 weeks",
      level: "Beginner",
      price: "$49/month",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      category: "AI/ML",
      icon: Brain,
      skills: ["Python", "TensorFlow", "Neural Networks"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      instructor: "Meta",
      rating: 4.7,
      students: "2.8M",
      duration: "8 months",
      level: "Beginner",
      price: "$39/month",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      category: "Programming",
      icon: Code,
      skills: ["React", "Node.js", "MongoDB"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "UX/UI Design Fundamentals",
      instructor: "Google",
      rating: 4.8,
      students: "1.9M",
      duration: "6 months",
      level: "Beginner",
      price: "$45/month",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop",
      category: "Design",
      icon: Palette,
      skills: ["Figma", "Prototyping", "User Research"],
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Data Science with Python",
      instructor: "IBM",
      rating: 4.6,
      students: "3.1M",
      duration: "10 months",
      level: "Intermediate",
      price: "$55/month",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Data Science",
      icon: BookOpen,
      skills: ["Python", "Pandas", "Visualization"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const categories = [
    { name: "Business", count: "2000+ courses", icon: "💼", delay: 0, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format" },
    { name: "Technology", count: "1500+ courses", icon: "💻", delay: 0.1, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop&auto=format" },
    { name: "Data Science", count: "800+ courses", icon: "📊", delay: 0.2, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&auto=format" },
    { name: "Arts & Design", count: "600+ courses", icon: "🎨", delay: 0.3, image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=100&h=100&fit=crop&auto=format" },
    { name: "Language", count: "400+ courses", icon: "🗣️", delay: 0.4, image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop&auto=format" },
    { name: "Health", count: "300+ courses", icon: "🏥", delay: 0.5, image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop&auto=format" }
  ];

  const stats = [
    { number: "92M+", label: "Learners", icon: Users },
    { number: "5000+", label: "Courses", icon: BookOpen },
    { number: "100+", label: "Universities", icon: Globe },
    { number: "150+", label: "Countries", icon: TrendingUp }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&auto=format",
      quote: "LearnHub transformed my career. The practical projects helped me land my dream job at Google.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Data Scientist at Netflix",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
      quote: "The machine learning specialization gave me the skills to transition into data science.",
      rating: 5
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "UX Designer at Airbnb",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
      quote: "Amazing courses with real-world applications. I'm now designing for millions of users.",
      rating: 5
    }
  ];

  const partnerLogos = [
    { name: "Stanford", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&auto=format" },
    { name: "MIT", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=60&fit=crop&auto=format" },
    { name: "Harvard", logo: "https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?w=120&h=60&fit=crop&auto=format" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=60&fit=crop&auto=format" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=120&h=60&fit=crop&auto=format" },
    { name: "IBM", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const courseVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: Math.random() * 0.5
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  if (isLoading) {
    return (
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h2 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading LearnHub...
          </motion.h2>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background Particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: mousePosition.x + (Math.random() - 0.5) * 100,
                y: mousePosition.y + (Math.random() - 0.5) * 100,
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
                delay: i * 0.1
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <motion.nav 
          className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-40"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div 
                className="flex items-center space-x-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="flex items-center space-x-2" variants={itemVariants}>
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BookOpen className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    LearnHub
                  </span>
                </motion.div>
                <div className="hidden md:flex space-x-8">
                  {["Explore", "Skills", "Business"].map((item, index) => (
                    <motion.a
                      key={item}
                      href="#"
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants}>
                  <Button 
                    variant="ghost" 
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Log In
                  </Button>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join for Free
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          className="relative overflow-hidden py-20 lg:py-32"
          style={{ y, opacity }}
        >
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&auto=format"
              alt="Learning environment"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-purple-50/80"></div>
          </div>

          {/* Animated Background Elements */}
          <motion.div 
            className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl z-10"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl z-10"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Floating Learning Icons */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <motion.div
              className="absolute top-20 right-20"
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-16 h-16 bg-white/90 rounded-full shadow-lg flex items-center justify-center">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-32 left-20"
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              <div className="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
            </motion.div>
            <motion.div
              className="absolute top-40 left-1/4"
              animate={{ y: [-5, 15, -5], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            >
              <div className="w-14 h-14 bg-white/90 rounded-full shadow-lg flex items-center justify-center">
                <Palette className="w-7 h-7 text-green-600" />
              </div>
            </motion.div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <motion.div 
                className="text-left lg:text-left"
                variants={containerVariants}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
              >
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
                  variants={itemVariants}
                >
                  Learn Without{" "}
                  <motion.span 
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ backgroundSize: "200%" }}
                  >
                    Limits
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-gray-600 mb-8"
                  variants={itemVariants}
                >
                  Access world-class education from top universities and industry leaders. 
                  Build job-relevant skills with hands-on projects and expert instruction.
                </motion.p>

                {/* Features List */}
                <motion.div 
                  className="mb-8 space-y-3"
                  variants={containerVariants}
                >
                  {[
                    "Learn from industry experts",
                    "Hands-on projects and assessments",
                    "Certificates from top universities",
                    "Career guidance and support"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      variants={itemVariants}
                    >
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Enhanced Search Bar */}
                <motion.div 
                  className="mb-8"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="What do you want to learn?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-32 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                    />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg">
                        <Zap className="w-4 h-4 mr-2" />
                        Search
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3">
                      Start Learning Free
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Demo
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Column - Hero Image */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <motion.img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop&auto=format"
                    alt="Students learning together"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
                  
                  {/* Floating Stats Cards */}
                  <motion.div
                    className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">92% Success Rate</div>
                        <div className="text-xs text-gray-500">Job placement</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">50K+ Students</div>
                        <div className="text-xs text-gray-500">This month</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="group cursor-pointer text-center"
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-2"
                      whileHover={{ scale: 1.2 }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* Partner Logos */}
        <motion.section 
          className="py-12 bg-white/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 font-medium">Trusted by top institutions worldwide</p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {partnerLogos.map((partner, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto mx-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Categories */}
        <motion.section 
          className="py-16 bg-white/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Explore by Category
            </motion.h2>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  custom={index}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white/80 backdrop-blur-sm border-0 h-full overflow-hidden">
                    <div className="relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-24 object-cover opacity-20 group-hover:opacity-40 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                    </div>
                    <CardContent className="p-6 text-center relative -mt-12">
                      <motion.div 
                        className="text-4xl mb-3 relative z-10"
                        whileHover={{ scale: 1.3, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600">{category.count}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Courses */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Courses
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Start your journey with our most popular courses, taught by industry experts
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredCourses.map((course, index) => {
                const IconComponent = course.icon;
                return (
                  <motion.div
                    key={course.id}
                    variants={courseVariants}
                    whileHover="hover"
                    onMouseEnter={() => setHoveredCourse(course.id)}
                    onMouseLeave={() => setHoveredCourse(null)}
                    layout
                  >
                    <Card className="group overflow-hidden bg-white/90 backdrop-blur-sm border-0 h-full shadow-lg">
                      <motion.div 
                        className="relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-48 object-cover"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Button 
                            size="sm" 
                            className="bg-white text-black hover:bg-gray-100"
                          >
                            <Play className="w-4 h-4 mr-1" /> Preview
                          </Button>
                        </motion.div>
                        <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${course.color} text-white border-0`}>
                          {course.category}
                        </Badge>
                      </motion.div>
                      
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </motion.div>
                          <motion.div 
                            className="flex items-center space-x-1"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{course.rating}</span>
                          </motion.div>
                        </div>
                        <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                          {course.title}
                        </CardTitle>
                        <CardDescription>
                          by {course.instructor}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <motion.div 
                            className="flex items-center space-x-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Users className="w-4 h-4" />
                            <span>{course.students}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center space-x-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </motion.div>
                        </div>

                        <motion.div 
                          className="flex flex-wrap gap-1 mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {course.skills.slice(0, 2).map((skill, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Badge variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                          {course.skills.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{course.skills.length - 2} more
                            </Badge>
                          )}
                        </motion.div>

                        <div className="flex items-center justify-between">
                          <motion.span 
                            className="text-lg font-bold text-gray-900"
                            whileHover={{ scale: 1.1 }}
                          >
                            {course.price}
                          </motion.span>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              size="sm" 
                              className={`transition-all duration-300 ${
                                hoveredCourse === course.id 
                                  ? `bg-gradient-to-r ${course.color} text-white shadow-lg` 
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              Enroll Now <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-gray-50 to-blue-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Students Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join thousands of successful learners who transformed their careers
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Quote className="w-6 h-6 text-blue-600 mr-2" />
                        <div className="flex text-yellow-400">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100,
                duration: 0.8 
              }}
              viewport={{ once: true }}
            >
              <Award className="w-16 h-16 text-white mx-auto mb-6" />
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Start Learning Today
            </motion.h2>
            
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join millions of learners and transform your career with industry-relevant skills
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                  Get Started Free
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                  Browse Courses
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="bg-gray-900 text-white py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Learn",
                  links: ["Courses", "Specializations", "Degrees", "Certificates"]
                },
                {
                  title: "For Business", 
                  links: ["Corporate Training", "Skill Assessments", "Learning Paths", "Analytics"]
                },
                {
                  title: "Support",
                  links: ["Help Center", "Contact Us", "Community", "Blog"]
                },
                {
                  title: "Company",
                  links: ["About", "Careers", "Press", "Investors"]
                }
              ].map((section, index) => (
                <motion.div key={section.title} variants={itemVariants}>
                  <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                  <ul className="space-y-2 text-gray-400">
                    {section.links.map((link, linkIndex) => (
                      <motion.li 
                        key={link}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + linkIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <motion.a 
                          href="#" 
                          className="hover:text-white transition-colors"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {link}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p>&copy; 2024 LearnHub. All rights reserved.</p>
            </motion.div>
          </div>
        </motion.footer>
      </motion.div>
    </AnimatePresence>
  );
}
