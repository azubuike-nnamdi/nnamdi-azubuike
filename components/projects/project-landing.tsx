'use client'

import { ProjectData } from "@/data";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import ProjectDetailsSheet from "../project-details-sheet";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function ProjectLanding() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}

    >
      {/* Section Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold mb-3 text-black dark:text-white font-dancing-script">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl ">A collection of projects I&apos;ve worked on, showcasing my expertise in web development and user experience design.</p>
        <div className="h-1 w-24 bg-primary mt-4"></div>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {ProjectData.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ProjectDetailsSheet project={project}>
              <button
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group block w-full text-left cursor-pointer h-full"
              >
                <Card className={`relative h-[320px] overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-500 ${hoveredProject === project.id ? "shadow-xl" : "shadow-md"
                  }`}>
                  {/* Project Color Accent - Unique per project */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: `hsl(${(project.id * 60) % 360}, 80%, 60%)`
                    }}
                  />

                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold text-black dark:text-white font-dancing-script">
                        {project.name}
                      </CardTitle>
                      <motion.div
                        className="rounded-full p-2 bg-gray-100 dark:bg-gray-800"
                        whileHover={{ rotate: 12 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ExternalLink className="h-4 w-4 text-primary" />
                      </motion.div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-4 sm:px-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Badge
                            variant="outline"
                            className={`text-xs py-1 px-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 transition-all duration-300 ${hoveredProject === project.id ? "border-primary" : ""
                              }`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs py-1 px-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </button>
            </ProjectDetailsSheet>
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
}