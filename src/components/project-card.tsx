import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  demoLink: string;
  codeLink: string;
  Icon: LucideIcon;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  imageUrl,
  demoLink,
  codeLink,
  Icon,
}) => {
  return (
    <motion.div
      className="p-4"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-md" />
        <div className="p-4">
          <h3 className="text-xl font-semibold flex items-center">
            <Icon className="mr-2" /> {title}
          </h3>
          <p className="text-gray-600 mt-2">{description}</p>
          <div className="mt-4">
            <h4 className="font-medium">Tech Stack:</h4>
            <ul className="list-disc list-inside">
              {techStack.map((tech, index) => (
                <li key={index} className="text-gray-500">{tech}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex space-x-4">
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Demo
            </a>
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Code
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;