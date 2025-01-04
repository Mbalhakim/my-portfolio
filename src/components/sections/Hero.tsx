'use client'; // Add this at the top since we're using useState


import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, Im 
          </h1>
          <p className="text-xl text-gray-600 dark:text-white mb-8">
            A Full Stack Developer specializing in AI, ML, and Data Science
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-600 dark:text-white hover:text-gray-900">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-600 dark:text-white hover:text-gray-900">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 dark:text-white hover:text-gray-900">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;