const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "React Native", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5/CSS3", level: 90 },
      ],
    },
    {
      name: "UI Frameworks & Libraries",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Material UI", level: 85 },
        { name: "Styled Components", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Framer Motion", level: 75 },
      ],
    },
    {
      name: "Development Tools",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Webpack/Vite", level: 85 },
        { name: "Jest/Testing Library", level: 80 },
        { name: "Redux/Context API", level: 90 },
        { name: "RESTful APIs", level: 85 },
      ],
    },
    {
      name: "Other Skills",
      skills: [
        { name: "Responsive Design", level: 95 },
        { name: "UI/UX Principles", level: 85 },
        { name: "Performance Optimization", level: 85 },
        { name: "Agile/Scrum", level: 80 },
        { name: "CI/CD", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Technical Skills</h2>
          <div className="w-16 h-1 mx-auto bg-blue-600 rounded"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Here are my technical skills and expertise gained from 5 years of
            professional experience:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
