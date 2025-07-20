import React from 'react';

// Define a type for a technology partner
interface Partner {
  name: string;
  logo: string; // Path to the partner's logo image
  link: string; // URL to the partner's website (optional)
  description: string; // Added description field
}

// Sample data for technology partners
const technologyPartners: Partner[] = [
  {
    name: 'SHG Technologies',
    logo: '/logo.png',
    link: 'https://shgtechnologies.com',
    description: 'SHG Technologies Pvt. Ltd. is a Bangalore-based company dedicated to transforming the lives of visually impaired individuals through cutting-edge assistive technology. SHG specializes in the development and manufacturing of Smart Vision Glasses and AURA Vision Glasses, leveraging Artificial Intelligence, Machine Vision, and Machine Learning to provide innovative solutions.',
  },
  {
    name: 'Brane Enterprises',
    logo: '/logo-white.svg',
    link: 'https://www.braneenterprises.com',
    description: 'Brane is an AI innovation lab focused on creating inclusive, human-centered technology. For Project Bright Vision, Brane has developed assistive tools that use AI to provide real-time voice guidance and enhanced vision support for the visually impaired. Their work empowers greater independence and opens new pathways to employment through smart, accessible solutions.', // Placeholder description
  },
];

const TechnologyPartner: React.FC = () => {
  return (
    <section id="technology-partner" className="w-full py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Valued <span style={{color:"maroon"}}>Technology </span>Partner<span className="text-maroon">s</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            At JSF, we set clear benchmarks for collaborating with technology partners. We seek partners who share our passion and vision and who are directly involved in the product creation process. This ensures that the technology being developed is meaningful, impactful, and aligned with our mission to uplift the marginalized community.
        </p>

        {/* Displaying multiple partners using a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center mb-8"> {/* Changed gap-4 to gap-2 */}
          {technologyPartners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center max-w-sm w-full gap-0"> {/* Wrapper div for card and description */}
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap justify-center p-6 bg-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 w-full mb-4" /* Added mb-4 for spacing to description */
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="max-h-24 object-contain mb-4 group-hover:opacity-80 transition-opacity duration-300"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/200x100/e0e0e0/555555?text=${partner.name}`;
                    e.currentTarget.alt = `${partner.name} (Image not available)`;
                  }}
                />
                <span className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                  {partner.name}
                </span>
              </a>
              {/* Partner Description */}
              <p className="text-sm text-gray-600 leading-relaxed text-center max-w-xs mx-auto">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
        {/* Removed the standalone SHG description paragraph */}
      </div>
    </section>
  );
};

export default TechnologyPartner;
