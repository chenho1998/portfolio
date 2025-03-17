const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      period: "January 2023 - Present",
      description:
        "Lead frontend developer for multiple enterprise web applications using React. Implemented modern state management solutions with Redux Toolkit and Context API. Mentored junior developers and established coding standards.",
      achievements: [
        "Reduced load time by 40% through code splitting and lazy loading",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Led migration from class components to functional components with hooks",
      ],
    },
    {
      title: "React Native Developer",
      company: "Mobile Solutions LLC",
      period: "March 2021 - December 2022",
      description:
        "Developed cross-platform mobile applications using React Native. Collaborated with design team to implement pixel-perfect UI. Integrated RESTful APIs and implemented state management with Redux.",
      achievements: [
        "Built and deployed 5 production mobile apps to App Store and Google Play",
        "Implemented custom animations improving user engagement by 35%",
        "Reduced app size by 25% through optimizing asset management",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Web Experts Agency",
      period: "June 2019 - February 2021",
      description:
        "Created responsive websites and web applications using React. Worked with UI/UX designers to implement designs. Integrated third-party APIs and services.",
      achievements: [
        "Developed 15+ client websites with 100% on-time delivery",
        "Implemented A/B testing increasing conversion rates by 22%",
        "Created reusable component library reducing development time by 30%",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Digital Creations",
      period: "May 2018 - May 2019",
      description:
        "Developed and maintained websites using HTML, CSS, JavaScript, and React. Assisted senior developers in implementing features and fixing bugs.",
      achievements: [
        "Contributed to 10+ client projects",
        "Implemented responsive designs for mobile and tablet devices",
        "Learned and applied React best practices in development workflow",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-white dark:bg-gray-800">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Work Experience</h2>
          <div className="w-16 h-1 mx-auto bg-blue-600 rounded"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            My professional journey as a frontend developer over the past 5
            years:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-500 ml-3 md:ml-6">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 ml-6 md:ml-10">
                <div className="absolute w-4 h-4 rounded-full bg-blue-600 -left-2 border border-white dark:border-gray-800"></div>
                <div className="card ml-2">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="flex flex-wrap items-center text-sm mb-2">
                    <span className="font-semibold text-blue-600">
                      {exp.company}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
