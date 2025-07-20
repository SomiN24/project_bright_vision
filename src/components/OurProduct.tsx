import React from "react";

const OurProduct: React.FC = () => {
  return (
    <section id="product" className="w-full bg-white">
      {/* --- Product 1 --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-12 py-12">
        {/* Left: Video (Sticky) */}
        <div className="relative order-1 lg:order-1 max-w-6xl mx-auto">
          {/* Added aspect-video to give it a 16:9 aspect ratio */}
          <div className="sticky top-24 h-[450px]">
            <video
              className="rounded-2xl w-full h-full object-cover" // Added h-full and object-cover to fill the aspect-ratio container
              src="/public/product1.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        {/* Right: Scrollable Details */}
        <div className="flex flex-col space-y-20 order-2 lg:order-2">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
                <span style={{ color: "maroon" }}>Smart</span> Vision Pro
            </h1>
            <p className="text-lg text-gray-700">
              Guided by AI, we transform perception into power and redefine vision through technology
            </p>
            
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Key Features
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>AI-Powered Object Recognition</li>
              <li>Currency Detection</li>
              <li>Scene and Surrounding Description</li>
              <li>Intuitive Voice Guidance</li>
              <li>Personalized Learning with Machine Intelligence</li>
              <li>Lightweight and Ergonomic Design</li>
              <li>Offline Functionality (Lite Version)</li>
              <li>Cloud Connectivity and Smart Integration (Pro Version)</li>
              <li>Multilingual Voice Support</li>
              <li>Durable and Water-Resistant Build</li>
            </ul>
            <br />
            <br />
            <h1 className="text-3xl text-right font-bold text-gray-700">
              "Feel The Unseen : <span style={{color : "maroon"}}>Smart</span> Vision Glasses Pro - A Touch Of Innovation, A World Of Sensation"
            </h1>
          </div>

        <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Enhanced Key Features
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Clear Audio with Bone Conduction</li>
              <li>Easy Navigation with Smart Swiping</li>
              <li>Use Anywhere, Anytime with All-Lighting Compatibility</li>
              <li>Lidar Tech for Smart Obstacle Detection</li>
              <li>Feather-Light Design for Ultimate Comfort</li>
              <li>Always Updated: Auto-Updates for Latest Features</li>
            </ul>
          </div>
          
        </div>
      </div>

       {/* --- Product 2 (Video on the Right) --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-12 py-12">
        {/* Left: Scrollable Details */}
        <div className="flex flex-col space-y-20 order-2 lg:order-2">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
                <span style={{ color: "maroon" }}>Aura</span> Vision Pro
            </h1>
            <p className="text-lg text-gray-700">
              The world’s first AR-powered vision aid with high-resolution cameras — redefining sight with multi-camera precision, so you can see smarter and live freer.
            </p>
            
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Key Features
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Customizable High-Resolution Display</li>
              <li>Central Vision Loss Compensation</li>
              <li>Peripheral Vision Loss Support</li>
              <li>Blurry or Hazy Vision Enhancement</li>
              <li>User-Friendly Interface</li>
              <li>Multi-Condition Compatibility</li>
            </ul>
            <br />
            <br />
            <h1 className="text-3xl text-left font-bold text-gray-700">
              "Integrated With Our <span style={{color : "maroon"}}>Vision</span> Characterization System for a Complete, Hassle-free Vision Care Experience."
            </h1>
          </div>

        <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Enhanced Key Features
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Colorblind Assistance Mode</li>
              <li>Dedicated Reading Mode</li>
            </ul>
          </div>
          
        </div>

        {/* Right: Video (Sticky) */}
        <div className="relative order-1 lg:order-2 max-w-6xl mx-auto">
          {/* Added aspect-video to give it a 16:9 aspect ratio */}
          <div className="sticky top-24 h-[450px]">
            <video
              className="rounded-2xl w-full h-full object-cover" // Added h-full and object-cover to fill the aspect-ratio container
              src="/public/product2.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;