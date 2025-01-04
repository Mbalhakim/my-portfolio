'use client';

interface Project {
  title: string;
  description: string;
  tags: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Project 1",
      description: "Description coming soon...",
      tags: ["React", "Python", "ML"],
    },
    {
      title: "Project 2",
      description: "Description coming soon...",
      tags: ["Vue.js", "Data Science"],
    },
    {
        title: "Project 3",
        description: "Description coming soon...",
        tags: ["Vue.js", "Data Science"],
      },
      {
        title: "Project 4",
        description: "Description coming soon...",
        tags: ["Vue.js", "Data Science"],
      },
  ];

  return (
    <section id="projects" className="py-20 bg-[var(--background)] ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold  text-[var(--foreground)] text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}