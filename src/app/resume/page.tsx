import React from 'react';

const ResumePage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6">Resume</h1>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Professional Experience</h2>
                <ul className="list-disc list-inside">
                    <li>
                        <h3 className="font-bold">Job Title at Company Name</h3>
                        <p className="text-gray-600">Month Year - Present</p>
                        <p>Brief description of your responsibilities and achievements.</p>
                    </li>
                    <li>
                        <h3 className="font-bold">Previous Job Title at Previous Company</h3>
                        <p className="text-gray-600">Month Year - Month Year</p>
                        <p>Brief description of your responsibilities and achievements.</p>
                    </li>
                </ul>
            </section>
            <section>
                <h2 className="text-2xl font-semibold">Education</h2>
                <ul className="list-disc list-inside">
                    <li>
                        <h3 className="font-bold">Degree in Field of Study</h3>
                        <p className="text-gray-600">University Name, Year of Graduation</p>
                    </li>
                    <li>
                        <h3 className="font-bold">Additional Certifications</h3>
                        <p className="text-gray-600">Certification Name, Year</p>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default ResumePage;