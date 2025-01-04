'use client';

const About = () => {
  return (
    <section id="about" className="py-20 dark:shadow-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p>
              I'm a passionate software developer with a focus on web development, AI, ML, and data science.
              Currently pursuing my degree in Computer Science.
            </p>
            <p>
              My journey in tech started with Python programming, and I've since expanded my skillset to include:
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Languages</h3>
                <ul className="list-disc list-inside">
                  <li>Python</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Java</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Technologies</h3>
                <ul className="list-disc list-inside">
                  <li>React/Next.js</li>
                  <li>Vue.js</li>
                  <li>Machine Learning</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Web Development</p>
                <p>University Name</p>
                <p className="text-gray-600 dark:text-gray-400">Graduation: 2021</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Certifications</h3>
                <ul className="list-disc list-inside">
                  <li>Web Development Bootcamp</li>
                  <li>Machine Learning Specialization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
