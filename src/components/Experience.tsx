import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Finzo Financial Services',
      location: 'Uttar Pradesh, India',
      period: 'Feb 2025 - Aug 2025',
      type: 'Job',
      description: 'Developing scalable web application using MERN stack with focus on user experience and performance optimization.',
      achievements: [
        'Developed and deployed a financial services website using the MERN stack',
        'Implemented secure authentication & authorization with JWT and bcrypt',
        'Built a responsive financial dashboard with real-time service updates',
        'Enhanced data security using HTTPS and input validation techniques',
        'Collaborated with stakeholders to deliver a scalable, client-ready product'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS', 'Docker']
    },
    {
      title: 'Web Developer',
      company: 'Codsoft',
      location: 'Remote',
      period: 'Jan 2024 - March 2024',
      type: 'Internship',
      description: 'Focused on frontend development and user interface design for client projects.',
      achievements: [
        'Developed responsive websites using modern frameworks',
        'Improved website performance scores by average 30%',
        'Worked closely with design team to implement pixel-perfect UIs',
        'Maintained and updated existing client websites',
        'Conducted code reviews and mentored junior interns'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'jQuery', 'WordPress']
    },
    {
      title: 'Data Science Intern',
      company: 'Extion Infotech',
      location: 'Remote',
      period: 'Oct 2024 - Jan 2025',
      type: 'Internship',
      description: 'Provided web development services to small businesses and startups.',
      achievements: [
        'Analyzed datasets to derive actionable insights using Python and Pandas',
        'Processed large datasets using optimized SQL queries for performance',
        'Collaborated on predictive ML models to analyze customer behavior',
      ],
      technologies: ['Data Science', 'Python', 'SQL', 'ML', 'Pandas']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building expertise through diverse roles and challenging projects in the tech industry.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
              )}
              
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase size={24} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Internship' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                          exp.type === 'Part-time' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col lg:text-right text-gray-600 dark:text-gray-400 text-sm">
                      <div className="flex items-center lg:justify-end mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <ChevronRight size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;