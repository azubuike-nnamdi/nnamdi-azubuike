'use client'

import { ProjectData } from "@/data";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

type ProjectDataType = {
  id: number;
  name: string;
  desc: string;
  action: string;
  uri: string;
  technologies: string[];
};

export default function ProjectLanding() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <main className="mx-auto py-12 px-4 md:px-8">
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-3 text-black dark:text-white">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl">A collection of projects I've worked on, showcasing my expertise in web development and user experience design.</p>
        <div className="h-1 w-24 bg-primary mt-4"></div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectData.map((project) => (
          <Link
            href={project.uri}
            target="_blank"
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group"
          >
            <Card className={`relative h-[320px] overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-500 ${hoveredProject === project.id ? "shadow-xl transform -translate-y-2" : "shadow-md"
              }`}>
              {/* Project Color Accent - Unique per project */}
              <div
                className={`absolute top-0 left-0 w-full h-1 transition-all duration-300 ${hoveredProject === project.id ? "opacity-100" : "opacity-80"
                  }`}
                style={{
                  background: `hsl(${(project.id * 60) % 360}, 80%, 60%)`
                }}
              ></div>

              <CardHeader className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-black dark:text-white">
                    {project.name}
                  </CardTitle>
                  <div className={`rounded-full p-2 bg-gray-100 dark:bg-gray-800 transform transition-all duration-300 ${hoveredProject === project.id ? "rotate-12" : ""
                    }`}>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`text-xs py-1 px-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 transition-all duration-300 ${hoveredProject === project.id ? "border-primary" : ""
                        }`}
                    >
                      {tech}
                    </Badge>
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

              {/* <CardFooter className="absolute bottom-0 left-0 right-0 px-6 py-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-card">
                <div className="flex items-center justify-between w-full">
                  <span className="font-medium text-sm text-primary group-hover:underline transition-all">
                    {project.action}
                  </span>
                  <ArrowUpRight className={`ml-1 h-4 w-4 text-primary transform transition-all duration-300 ${hoveredProject === project.id ? "translate-x-1 -translate-y-1" : ""
                    }`} />
                </div>
              </CardFooter> */}
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}