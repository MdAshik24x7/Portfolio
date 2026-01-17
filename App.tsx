import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Cpu, 
  Terminal, 
  ArrowRight, 
  Mail,
  Facebook,
  Code,
  PenTool,
  Wrench,
  Youtube,
  MessageSquare
} from 'lucide-react';
import Navbar from './components/Navbar';
import SkillsBarChart from './components/SkillsBarChart';
import { 
  PROFILE, 
  CREATIVE_CONCEPTS,
  CREATIVE_SOFTWARE,
  TECHNICAL_SKILLS, 
  SYSTEM_SKILLS, 
  SOCIAL_MANAGEMENT, 
  INTERESTS 
} from './constants';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Initialize theme based on preference or system
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Variants specifically for the skill grids to stagger items
  const skillsGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const skillItemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-darkbg bg-checkers overflow-x-hidden selection:bg-mint-200 dark:selection:bg-mint-900">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-mint-400/20 dark:bg-mint-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-mint-100 dark:bg-mint-900/30 text-mint-700 dark:text-mint-300 text-sm font-semibold tracking-wide mb-6 border border-mint-200 dark:border-mint-800 backdrop-blur-sm">
              BD HSC 27 BATCH
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-500 to-teal-400">
                {PROFILE.name.split(' ').slice(-1)}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
              {PROFILE.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
               <a 
                 href="#about" 
                 onClick={(e) => handleSmoothScroll(e, '#about')}
                 className="px-8 py-3 rounded-lg bg-mint-500 hover:bg-mint-600 text-white font-semibold transition-all shadow-lg shadow-mint-500/30 flex items-center justify-center gap-2 cursor-pointer"
               >
                 More About Me <ArrowRight size={18} />
               </a>
               <a 
                 href="#skills" 
                 onClick={(e) => handleSmoothScroll(e, '#skills')}
                 className="px-8 py-3 rounded-lg bg-white/80 dark:bg-cardbg/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold hover:border-mint-500 dark:hover:border-mint-500 transition-all flex items-center justify-center cursor-pointer"
               >
                 View Skills
               </a>
            </div>
          </motion.div>

          {/* Abstract Hero Visual - A simplified representation of "System" */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
             <div className="relative z-10 w-full h-[500px] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-white/20 dark:border-white/5 backdrop-blur-xl p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] dark:opacity-[0.1]" />
                
                {/* Simulated Terminal Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Code Snippet Visual - Expanded to fill space */}
                <div className="space-y-2 font-mono text-gray-600 dark:text-gray-400 text-xs sm:text-sm h-full overflow-hidden">
                   <p><span className="text-purple-500">class</span> <span className="text-yellow-500">AshikProfile</span> <span className="text-purple-500">extends</span> <span className="text-yellow-500">Student</span> {'{'}</p>
                   <div className="pl-4 space-y-1">
                      <p>constructor() {'{'}</p>
                      <p className="pl-4"><span className="text-blue-500">this</span>.name = <span className="text-green-500">"Md. Ashiqul Islam"</span>;</p>
                      <p className="pl-4"><span className="text-blue-500">this</span>.batch = <span className="text-orange-400">2027</span>;</p>
                      <p className="pl-4"><span className="text-blue-500">this</span>.passion = [<span className="text-green-500">"Tech"</span>, <span className="text-green-500">"Design"</span>, <span className="text-green-500">"System"</span>];</p>
                      <p>}</p>
                   </div>
                   <br/>
                   <p><span className="text-gray-500 dark:text-gray-500">// Initialize System Optimization</span></p>
                   <p><span className="text-purple-500">async</span> <span className="text-blue-500">initKernel</span>() {'{'}</p>
                   <p className="pl-4"><span className="text-purple-500">await</span> system.<span className="text-yellow-500">loadCustomROM</span>();</p>
                   <p className="pl-4"><span className="text-purple-500">return</span> <span className="text-green-500">"System Stable"</span>;</p>
                   <p>}</p>
                   <br/>
                   <div className="border-t border-gray-200 dark:border-gray-800 pt-2 opacity-75">
                     <p className="text-mint-600 dark:text-mint-400">> executing startup_sequence.sh...</p>
                     <p>> loading_modules: [Adobe_Suite, VS_Code, Terminal]</p>
                     <p>> optimization_level: 100%</p>
                     <p className="animate-pulse">> _</p>
                   </div>
                </div>

                {/* Roles Badges */}
                <div className="flex flex-wrap gap-3 mt-4">
                   <div className="bg-white/50 dark:bg-black/20 px-3 py-2 rounded-lg backdrop-blur-sm border border-mint-100 dark:border-mint-900/30 text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Code size={14} className="text-mint-500"/> Developer
                   </div>
                   <div className="bg-white/50 dark:bg-black/20 px-3 py-2 rounded-lg backdrop-blur-sm border border-mint-100 dark:border-mint-900/30 text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Wrench size={14} className="text-mint-500"/> System Helper
                   </div>
                   <div className="bg-white/50 dark:bg-black/20 px-3 py-2 rounded-lg backdrop-blur-sm border border-mint-100 dark:border-mint-900/30 text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <PenTool size={14} className="text-mint-500"/> Designer
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Personal Details & System Status</p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Personal Info Card */}
            <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bg-white/90 dark:bg-cardbg/90 backdrop-blur-md rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-mint-500 rounded-full"></span>
                  Personal Profile
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                   <div className="space-y-4">
                      <div className="flex items-start gap-3">
                         <div className="p-2 bg-mint-100 dark:bg-mint-900/50 text-mint-600 rounded-lg"><Calendar size={18}/></div>
                         <div>
                           <p className="text-xs text-gray-500 dark:text-gray-400">Date of Birth</p>
                           <p className="font-medium text-base">{PROFILE.dob}</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-3">
                         <div className="p-2 bg-mint-100 dark:bg-mint-900/50 text-mint-600 rounded-lg"><MapPin size={18}/></div>
                         <div>
                           <p className="text-xs text-gray-500 dark:text-gray-400">Address</p>
                           <p className="font-medium text-base">{PROFILE.address}</p>
                         </div>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-start gap-3">
                         <div className="p-2 bg-mint-100 dark:bg-mint-900/50 text-mint-600 rounded-lg"><GraduationCap size={18}/></div>
                         <div>
                           <p className="text-xs text-gray-500 dark:text-gray-400">Academic Batch</p>
                           <p className="font-medium text-base">{PROFILE.batch}</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-3">
                         <div className="p-2 bg-mint-100 dark:bg-mint-900/50 text-mint-600 rounded-lg"><Mail size={18}/></div>
                         <div>
                           <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                           <p className="font-medium text-base break-all">{PROFILE.email}</p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Social Links Row */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap items-center gap-4">
                   <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Connect:</span>
                   <div className="flex gap-3">
                      <a href="#" className="p-2 bg-gray-50 dark:bg-darkbg rounded-lg hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all border border-gray-200 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-900">
                        <Youtube size={20} />
                      </a>
                      <a href="#" className="p-2 bg-gray-50 dark:bg-darkbg rounded-lg hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-900">
                        <MessageSquare size={20} />
                      </a>
                      <a href="#" className="p-2 bg-gray-50 dark:bg-darkbg rounded-lg hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900">
                        <Facebook size={20} />
                      </a>
                      <a href={`mailto:${PROFILE.email}`} className="p-2 bg-gray-50 dark:bg-darkbg rounded-lg hover:text-mint-500 hover:bg-mint-50 dark:hover:bg-mint-900/20 transition-all border border-gray-200 dark:border-gray-700 hover:border-mint-200 dark:hover:border-mint-900">
                        <Mail size={20} />
                      </a>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* System Skills Card - Bento Grid Style */}
            <motion.div variants={itemVariants} className="col-span-1 bg-gradient-to-br from-mint-500 to-teal-600 rounded-xl p-6 text-white relative overflow-hidden flex flex-col justify-center">
               <div className="absolute top-0 right-0 p-6 opacity-10"><Cpu size={100} /></div>
               <h3 className="text-xl font-bold mb-2 relative z-10">System Master</h3>
               <p className="mb-4 opacity-90 relative z-10 text-xs leading-relaxed">
                  Advanced diagnostics, custom ROM deployment, and kernel-level optimization.
               </p>
               <ul className="space-y-1.5 relative z-10">
                 {SYSTEM_SKILLS.slice(0, 4).map((skill, idx) => (
                   <li key={idx} className="flex items-center gap-2 text-xs font-medium bg-white/20 backdrop-blur-md p-1.5 rounded-lg">
                     <Terminal size={12} /> {skill}
                   </li>
                 ))}
               </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 bg-white/50 dark:bg-[#0b1120]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-10">
             <h2 className="text-3xl font-bold mb-3">Skillset & Expertise</h2>
             <p className="text-gray-600 dark:text-gray-400 text-sm">My Digital Arsenal</p>
           </div>

           <div className="grid lg:grid-cols-2 gap-6">
             {/* Left Column: Creative Concepts & Software Arsenal */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-5"
             >
                {/* Core Focus Areas */}
                <div className="group relative bg-white dark:bg-cardbg rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md hover:border-mint-200 dark:hover:border-mint-900 transition-all duration-300">
                  <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      Creative Focus
                      <span className="text-[10px] px-2 py-0.5 bg-mint-100 dark:bg-mint-900/50 text-mint-700 dark:text-mint-300 rounded-full">Visual</span>
                    </h3>
                    <motion.div 
                      className="grid grid-cols-3 gap-3"
                      variants={skillsGridVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                       {CREATIVE_CONCEPTS.map((skill, idx) => (
                         <motion.div 
                            key={idx} 
                            variants={skillItemVariants}
                            className="p-3 bg-gray-50 dark:bg-darkbg rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center hover:border-mint-400 transition-all"
                         >
                            {skill.icon && <skill.icon className="w-6 h-6 mb-2 text-mint-500" />}
                            <h4 className="font-semibold text-xs mb-1.5">{skill.name}</h4>
                            <div className="w-full flex items-center gap-2">
                              <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                 <motion.div 
                                    className="h-full bg-mint-500" 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                                    viewport={{ once: true }}
                                 />
                              </div>
                              <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400">{skill.level}%</span>
                            </div>
                         </motion.div>
                       ))}
                    </motion.div>
                  </div>
                </div>

                {/* Software Arsenal */}
                <div className="group relative bg-white dark:bg-cardbg rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md hover:border-mint-200 dark:hover:border-mint-900 transition-all duration-300">
                    <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold">Software Arsenal</h3>
                        <div className="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-[10px] font-bold">
                          TOOLS
                        </div>
                      </div>
                      <SkillsBarChart data={CREATIVE_SOFTWARE} darkMode={darkMode} />
                    </div>
                </div>
             </motion.div>

             {/* Right Column: Programming & Social */}
             <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-5"
             >
                {/* Programming & Productivity */}
                <div className="group relative bg-white dark:bg-cardbg rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md hover:border-mint-200 dark:hover:border-mint-900 transition-all duration-300">
                  <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold">Programming & Tech</h3>
                      <div className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold">
                        DEV
                      </div>
                    </div>
                    <SkillsBarChart data={TECHNICAL_SKILLS.skills} darkMode={darkMode} />
                  </div>
                </div>

                {/* Digital Management */}
                <div className="group relative bg-white dark:bg-cardbg rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md hover:border-mint-200 dark:hover:border-mint-900 transition-all duration-300">
                  <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      Digital Management
                      <span className="text-[10px] px-2 py-0.5 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-400 rounded-full">Social</span>
                    </h3>
                    <motion.div 
                      className="grid grid-cols-3 gap-3"
                      variants={skillsGridVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {SOCIAL_MANAGEMENT.map((item, idx) => (
                         <motion.div 
                            key={idx} 
                            variants={skillItemVariants}
                            className="p-3 bg-gray-50 dark:bg-darkbg rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center hover:border-mint-400 transition-all"
                         >
                            {item.icon && <item.icon className="w-6 h-6 mb-2 text-mint-500" />}
                            <h4 className="font-semibold text-xs mb-1.5">{item.name}</h4>
                            <div className="w-full flex items-center gap-2">
                               <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                  <motion.div 
                                     className="h-full bg-mint-500" 
                                     initial={{ width: 0 }}
                                     whileInView={{ width: `${item.level}%` }}
                                     transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                                     viewport={{ once: true }}
                                  />
                               </div>
                               <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400">{item.level}%</span>
                            </div>
                         </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
             </motion.div>
           </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-16 relative overflow-hidden">
         {/* Decoration */}
         <div className="absolute right-0 top-1/4 w-64 h-64 bg-teal-100/50 dark:bg-teal-900/10 rounded-full blur-3xl -z-10" />

         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Passions & Interests</h2>
            <div className="grid md:grid-cols-3 gap-6">
               {INTERESTS.map((interest, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ y: 50, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="group relative p-6 rounded-xl bg-white dark:bg-cardbg border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:shadow-mint-500/10 transition-all duration-300"
                 >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mint-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-12 h-12 bg-gray-50 dark:bg-darkbg rounded-lg flex items-center justify-center text-mint-500 shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <interest.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{interest.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {interest.description}
                    </p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white dark:bg-[#050912] py-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            © 2026 MdAshik24x7. All rights reserved.
          </p>
          <div className="mt-2 text-xs text-gray-400 dark:text-gray-600">
            Designed with <span className="text-red-400">♥</span> and React
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;