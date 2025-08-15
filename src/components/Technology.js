import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaCode, FaBook, FaUsers } from "react-icons/fa";

const Technology = () => {
  const { name } = useParams();

  const technologyDetails = {
    java: {
      name: "Java",
      description: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
      logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      category: "Programming Language",
      features: [
        "Platform Independent",
        "Object-Oriented Programming",
        "Robust and Secure",
        "Multithreaded",
        "High Performance"
      ],
      useCases: [
        "Enterprise Applications",
        "Web Development",
        "Mobile Applications",
        "Desktop Applications",
        "Scientific Applications"
      ],
      resources: [
        { name: "Official Documentation", url: "https://docs.oracle.com/en/java/" },
        { name: "Oracle Java", url: "https://www.oracle.com/java/" },
        { name: "Java Tutorials", url: "https://docs.oracle.com/javase/tutorial/" }
      ]
    },
    j2ee: {
      name: "J2EE",
      description: "Java 2 Platform, Enterprise Edition (J2EE) is a platform-independent, Java-centric environment for developing, building and deploying Web-based enterprise applications online.",
      logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      category: "Enterprise Platform",
      features: [
        "Component-based Architecture",
        "Distributed Computing",
        "Transaction Management",
        "Security Framework",
        "Scalable Solutions"
      ],
      useCases: [
        "Enterprise Web Applications",
        "Distributed Systems",
        "E-commerce Platforms",
        "Banking Systems",
        "Large-scale Applications"
      ],
      resources: [
        { name: "Java EE Documentation", url: "https://www.oracle.com/java/technologies/java-ee-glance.html" },
        { name: "Enterprise Java", url: "https://jakarta.ee/" },
        { name: "J2EE Tutorials", url: "https://www.tutorialspoint.com/java_ee/" }
      ]
    },
    react: {
      name: "React",
      description: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      category: "JavaScript Library",
      features: [
        "Component-Based Architecture",
        "Virtual DOM",
        "JSX Syntax",
        "Unidirectional Data Flow",
        "Rich Ecosystem"
      ],
      useCases: [
        "Single Page Applications",
        "Progressive Web Apps",
        "Mobile Applications",
        "Desktop Applications",
        "Interactive UIs"
      ],
      resources: [
        { name: "React Documentation", url: "https://reactjs.org/docs/" },
        { name: "React Tutorial", url: "https://reactjs.org/tutorial/" },
        { name: "Create React App", url: "https://create-react-app.dev/" }
      ]
    }
  };

  const technology = technologyDetails[name?.toLowerCase()];

  if (!technology) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technology Not Found</h1>
          <p className="text-gray-600 mb-8">The requested technology information is not available.</p>
          <Link to="/skills" className="btn-primary">
            <FaArrowLeft className="mr-2" />
            Back to Skills
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom py-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <FaArrowLeft />
            Back to Skills
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <motion.img
              src={technology.logo}
              alt={technology.name}
              className="w-24 h-24 object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4 inline-block">
            {technology.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {technology.name}
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {technology.description}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Features */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FaCode className="text-blue-600" />
              Key Features
            </h2>
            <ul className="space-y-4">
              {technology.features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FaUsers className="text-green-600" />
              Common Use Cases
            </h2>
            <ul className="space-y-4">
              {technology.useCases.map((useCase, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">{useCase}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Resources */}
        <motion.div
          className="mt-12 bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaBook className="text-purple-600" />
            Learning Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {technology.resources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <FaExternalLinkAlt className="text-blue-600 group-hover:text-blue-700" />
                <span className="font-medium text-gray-900 group-hover:text-blue-700">
                  {resource.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Interested in working with {technology.name} or have questions about this technology?
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-3">
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;