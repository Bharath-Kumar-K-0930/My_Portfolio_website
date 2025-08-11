import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  Calendar,
  Award,
  Code,
  Database,
  Globe,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Filter,
  User,
  BookOpen,
  Briefcase,
  MessageCircle,
  Home,
  Star,
  Zap,
  Cpu,
  Server,
  Layers,
  Terminal,
  Palette,
  Shield,
  Rocket,
  Brain,
  Eye,
  Heart,
  Coffee,
  Target,
  TrendingUp,
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  MousePointer,
  ArrowRight,
  CheckCircle,
  Circle
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubLink?: string;
  liveLink?: string;
  details: string;
  featured?: boolean;
}

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}

interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  type: 'education' | 'achievement';
  icon: React.ReactNode;
}

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  avatar: string;
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Enhanced sample data with more projects
  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered E-Commerce Platform",
      description: "Next-gen shopping experience with ML recommendations",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "TensorFlow", "MongoDB", "Stripe", "AWS"],
      category: "web",
      githubLink: "#",
      liveLink: "#",
      details: "A revolutionary e-commerce platform powered by artificial intelligence, featuring personalized product recommendations, dynamic pricing, and advanced analytics dashboard.",
      featured: true
    },
    {
      id: 2,
      title: "Neural Network Mobile App",
      description: "Cross-platform AI assistant with voice recognition",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Python", "TensorFlow", "Firebase", "OpenAI"],
      category: "mobile",
      githubLink: "#",
      details: "Intelligent mobile assistant leveraging neural networks for natural language processing, voice recognition, and contextual task automation.",
      featured: true
    },
    {
      id: 3,
      title: "Quantum Data Analytics Suite",
      description: "Big data visualization with quantum computing integration",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Qiskit", "D3.js", "PostgreSQL", "Docker", "Kubernetes"],
      category: "data",
      githubLink: "#",
      details: "Advanced analytics platform combining classical and quantum computing for unprecedented data processing capabilities and real-time insights.",
      featured: true
    },
    {
      id: 4,
      title: "Cybersecurity AI Guardian",
      description: "ML-powered threat detection and prevention system",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TensorFlow", "Elasticsearch", "Kibana", "Docker"],
      category: "ai",
      githubLink: "#",
      details: "Autonomous cybersecurity system using machine learning to detect, analyze, and neutralize threats in real-time with 99.7% accuracy.",
      featured: false
    },
    {
      id: 5,
      title: "DeFi Trading Protocol",
      description: "Decentralized finance platform with automated trading",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      technologies: ["Solidity", "React", "Web3", "Ethereum", "Hardhat", "IPFS"],
      category: "blockchain",
      githubLink: "#",
      details: "Revolutionary DeFi protocol enabling automated trading strategies, yield farming, and liquidity provision with advanced smart contracts.",
      featured: false
    },
    {
      id: 6,
      title: "Smart City IoT Network",
      description: "Comprehensive urban monitoring and automation system",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
      technologies: ["Arduino", "Raspberry Pi", "React", "MQTT", "InfluxDB", "Grafana"],
      category: "iot",
      githubLink: "#",
      details: "Integrated IoT ecosystem for smart city management including traffic optimization, environmental monitoring, and energy management.",
      featured: false
    },
    {
      id: 7,
      title: "AR/VR Learning Platform",
      description: "Immersive educational experiences with spatial computing",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?auto=format&fit=crop&w=800&q=80",
      technologies: ["Unity", "C#", "ARCore", "ARKit", "WebXR", "Three.js"],
      category: "ar",
      githubLink: "#",
      details: "Next-generation learning platform combining augmented and virtual reality for immersive educational experiences across multiple disciplines.",
      featured: true
    },
    {
      id: 8,
      title: "Quantum Cryptography Suite",
      description: "Unbreakable encryption using quantum mechanics",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Qiskit", "Cryptography", "FastAPI", "Redis"],
      category: "quantum",
      githubLink: "#",
      details: "Advanced cryptographic system leveraging quantum key distribution and quantum-resistant algorithms for ultimate security.",
      featured: false
    }
  ];

  const skills: Skill[] = [
    { 
      name: "JavaScript/TypeScript", 
      level: 95, 
      category: "Frontend", 
      icon: <Code className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
      glowColor: "shadow-yellow-500/50"
    },
    { 
      name: "React/Next.js", 
      level: 92, 
      category: "Frontend", 
      icon: <Globe className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-500",
      glowColor: "shadow-cyan-500/50"
    },
    { 
      name: "Python/Django", 
      level: 90, 
      category: "Backend", 
      icon: <Server className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
      glowColor: "shadow-green-500/50"
    },
    { 
      name: "Node.js/Express", 
      level: 88, 
      category: "Backend", 
      icon: <Terminal className="w-6 h-6" />,
      color: "from-lime-400 to-green-500",
      glowColor: "shadow-lime-500/50"
    },
    { 
      name: "AI/Machine Learning", 
      level: 85, 
      category: "AI/ML", 
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
      glowColor: "shadow-purple-500/50"
    },
    { 
      name: "Cloud Computing", 
      level: 87, 
      category: "DevOps", 
      icon: <Layers className="w-6 h-6" />,
      color: "from-blue-400 to-indigo-500",
      glowColor: "shadow-blue-500/50"
    },
    { 
      name: "Database Systems", 
      level: 89, 
      category: "Database", 
      icon: <Database className="w-6 h-6" />,
      color: "from-red-400 to-rose-500",
      glowColor: "shadow-red-500/50"
    },
    { 
      name: "Mobile Development", 
      level: 83, 
      category: "Mobile", 
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-teal-400 to-cyan-500",
      glowColor: "shadow-teal-500/50"
    },
    { 
      name: "Blockchain/Web3", 
      level: 78, 
      category: "Emerging Tech", 
      icon: <Shield className="w-6 h-6" />,
      color: "from-amber-400 to-yellow-500",
      glowColor: "shadow-amber-500/50"
    },
    { 
      name: "UI/UX Design", 
      level: 81, 
      category: "Design", 
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-400 to-purple-500",
      glowColor: "shadow-pink-500/50"
    },
    { 
      name: "Quantum Computing", 
      level: 72, 
      category: "Emerging Tech", 
      icon: <Cpu className="w-6 h-6" />,
      color: "from-indigo-400 to-purple-500",
      glowColor: "shadow-indigo-500/50"
    },
    { 
      name: "Cybersecurity", 
      level: 80, 
      category: "Security", 
      icon: <Shield className="w-6 h-6" />,
      color: "from-orange-400 to-red-500",
      glowColor: "shadow-orange-500/50"
    }
  ];

  const timeline: TimelineItem[] = [
    {
      year: "2024",
      title: "Master of Computer Applications",
      institution: "Indian Institute of Technology",
      description: "Specializing in AI, Machine Learning, and Advanced Software Engineering",
      type: "education",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "International AI Hackathon Winner",
      institution: "Global Tech Innovation Challenge",
      description: "1st place for quantum-enhanced machine learning healthcare solution",
      type: "achievement",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "Research Publication",
      institution: "IEEE Computer Society",
      description: "Published paper on 'Quantum Machine Learning for Cybersecurity Applications'",
      type: "achievement",
      icon: <Star className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "Bachelor of Computer Applications",
      institution: "National Institute of Technology",
      description: "Graduated Summa Cum Laude with CGPA: 9.2/10 - Top 1% of class",
      type: "education",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "Google Summer of Code",
      institution: "Open Source Contributor",
      description: "Contributed to TensorFlow Quantum project - quantum machine learning algorithms",
      type: "achievement",
      icon: <Code className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "Senior Full Stack Developer Intern",
      institution: "Microsoft Research Lab",
      description: "Led development of AI-powered cloud solutions using Azure and .NET",
      type: "achievement",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "The future belongs to those who learn more skills and combine them in creative ways.",
      author: "Robert Greene",
      position: "Author & Strategist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      quote: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      position: "Co-founder, Apple Inc.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      quote: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      position: "Computer Scientist",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      quote: "Code is poetry written in logic, dreams built with algorithms.",
      author: "Alex Johnson",
      position: "MCA Student & Developer",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length, isPlaying]);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = ['all', 'web', 'mobile', 'data', 'ai', 'blockchain', 'iot', 'ar', 'quantum'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-black text-white transition-all duration-500 relative overflow-x-hidden">
        
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        {/* Cursor Follower */}
        <div 
          className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
          }}
        ></div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-40 border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                <Zap className="w-8 h-8 inline-block mr-2 text-cyan-400" />
                TechFolio
              </div>
              
              <div className="hidden md:flex space-x-8">
                {[
                  { id: 'hero', label: 'Home', icon: <Home className="w-4 h-4" /> },
                  { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
                  { id: 'projects', label: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
                  { id: 'resume', label: 'Resume', icon: <BookOpen className="w-4 h-4" /> },
                  { id: 'testimonials', label: 'Quotes', icon: <MessageCircle className="w-4 h-4" /> },
                  { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 group"
                  >
                    <span className="group-hover:animate-pulse">{item.icon}</span>
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-cyan-500/30"
                >
                  {darkMode ? 
                    <Sun className="w-5 h-5 text-yellow-400 animate-spin" /> : 
                    <Moon className="w-5 h-5 text-blue-400" />
                  }
                </button>
                
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 border border-cyan-500/30"
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">
              <div className="px-4 py-2 space-y-2">
                {[
                  { id: 'hero', label: 'Home', icon: <Home className="w-4 h-4" /> },
                  { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
                  { id: 'projects', label: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
                  { id: 'resume', label: 'Resume', icon: <BookOpen className="w-4 h-4" /> },
                  { id: 'testimonials', label: 'Quotes', icon: <MessageCircle className="w-4 h-4" /> },
                  { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-3 w-full text-left py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 transition-all duration-300 text-gray-300 hover:text-cyan-400"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1920&q=80')",
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-cyan-900/30 to-purple-900/50"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-float">
            <Code className="w-12 h-12 text-cyan-400/30" />
          </div>
          <div className="absolute top-40 right-20 animate-float animation-delay-1000">
            <Database className="w-10 h-10 text-purple-400/30" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float animation-delay-2000">
            <Brain className="w-14 h-14 text-green-400/30" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <div className="animate-fade-in-up">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                    alt="Alex Johnson"
                    className="relative w-32 h-32 rounded-full border-4 border-gradient-to-r from-cyan-400 to-purple-600 shadow-2xl"
                  />
                </div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Alex Johnson
              </h1>
              
              <div className="text-2xl md:text-4xl mb-8 text-gray-200 font-light flex items-center justify-center space-x-4">
                <Sparkles className="w-8 h-8 text-cyan-400 animate-spin" />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  MCA Student & AI Innovator
                </span>
                <Rocket className="w-8 h-8 text-purple-400 animate-bounce" />
              </div>
              
              <p className="text-xl mb-10 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Passionate about creating revolutionary solutions through cutting-edge technology. 
                Specializing in <span className="text-cyan-400 font-semibold">Artificial Intelligence</span>, 
                <span className="text-purple-400 font-semibold"> Quantum Computing</span>, and 
                <span className="text-green-400 font-semibold"> Next-Gen Web Development</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-300">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-bold hover:from-cyan-500 hover:to-blue-500 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 border border-cyan-400/30"
              >
                <span className="flex items-center justify-center space-x-3">
                  <Eye className="w-6 h-6 group-hover:animate-pulse" />
                  <span>Explore My Universe</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group px-10 py-5 bg-transparent border-2 border-purple-500 text-purple-400 rounded-full font-bold hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
                <span className="flex items-center justify-center space-x-3">
                  <Download className="w-6 h-6 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                  <Zap className="w-6 h-6 group-hover:animate-pulse" />
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up animation-delay-500">
              {[
                { number: "50+", label: "Projects Built", icon: <Briefcase className="w-6 h-6" /> },
                { number: "15+", label: "Technologies", icon: <Code className="w-6 h-6" /> },
                { number: "5+", label: "Awards Won", icon: <Award className="w-6 h-6" /> },
                { number: "99%", label: "Success Rate", icon: <Target className="w-6 h-6" /> }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                    <div className="text-cyan-400 mb-2 flex justify-center group-hover:animate-pulse">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-2 h-4 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" 
            }}
          ></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                A passionate technologist with an insatiable curiosity for innovation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
                    alt="Alex Johnson"
                    className="relative w-80 h-80 rounded-full mx-auto object-cover shadow-2xl border-4 border-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <Heart className="w-8 h-8 text-red-500 mr-3 animate-pulse" />
                    Hello! I'm Alex Johnson
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    Currently pursuing my Master's in Computer Applications with a focus on cutting-edge technologies 
                    like Artificial Intelligence, Quantum Computing, and Advanced Software Engineering. 
                    I'm passionate about creating digital solutions that push the boundaries of what's possible.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source 
                    projects, or mentoring fellow students. I believe in the power of technology to solve humanity's 
                    greatest challenges.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: "50+", label: "Projects", color: "from-cyan-500 to-blue-500", icon: <Briefcase className="w-6 h-6" /> },
                    { number: "5+", label: "Years Learning", color: "from-green-500 to-emerald-500", icon: <TrendingUp className="w-6 h-6" /> },
                    { number: "15+", label: "Technologies", color: "from-purple-500 to-pink-500", icon: <Code className="w-6 h-6" /> }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className={`bg-gradient-to-r ${stat.color} p-6 rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300 border border-white/10`}>
                        <div className="text-white mb-2 flex justify-center group-hover:animate-pulse">
                          {stat.icon}
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Skills Section */}
            <div className="mb-20">
              <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                <Zap className="w-10 h-10 inline-block mr-3 text-cyan-400" />
                Technical Arsenal
                <Sparkles className="w-10 h-10 inline-block ml-3 text-purple-400" />
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="group bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-lg p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-4 bg-gradient-to-r ${skill.color} rounded-2xl text-white shadow-2xl ${skill.glowColor} group-hover:animate-pulse`}>
                          {skill.icon}
                        </div>
                        <div>
                          <span className="font-bold text-xl text-white">{skill.name}</span>
                          <div className="text-sm text-gray-400">{skill.category}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-gray-500">Beginner</span>
                        <span className="text-xs text-gray-500">Expert</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1920&q=80')" 
            }}
          ></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                <Rocket className="w-16 h-16 inline-block mr-4 text-green-400" />
                Featured Projects
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
                A showcase of innovation, creativity, and technical excellence
              </p>

              {/* Enhanced Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`group px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-110 ${
                      activeFilter === category
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-2xl shadow-cyan-500/50 border border-cyan-400'
                        : 'bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 hover:from-cyan-600/20 hover:to-blue-600/20 hover:text-cyan-400 border border-gray-600 hover:border-cyan-500'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <Filter className="w-4 h-4 group-hover:animate-pulse" />
                      <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <Star className="w-3 h-3" />
                        <span>FEATURED</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex space-x-2">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-cyan-600 transition-colors duration-300"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-purple-600 transition-colors duration-300"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30 hover:border-cyan-400 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-6 rounded-2xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 font-bold shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-5 h-5" />
                      <span>Explore Project</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume & Timeline Section */}
        <section id="resume" className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" 
            }}
          ></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                <BookOpen className="w-16 h-16 inline-block mr-4 text-purple-400" />
                Journey & Achievements
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
                My path through education, innovation, and professional growth
              </p>
              
              <button className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full font-bold hover:from-purple-500 hover:to-pink-500 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 border border-purple-400/30">
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                <span>Download Full Resume</span>
                <Zap className="w-6 h-6 group-hover:animate-pulse" />
              </button>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Enhanced Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 rounded-full shadow-2xl shadow-purple-500/50"></div>

                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center mb-16 ${
                      index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Enhanced Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black shadow-2xl shadow-purple-500/50 z-10 flex items-center justify-center">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-8 rounded-3xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 group">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`p-2 rounded-lg ${
                            item.type === 'education' 
                              ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                              : 'bg-gradient-to-r from-yellow-500 to-orange-500'
                          }`}>
                            {item.type === 'education' ? (
                              <BookOpen className="w-5 h-5 text-white" />
                            ) : (
                              <Award className="w-5 h-5 text-white" />
                            )}
                          </div>
                          <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-purple-400 font-bold mb-4 text-lg">
                          {item.institution}
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials/Quotes Section */}
        <section id="testimonials" className="relative py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" 
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/80 to-pink-900/90 backdrop-blur-sm"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                <MessageCircle className="w-16 h-16 inline-block mr-4 text-cyan-400" />
                Inspiration & Wisdom
              </h2>
              <p className="text-2xl text-gray-200 max-w-4xl mx-auto">
                Words that fuel innovation and drive excellence
              </p>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-12 md:p-16 border border-white/20 shadow-2xl">
                <div className="text-center">
                  <div className="mb-8">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].author}
                      className="w-24 h-24 rounded-full mx-auto border-4 border-white/30 shadow-2xl"
                    />
                  </div>
                  
                  <div className="text-8xl text-white/20 mb-6 font-serif">"</div>
                  <blockquote className="text-2xl md:text-3xl text-white font-light italic mb-8 leading-relaxed">
                    {testimonials[currentTestimonial].quote}
                  </blockquote>
                  <div className="text-white/90">
                    <p className="font-bold text-xl mb-1">{testimonials[currentTestimonial].author}</p>
                    <p className="text-white/70">{testimonials[currentTestimonial].position}</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Navigation */}
              <div className="flex justify-center mt-12 space-x-6">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white hover:bg-white/30 transform hover:scale-110 transition-all duration-300 shadow-2xl"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white hover:from-cyan-400 hover:to-blue-400 transform hover:scale-110 transition-all duration-300 shadow-2xl"
                >
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                </button>
                
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white hover:bg-white/30 transform hover:scale-110 transition-all duration-300 shadow-2xl"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>

              {/* Enhanced Dots indicator */}
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-125'
                        : 'bg-white/40 hover:bg-white/60 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1920&q=80')" 
            }}
          ></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                <Mail className="w-16 h-16 inline-block mr-4 text-cyan-400" />
                Let's Connect
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                Ready to build the future together? Let's create something extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Enhanced Contact Info */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-10 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <Sparkles className="w-8 h-8 text-cyan-400 mr-3 animate-pulse" />
                    Get In Touch
                  </h3>
                  <div className="space-y-8">
                    {[
                      { 
                        icon: <Mail className="w-8 h-8" />, 
                        label: "Email", 
                        value: "alex.johnson@email.com",
                        color: "from-blue-500 to-cyan-500",
                        hoverColor: "hover:text-cyan-400"
                      },
                      { 
                        icon: <Phone className="w-8 h-8" />, 
                        label: "Phone", 
                        value: "+1 (555) 123-4567",
                        color: "from-green-500 to-emerald-500",
                        hoverColor: "hover:text-green-400"
                      },
                      { 
                        icon: <MapPin className="w-8 h-8" />, 
                        label: "Location", 
                        value: "San Francisco, CA",
                        color: "from-purple-500 to-pink-500",
                        hoverColor: "hover:text-purple-400"
                      }
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center space-x-6 group">
                        <div className={`p-4 bg-gradient-to-r ${contact.color} rounded-2xl text-white shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                          {contact.icon}
                        </div>
                        <div>
                          <p className="font-bold text-white text-lg mb-1">{contact.label}</p>
                          <p className={`text-gray-300 ${contact.hoverColor} transition-colors duration-300 text-lg`}>
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-10 rounded-3xl border border-cyan-500/20">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Heart className="w-6 h-6 text-red-500 mr-3 animate-pulse" />
                    Follow My Journey
                  </h4>
                  <div className="flex space-x-6">
                    {[
                      { icon: <Github className="w-8 h-8" />, href: "#", color: "hover:text-gray-400", bg: "hover:bg-gray-700" },
                      { icon: <Linkedin className="w-8 h-8" />, href: "#", color: "hover:text-blue-400", bg: "hover:bg-blue-600" },
                      { icon: <Mail className="w-8 h-8" />, href: "#", color: "hover:text-green-400", bg: "hover:bg-green-600" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-4 bg-gray-800 rounded-2xl text-white ${social.color} ${social.bg} transform hover:scale-110 transition-all duration-300 shadow-2xl`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Contact Form */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-10 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {['firstName', 'lastName'].map((field) => (
                      <div key={field} className="relative group">
                        <input
                          type="text"
                          id={field}
                          className="peer w-full px-6 py-4 border-2 border-gray-600 rounded-2xl bg-black/50 backdrop-blur-sm focus:border-cyan-500 focus:outline-none transition-all duration-300 text-white text-lg placeholder-transparent"
                          placeholder=" "
                        />
                        <label
                          htmlFor={field}
                          className="absolute left-6 -top-3 bg-gray-900 px-2 text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-400"
                        >
                          {field === 'firstName' ? 'First Name' : 'Last Name'}
                        </label>
                      </div>
                    ))}
                  </div>

                  {['email', 'subject'].map((field) => (
                    <div key={field} className="relative group">
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        className="peer w-full px-6 py-4 border-2 border-gray-600 rounded-2xl bg-black/50 backdrop-blur-sm focus:border-cyan-500 focus:outline-none transition-all duration-300 text-white text-lg placeholder-transparent"
                        placeholder=" "
                      />
                      <label
                        htmlFor={field}
                        className="absolute left-6 -top-3 bg-gray-900 px-2 text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-400"
                      >
                        {field === 'email' ? 'Email Address' : 'Subject'}
                      </label>
                    </div>
                  ))}

                  <div className="relative group">
                    <textarea
                      id="message"
                      rows={6}
                      className="peer w-full px-6 py-4 border-2 border-gray-600 rounded-2xl bg-black/50 backdrop-blur-sm focus:border-cyan-500 focus:outline-none transition-all duration-300 text-white text-lg resize-none placeholder-transparent"
                      placeholder=" "
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-6 -top-3 bg-gray-900 px-2 text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-400"
                    >
                      Your Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-5 px-8 rounded-2xl font-bold hover:from-cyan-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 text-lg flex items-center justify-center space-x-3"
                  >
                    <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                    <span>Launch Message</span>
                    <Sparkles className="w-6 h-6 group-hover:animate-pulse" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="relative bg-black border-t border-cyan-500/20">
          {/* Animated wavy divider */}
          <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
            <svg
              className="w-full h-full text-gray-900"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 flex items-center justify-center md:justify-start">
                  <Zap className="w-10 h-10 text-cyan-400 mr-3 animate-pulse" />
                  TechFolio
                </div>
                <p className="text-gray-400 text-lg max-w-md">
                  Building the future, one line of code at a time. 
                  <br />
                  <span className="text-cyan-400">Innovation • Excellence • Impact</span>
                </p>
              </div>

              <div className="flex space-x-6">
                {[
                  { icon: <Github className="w-8 h-8" />, href: "#", color: "hover:text-gray-400", glow: "hover:shadow-gray-500/50" },
                  { icon: <Linkedin className="w-8 h-8" />, href: "#", color: "hover:text-blue-400", glow: "hover:shadow-blue-500/50" },
                  { icon: <Mail className="w-8 h-8" />, href: "#", color: "hover:text-green-400", glow: "hover:shadow-green-500/50" },
                  { icon: <Coffee className="w-8 h-8" />, href: "#", color: "hover:text-yellow-400", glow: "hover:shadow-yellow-500/50" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl text-white ${social.color} transform hover:scale-110 transition-all duration-300 shadow-2xl ${social.glow} border border-gray-600 hover:border-cyan-500`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400 text-lg flex items-center justify-center space-x-2">
                <span>&copy; 2024 Alex Johnson. All rights reserved.</span>
                <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                <span>Made with passion and lots of</span>
                <Coffee className="w-5 h-5 text-yellow-500 animate-bounce" />
              </p>
              <p className="text-gray-500 mt-2">
                Powered by cutting-edge technology and endless curiosity
              </p>
            </div>
          </div>
        </footer>

        {/* Enhanced Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-3xl"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
                >
                  <X className="w-8 h-8" />
                </button>
                {selectedProject.featured && (
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span>FEATURED PROJECT</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-10">
                <h3 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {selectedProject.details}
                </p>

                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-4 text-white flex items-center">
                    <Code className="w-6 h-6 text-cyan-400 mr-3" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      className="flex items-center justify-center space-x-3 bg-gray-900 hover:bg-gray-800 text-white py-4 px-8 rounded-2xl transition-all duration-300 font-bold shadow-2xl hover:scale-105 border border-gray-700 hover:border-gray-600"
                    >
                      <Github className="w-6 h-6" />
                      <span>View Source Code</span>
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      className="flex items-center justify-center space-x-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-4 px-8 rounded-2xl transition-all duration-300 font-bold shadow-2xl hover:scale-105"
                    >
                      <ExternalLink className="w-6 h-6" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}

export default App;