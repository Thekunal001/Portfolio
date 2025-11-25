import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 text-white py-8 mt-16">
            <div className="container mx-auto px-4">
                <div className="flex justify-center gap-6 mb-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        <Twitter size={24} />
                    </a>
                </div>
                <div className="text-center text-sm text-gray-400">
                    <p>&copy; 2025 Kunal Singla. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;