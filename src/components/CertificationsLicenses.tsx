import { useState } from "react";
import c1 from '@/assets/cert1.jpeg';
import c2 from '@/assets/cert2.jpeg';
import c3 from '@/assets/cert3.jpeg';
import c4 from '@/assets/cert4.jpeg';
interface Certification {
  title: string;
  image: string;
}

const certifications: Certification[] = [
  {
    title: "Memorandum Of Understanding Certificate Between JSF & Samarthanam Trust",
    image: c1,
  },
  {
    title: "JSF Registration Certificate for Undertaking CSR activities",
    image: c2,
  },
  {
    title: "Application of Registration for a Charitable Trust",
    image: c3,
  },
  {
    title: "Collaboration & Endorsement Letter",
    image: c4,
  },
];

export default function CertificationsLicenses() {
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <section
      className="w-full py-16 px-4 md:px-8"
      id="certifications"
      style={{
        background: 'linear-gradient(to bottom right, #f8f8f8, #e0e0e0)', // Subtle gradient background
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Certifications & Licenses
        </h2>

        <div className="flex flex-col gap-6 items-center">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(cert)}
              className="cursor-pointer bg-white rounded-2xl p-4 text-center shadow-lg transition duration-300 h-32 flex items-center justify-center text-base font-medium text-gray-700 w-full max-w-md border border-gray-100
              hover:bg-blue-50 hover:shadow-xl hover:border-blue-200 transform hover:scale-102" /* Enhanced hover effects */
            >
              {cert.title}
            </div>
          ))}
        </div>
      </div>

      {/* Modal Fullscreen View */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4 overflow-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-xl max-w-5xl w-full p-6"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 z-10 transition duration-300"
              onClick={() => setSelected(null)}
            >
              Go Back
            </button>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
              {selected.title}
            </h3>

            {/* Full Image */}
            <img
              src={selected.image}
              alt={selected.title}
              className="max-w-full max-h-[90vh] mx-auto block rounded-lg border border-gray-200 shadow-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
