const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-800">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">About Me</h2>
          <div className="w-16 h-1 mx-auto bg-blue-600 rounded"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="aspect-square rounded-full overflow-hidden max-w-xs mx-auto border-4 border-blue-500">
              <img
                src="/api/placeholder/400/400"
                alt="Your Name"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-2xl font-bold mb-4">
              Frontend Developer & UI/UX Enthusiast
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With over 5 years of professional experience in frontend
              development, I specialize in building exceptional digital
              experiences. My expertise lies in creating responsive, accessible,
              and performance-optimized web and mobile applications using React
              and React Native.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm passionate about translating complex user requirements into
              elegant code solutions while following best practices and staying
              current with the latest industry trends. My approach combines
              technical expertise with creative problem-solving to deliver
              results that exceed expectations.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">Contact Details</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Your Name</li>
                  <li>Your Location</li>
                  <li>your.email@example.com</li>
                  <li>(123) 456-7890</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Tech Specialties</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>React & React Native</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Modern CSS/Tailwind</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <a href="#" className="btn" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
