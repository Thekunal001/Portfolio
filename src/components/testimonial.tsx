import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  name: string;
  role: string;
  feedback: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, feedback, image }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={name} className="w-16 h-16 rounded-full mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="mt-4 text-center text-gray-700">{feedback}</p>
    </motion.div>
  );
};

export default Testimonial;