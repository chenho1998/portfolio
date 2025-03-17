import { useEffect, useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      category: "Web Application",
      image: "/api/placeholder/600/400",
      description:
        "A responsive admin dashboard for an e-commerce platform built with React, Redux Toolkit, and Tailwind CSS. Features include real-time data visualization, inventory management, and order processing.",
      technologies: ["React", "Redux", "Tailwind CSS", "Chart.js", "REST API"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Application",
      image: "/api/placeholder/600/400",
      description:
        "A cross-platform mobile application built with React Native for tracking workouts, nutrition, and fitness goals. Includes features like progress charts, workout plans, and social sharing.",
      technologies: [
        "React Native",
        "Context API",
        "Firebase",
        "Expo",
        "Native Device Features",
      ],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Real Estate Platform",
      category: "Web Application",
      image: "/api/placeholder/600/400",
      description:
        "A modern real estate platform with property listings, advanced filtering, and user authentication. Built with React, Next.js, and styled-components.",
      technologies: [
        "React",
        "Next.js",
        "Styled Components",
        "Mapbox",
        "Authentication",
      ],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Task Management System",
      category: "Web Application",
      image: "/api/placeholder/600/400",
      description:
        "A collaborative task management system with drag-and-drop interfaces, team collaboration features, and real-time updates.",
      technologies: [
        "React",
        "TypeScript",
        "Material UI",
        "Firebase",
        "React DnD",
      ],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Recipe Sharing Community",
      category: "Web & Mobile App",
      image: "/api/placeholder/600/400",
      description:
        "A platform for food enthusiasts to discover, share, and save recipes. Includes features like favoriting, meal planning, and ingredient shopping lists.",
      technologies: ["React", "React Native", "Node.js", "MongoDB", "AWS"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Portfolio Website",
      category: "Web Application",
      image: "/api/placeholder/600/400",
      description:
        "A personal portfolio website built with React, Vite, and Tailwind CSS. Features responsive design, dark mode, and smooth animations.",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      codeLink: "#",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.category.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }
  }, [filter]);

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Featured Projects</h2>
          <div className="w-16 h-1 mx-auto bg-blue-600 rounded"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            A selection of my recent work showcasing my skills and experience:
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-2 rounded-full ${
                filter === "web"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-4 py-2 rounded-full ${
                filter === "mobile"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
            >
              Mobile
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="card group hover:translate-y-1 transition-all"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-center space-x-4">
                    <a
                      href={project.liveLink}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
