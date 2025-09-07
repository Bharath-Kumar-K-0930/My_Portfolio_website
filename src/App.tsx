import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Download, Mail, Phone, MapPin, Github, Linkedin, Twitter, 
  Code, Database, Globe, Smartphone, Brain, Zap, Shield, Cloud,
  Star, ExternalLink, Calendar, Award, GraduationCap, Briefcase,
  ChevronLeft, ChevronRight, Play, Pause, Sun, Moon, MousePointer2,
  Cpu, Server, Palette, Terminal, Layers, Rocket
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for cursor effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-play testimonials
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Skills data with enhanced categories and icons
  const skills = [
    { name: 'JavaScript', level: 95, category: 'Frontend', icon: Code, color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js', level: 92, category: 'Frontend', icon: Layers, color: 'from-blue-400 to-cyan-500' },
    { name: 'Node.js', level: 88, category: 'Backend', icon: Server, color: 'from-green-400 to-emerald-500' },
    { name: 'Python', level: 90, category: 'Backend', icon: Terminal, color: 'from-blue-500 to-indigo-600' },
    { name: 'MongoDB', level: 85, category: 'Database', icon: Database, color: 'from-green-500 to-teal-600' },
    { name: 'PostgreSQL', level: 82, category: 'Database', icon: Database, color: 'from-blue-600 to-purple-600' },
    { name: 'AWS', level: 78, category: 'Cloud', icon: Cloud, color: 'from-orange-400 to-red-500' },
    { name: 'Docker', level: 80, category: 'DevOps', icon: Cpu, color: 'from-blue-400 to-blue-600' },
    { name: 'Machine Learning', level: 75, category: 'AI/ML', icon: Brain, color: 'from-purple-400 to-pink-500' },
    { name: 'UI/UX Design', level: 85, category: 'Design', icon: Palette, color: 'from-pink-400 to-rose-500' },
    { name: 'Mobile Development', level: 80, category: 'Mobile', icon: Smartphone, color: 'from-indigo-400 to-purple-500' },
    { name: 'Cybersecurity', level: 72, category: 'Security', icon: Shield, color: 'from-red-400 to-pink-500' }
  ];

  // Enhanced projects data
  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-Commerce Platform',
      description: 'Full-stack e-commerce solution with AI-driven product recommendations and real-time analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow'],
      category: 'Full Stack',
      featured: true,
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      id: 2,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform built on Ethereum blockchain with smart contracts.',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      category: 'Blockchain',
      featured: false,
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'Modern chat app with real-time messaging, file sharing, and video calling capabilities.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Socket.io', 'Express', 'React', 'WebRTC'],
      category: 'Web App',
      featured: true,
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      id: 4,
      title: 'AR Shopping Experience',
      description: 'Augmented reality mobile app for virtual product try-ons and immersive shopping.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'ARKit', 'Three.js', 'Firebase'],
      category: 'Mobile',
      featured: false,
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      id: 5,
      title: 'Quantum Computing Simulator',
      description: 'Educational quantum computing simulator with visual qubit manipulation and algorithm demos.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Qiskit', 'Django', 'D3.js'],
      category: 'AI/ML',
      featured: true,
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      id: 6,
      title: 'Cloud Infrastructure Monitor',
      description: 'Comprehensive monitoring dashboard for multi-cloud infrastructure with predictive analytics.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Grafana'],
      category: 'DevOps',
      featured: false,
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      id: 7,
      title: 'Neural Network Visualizer',
      description: 'Interactive tool for visualizing and understanding deep learning neural network architectures.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['TensorFlow', 'D3.js', 'Python', 'Flask'],
      category: 'AI/ML',
      featured: false,
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      id: 8,
      title: 'Smart IoT Home System',
      description: 'Complete IoT ecosystem for smart home automation with voice control and mobile app.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'React Native'],
      category: 'IoT',
      featured: true,
      github: 'https://github.com',
      live: 'https://demo.com'
    }
  ];

  // Filter categories
  const categories = ['All', 'Full Stack', 'Mobile', 'AI/ML', 'Blockchain', 'Web App', 'DevOps', 'IoT', 'Featured'];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Senior Software Architect',
      company: 'TechCorp',
      content: 'Bharath demonstrates exceptional problem-solving skills and innovative thinking in complex software development projects.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Lead Developer',
      company: 'InnovateLab',
      content: 'Outstanding technical expertise combined with excellent communication skills. A valuable team player.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      company: 'Digital Solutions',
      content: 'Consistently delivers high-quality work on time. Great attention to detail and user experience.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    }
  ];

  // Education timeline
  const education = [
    {
      id: 1,
      degree: 'Master of Computer Applications (MCA)',
      institution: 'University of Technology',
      year: '2022-2024',
      description: 'Specialized in Software Engineering and AI/ML',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'State University',
      year: '2019-2022',
      description: 'Foundation in Computer Science and Programming',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      degree: 'Full Stack Development Certification',
      institution: 'Tech Academy',
      year: '2023',
      description: 'MERN Stack and Cloud Technologies',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // Filter projects
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : activeFilter === 'Featured'
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === activeFilter);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Cursor Follower */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: 'radial-gradient(circle, rgba(6,182,212,0.8) 0%, rgba(59,130,246,0.4) 50%, transparent 70%)',
          borderRadius: '50%',
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDarkMode ? 'border-cyan-500/20' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Bharath Kumar K
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 group ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-cyan-400 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/70' : 'bg-white/70'}`}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 ${isDarkMode ? 'bg-cyan-400' : 'bg-blue-500'} rounded-full animate-float opacity-60`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient neon-text">
                Bharath Kumar K
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-8 animation-delay-300 animate-fade-in-up">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                MCA Student & 
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                {' '}Full Stack Developer
              </span>
            </p>
            <p className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto animation-delay-500 animate-fade-in-up ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Passionate about creating innovative solutions with cutting-edge technologies. 
              Specializing in AI/ML, Web Development, and Cloud Computing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animation-delay-1000 animate-fade-in-up">
              <a
                href="/Bharath_Kumar_K_Resume (Templete-1).pdf"
                download
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 neon-glow"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="#contact"
                className={`group px-8 py-4 border-2 ${isDarkMode ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400' : 'border-blue-500 text-blue-500 hover:bg-blue-500'} hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105`}
              >
                <span className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Contact Me</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 ${isDarkMode ? 'border-cyan-400' : 'border-blue-500'} rounded-full flex justify-center`}>
            <div className={`w-1 h-3 ${isDarkMode ? 'bg-cyan-400' : 'bg-blue-500'} rounded-full mt-2 animate-pulse`}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Passionate MCA student with a strong foundation in computer science and a drive for innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-75"></div>
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Bharath Kumar K"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-30 animate-spin-slow"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} glass border ${isDarkMode ? 'border-cyan-500/20' : 'border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                  <span>Education</span>
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Currently pursuing Master of Computer Applications (MCA) with specialization in 
                  Software Engineering and Artificial Intelligence. Strong academic background 
                  with hands-on experience in modern technologies.
                </p>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} glass border ${isDarkMode ? 'border-cyan-500/20' : 'border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                  <Rocket className="w-6 h-6 text-blue-400" />
                  <span>Passion</span>
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Passionate about leveraging technology to solve real-world problems. 
                  Experienced in full-stack development, AI/ML, and cloud technologies. 
                  Always eager to learn and adapt to emerging technologies.
                </p>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} glass border ${isDarkMode ? 'border-cyan-500/20' : 'border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                  <Award className="w-6 h-6 text-purple-400" />
                  <span>Achievements</span>
                </h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Dean's List for Academic Excellence</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Winner - University Hackathon 2023</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Published Research Paper on AI/ML</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Comprehensive expertise across multiple technologies and domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`group p-6 rounded-xl ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} hover:border-cyan-500/50 transition-all duration-300 hover:scale-105`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{skill.category}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className={`w-full h-2 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                      </div>
                    </div>
                    <span className={`text-sm font-medium mt-2 block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Innovative solutions built with cutting-edge technologies
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg neon-glow'
                    : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative rounded-xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Featured</span>
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <a
                      href={project.github}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 line-clamp-3`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume & Timeline Section */}
      <section id="resume" className={`py-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Education & Experience
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              My academic journey and professional development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Resume Download */}
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Download className="w-6 h-6 text-cyan-400" />
                <span>Resume</span>
              </h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
                Download my complete resume to learn more about my skills, experience, and achievements.
              </p>
              <a
                href="/Bharath_Kumar_K_Resume (Templete-1).pdf"
                download
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium neon-glow"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              {education.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className="relative flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className={`flex-1 p-6 rounded-xl ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold">{item.degree}</h3>
                        <span className={`text-sm px-3 py-1 rounded-full ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                          {item.year}
                        </span>
                      </div>
                      <p className={`font-medium mb-2 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                        {item.institution}
                      </p>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              What colleagues and mentors say about my work
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} glass border ${isDarkMode ? 'border-cyan-500/20' : 'border-gray-200'} shadow-2xl`}>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                />
                <div>
                  <h3 className="text-xl font-bold">{testimonials[currentTestimonial].name}</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </p>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className={`text-lg italic mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                "{testimonials[currentTestimonial].content}"
              </blockquote>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                      : isDarkMode
                      ? 'bg-gray-600'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Let's discuss opportunities and collaborate on exciting projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</p>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>bharathkumar@email.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone</p>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Location</p>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Bangalore, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: 'https://github.com', color: 'from-gray-600 to-gray-800' },
                    { icon: Linkedin, href: 'https://linkedin.com', color: 'from-blue-600 to-blue-800' },
                    { icon: Twitter, href: 'https://twitter.com', color: 'from-blue-400 to-blue-600' }
                  ].map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 neon-glow`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      className={`peer w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="firstName"
                      className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 ${isDarkMode ? 'text-gray-400 peer-focus:text-cyan-400' : 'text-gray-600 peer-focus:text-blue-500'}`}
                    >
                      First Name
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      className={`peer w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="lastName"
                      className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 ${isDarkMode ? 'text-gray-400 peer-focus:text-cyan-400' : 'text-gray-600 peer-focus:text-blue-500'}`}
                    >
                      Last Name
                    </label>
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className={`peer w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 ${isDarkMode ? 'text-gray-400 peer-focus:text-cyan-400' : 'text-gray-600 peer-focus:text-blue-500'}`}
                  >
                    Email Address
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    className={`peer w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="subject"
                    className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 ${isDarkMode ? 'text-gray-400 peer-focus:text-cyan-400' : 'text-gray-600 peer-focus:text-blue-500'}`}
                  >
                    Subject
                  </label>
                </div>
                
                <div className="relative">
                  <textarea
                    id="message"
                    rows={5}
                    className={`peer w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 resize-none ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="message"
                    className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 ${isDarkMode ? 'text-gray-400 peer-focus:text-cyan-400' : 'text-gray-600 peer-focus:text-blue-500'}`}
                  >
                    Message
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 neon-glow hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Wavy Divider */}
          <div className="mb-8">
            <svg
              className="w-full h-4"
              viewBox="0 0 1200 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20C100 5 200 35 300 20C400 5 500 35 600 20C700 5 800 35 900 20C1000 5 1100 35 1200 20V40H0V20Z"
                fill="url(#gradient)"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-6">
              {[
                { icon: Github, href: 'https://github.com', color: 'hover:text-gray-600' },
                { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-600' },
                { icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
                { icon: Mail, href: 'mailto:bharathkumar@email.com', color: 'hover:text-red-500' }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ${social.color} transition-colors duration-300 hover:scale-110 transform`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
            
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
              © 2024 Bharath Kumar K. All rights reserved.
            </p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Built with React, Tailwind CSS, and lots of ☕
            </p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <button
              onClick={() => setSelectedProject(null)}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}
            >
              <X className="w-6 h-6" />
            </button>
            
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                {selectedProject.featured && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Featured</span>
                  </div>
                )}
              </div>
              
              <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedProject.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={selectedProject.github}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg hover:from-gray-800 hover:to-black transition-all duration-300 font-medium"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
                <a
                  href={selectedProject.live}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;