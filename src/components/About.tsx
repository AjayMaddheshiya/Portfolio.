import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      type: 'education',
      title: 'Bachelor of Technology in Computer Science',
      institution: 'Amity University',
      location: 'Lucknow, Uttar Pradesh, India',
      period: '2021 - 2025',
      description: 'Focused on software development, data structures, and AI/ML technologies.'
    },
    {
      type: 'work',
      title: 'Software Engineer',
      institution: 'Finzo Financial Services',
      location: 'Lucknow, India',
      period: '02/2025 - 08/2025',
      description: 'Developed responsive web application using MERN stack and collaborated on AI integration projects.'
    },
    {
      type: 'Internship',
      title: 'Web Development Intern',
      institution: 'Codsoft',
      location: 'Remote',
      period: '2024',
      description: 'Specialized in modern React patterns, Node.js, and cloud deployment strategies.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies and a keen interest in artificial intelligence and data science.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
               
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Ajay Maddheshiya</h3>
                  <p className="text-blue-600">Full-Stack Developer</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                With a strong foundation in computer science and hands-on experience in full-stack development, 
                I specialize in creating scalable web applications using the MERN stack. My passion for technology 
                extends to artificial intelligence and data science, where I enjoy exploring innovative solutions 
                to complex problems.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                I believe in continuous learning and staying updated with the latest industry trends. 
                When I'm not coding, you can find me contributing to open-source projects or exploring 
                new frameworks and technologies.
              </p>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Education & Experience
            </h3>
            
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-blue-200"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-2">
                      {item.type === 'education' ? 
                        <GraduationCap className="text-blue-600 mr-2" size={20} /> : 
                        <Briefcase className="text-purple-600 mr-2" size={20} />
                      }
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar size={16} className="mr-1" /> {item.period}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <span className="mr-3">{item.institution}</span>
                      <MapPin size={16} className="mr-1" />
                      <span>{item.location}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;