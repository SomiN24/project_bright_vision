import React, { useState, useEffect, useRef } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// Define types for Recharts Tooltip payload
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string; // Name of the slice
    value: number; // Value of the slice
    percent?: number; // Recharts might provide this, but we'll calculate it for safety
    payload: { // This is the original data object for the slice
      name: string;
      value: number;
    };
  }>;
  // We also need to pass the total value to calculate percentage correctly
  totalValue?: number;
}

// Define types for chat history parts and content
interface ChatPart {
  text: string;
}

interface ChatContent {
  role: string;
  parts: ChatPart[];
}

// Data for Model Assumptions table
const modelAssumptions = [
  { parameter: 'Students per school', braille: '40', smartGlasses: '40' },
  { parameter: 'Books per student/year', braille: '20', smartGlasses: '0' },
  { parameter: 'Avg. cost per Braille book', braille: '₹2,000', smartGlasses: '–' },
  { parameter: 'Smart Glasses (shared)', braille: '–', smartGlasses: '10 units' },
  { parameter: 'Device cost', braille: '–', smartGlasses: '₹12,000 per unit' },
  { parameter: 'Device replacement cycle', braille: '–', smartGlasses: 'Every 7.5 years' },
];

// Data for Braille Model Pie Chart
const brailleCostData = [
  { name: 'Books (Year 1-5)', value: 1600000 },
  { name: 'Books (Year 6-10)', value: 1600000 },
  { name: 'Books (Year 11-15)', value: 1600000 },
];
// Calculate total for Braille model
const totalBrailleCost = brailleCostData.reduce((sum, entry) => sum + entry.value, 0);

const BRAILLE_COLORS = ['#FF8042', '#0088FE', '#00C49F']; // A set of colors for the pie slices

// Data for Smart Glasses Model Pie Chart
const smartGlassesCostData = [
  { name: 'Smart Glasses Batch 1', value: 120000 },
  { name: 'Smart Glasses Batch 2', value: 120000 },
  { name: 'Electricity', value: 7500 },
];
// Calculate total for Smart Glasses model
const totalSmartGlassesCost = smartGlassesCostData.reduce((sum, entry) => sum + entry.value, 0);

const SMART_GLASSES_COLORS = ['#FFBB28', '#FF8042', '#00C49F']; // A different set of colors

// Data for Comparison Table
const comparisonData = [
  {
    feature: 'Content Access & Language',
    smartGlasses: 'Instant, multi-language content access, breaking language barriers.',
    braille: 'Limited availability and content, often language-specific.',
  },
  {
    feature: 'Resource Utilization',
    smartGlasses: 'Rotational use across grades, maximizing ROI for schools.',
    braille: 'Books shared, restricting individual pace; prone to wear & tear.',
  },
  {
    feature: 'Learning & Interaction',
    smartGlasses: 'Real-time reading, voice guidance for navigation, object/face recognition for social interaction.',
    braille: 'Physical format limits real-time updates and interactive features.',
  },
  {
    feature: 'Cost & Logistics',
    smartGlasses: 'Significant cost savings over time; reduced storage needs.',
    braille: 'High production costs; requires significant storage and frequent replacement.',
  },
];

// Custom Tooltip for Pie Charts
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, totalValue }) => {
  if (active && payload && payload.length && totalValue !== undefined) {
    const data = payload[0].payload; // This is the original data object
    // Ensure totalValue is not zero to prevent division by zero
    const percentage = totalValue > 0 ? (data.value / totalValue) * 100 : 0;

    return (
      <div className="p-3 bg-white border border-gray-300 rounded-lg shadow-md">
        <p className="text-sm font-semibold text-gray-800">{data.name}</p>
        <p className="text-sm text-gray-600">Cost: ₹{data.value.toLocaleString('en-IN')}</p>
        <p className="text-sm text-gray-600">Percentage: {percentage.toFixed(2)}%</p>
      </div>
    );
  }
  return null;
};

const Financials = () => {
  // State to manage elaboration for each strategic insight
  const [elaborations, setElaborations] = useState<Record<number, string>>({});
  const [loadingInsight, setLoadingInsight] = useState<number | null>(null); // Tracks which insight is loading

  // State for comparison summary
  const [comparisonSummary, setComparisonSummary] = useState<string | null>(null);
  const [loadingComparison, setLoadingComparison] = useState<boolean>(false);

  // Ref for the 15-Year Institutional Cost Comparison section
  const costComparisonRef = useRef<HTMLElement>(null);
  // State to trigger pie chart animation
  const [animateCharts, setAnimateCharts] = useState<boolean>(false);

  // Effect for Intersection Observer to trigger pie chart animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animateCharts) {
            setAnimateCharts(true);
            // Optionally, disconnect observer once animation is triggered
            observer.disconnect();
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (costComparisonRef.current) {
      observer.observe(costComparisonRef.current);
    }

    // Cleanup function
    return () => {
      if (costComparisonRef.current) {
        observer.unobserve(costComparisonRef.current);
      }
    };
  }, [animateCharts]); // Re-run effect if animateCharts changes (though it's disconnected after first true)


  // Function to fetch elaboration from Gemini API
  const getElaboration = async (insight: string, index: number) => {
    setLoadingInsight(index); // Set loading state for this insight
    try {
      const chatHistory: ChatContent[] = [];
      const prompt = `Elaborate on the following strategic insight in a concise paragraph, focusing on its importance for an educational non-profit: "${insight}"`;
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = ""; // Leave as empty string, Canvas will provide it at runtime
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result: any = await response.json(); // Use 'any' for now, or define a more specific type if needed
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setElaborations(prev => ({ ...prev, [index]: text }));
      } else {
        console.error("Gemini API response structure unexpected for elaboration:", result);
        setElaborations(prev => ({ ...prev, [index]: 'Failed to get elaboration. Please try again.' }));
      }
    } catch (error) {
      console.error("Error fetching elaboration:", error);
      setElaborations(prev => ({ ...prev, [index]: 'Error fetching elaboration. Please try again.' }));
    } finally {
      setLoadingInsight(null); // Clear loading state
    }
  };

  // Function to generate comparison summary
  const generateComparisonSummary = async () => {
    setLoadingComparison(true);
    setComparisonSummary(null); // Clear previous summary
    try {
      const chatHistory: ChatContent[] = [];
      const prompt = `Based on the following benefits of Smart Vision Glasses and limitations of Braille Books, provide a concise summary comparing them, emphasizing how Smart Vision Glasses address or overcome the limitations of Braille.

      Smart Vision Glasses Benefits:
      - Instant access to content in multiple languages, breaking language barriers in education.
      - Rotational use across grades, significantly maximizing the return on investment for schools.
      - Supports real-time reading, enabling immediate comprehension of text.
      - Facilitates navigation with voice guidance, enhancing independence and safety.
      - Includes object and face recognition, improving social interaction and environmental awareness.

      Braille Books Limitations:
      - Costly: Braille books are expensive to produce, placing a significant financial burden on families and institutions.
      - Limited Availability: Content in Braille is often scarce, limiting access to a wide range of educational materials.
      - Shared Resources: Books are frequently shared among students, which can restrict individual learning pace and access.
      - Storage and Wear & Tear: Require significant storage space and are prone to wear and tear, leading to frequent replacement costs.
      `;
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = ""; // Leave as empty string, Canvas will provide it at runtime
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // Check if the response is OK (status 200)
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Gemini API Error Response:", response.status, errorData);
        setComparisonSummary(`API Error: ${errorData.error?.message || 'Unknown error'}. Please try again.`);
        return;
      }

      const result: any = await response.json(); // Use 'any' for now, or define a more specific type if needed
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setComparisonSummary(text);
      } else {
        console.error("Gemini API response structure unexpected for comparison summary:", result);
        setComparisonSummary('Failed to generate summary. Please try again.');
      }
    } catch (error) {
      console.error("Error generating comparison summary:", error);
      setComparisonSummary('Error generating comparison summary due to network or other issue. Please try again.');
    } finally {
      setLoadingComparison(false);
    }
  };

  const strategicInsights = [
    'Cost savings of ₹45+ lakhs over 15 years.',
    'Eliminates Braille printing, storage, wear & tear.',
    'Instant access to content in multiple languages.',
    'Rotational use across grades maximizes ROI.',
    'Supports real-time reading, navigation, object & face recognition.',
  ];

  return (
    <section id='financials'>
    <div className="min-h-screen font-sans text-gray-900 p-4 sm:p-6 lg:p-8 max-w-screen-xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 rounded-lg p-3">
          Cost Analysis : <span style={{ color: "maroon" }}>Smart</span> Vision Pro v/s Braille Textbooks
        </h1>
        <p className="text-lg sm:text-xl text-red-800 max-w-3xl mx-auto">
          A Scalable Approach to Inclusive Education by Jaiwant Salvi Foundation
        </p>
      </header>

      {/* Model Assumptions Section */}
      <section className="mb-12 p-4 sm:p-6"> {/* Removed box styling */}
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Model Assumptions</h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-200"> {/* Added subtle styling to the table container */}
          <table className="min-w-full bg-white rounded-xl overflow-hidden">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-lg rounded-tl-xl">Parameter</th>
                <th className="py-3 px-4 text-left font-semibold text-lg">Braille Model</th>
                <th className="py-3 px-4 text-left font-semibold text-lg rounded-tr-xl">Smart Glasses Model</th>
              </tr>
            </thead>
            <tbody>
              {modelAssumptions.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-3 px-4 border-b border-gray-200 text-base font-medium">{row.parameter}</td>
                  <td className="py-3 px-4 border-b border-gray-200 text-base">{row.braille}</td>
                  <td className="py-3 px-4 border-b border-gray-200 text-base">{row.smartGlasses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 15-Year Institutional Cost Section */}
      <section ref={costComparisonRef} className="mb-12 p-4 sm:p-6"> {/* Removed box styling */}
        <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">15-Year Institutional Cost Comparison</h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          {/* Braille Model Pie Chart */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center"> {/* Added subtle styling to pie chart containers */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Braille Model Total: ₹{totalBrailleCost.toLocaleString('en-IN')}</h3>
            <ResponsiveContainer width="90%" height={300}>
              <PieChart>
                <Pie
                  data={brailleCostData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  isAnimationActive={animateCharts} // Conditionally activate animation
                  animationDuration={1500} // Animation duration
                >
                  {brailleCostData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={BRAILLE_COLORS[index % BRAILLE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip totalValue={totalBrailleCost} />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
              {brailleCostData.map((entry, index) => (
                <div key={`legend-braille-${index}`} className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: BRAILLE_COLORS[index % BRAILLE_COLORS.length] }}></span>
                  <span className="text-sm text-gray-700">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Glasses Model Pie Chart */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center"> {/* Added subtle styling to pie chart containers */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Smart Glasses Model Total: ₹{totalSmartGlassesCost.toLocaleString('en-IN')}</h3>
            <ResponsiveContainer width="90%" height={300}>
              <PieChart>
                <Pie
                  data={smartGlassesCostData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#82ca9d"
                  dataKey="value"
                  isAnimationActive={animateCharts} // Conditionally activate animation
                  animationDuration={1500} // Animation duration
                >
                  {smartGlassesCostData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={SMART_GLASSES_COLORS[index % SMART_GLASSES_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip totalValue={totalSmartGlassesCost} />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
              {smartGlassesCostData.map((entry, index) => (
                <div key={`legend-smartglasses-${index}`} className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: SMART_GLASSES_COLORS[index % SMART_GLASSES_COLORS.length] }}></span>
                  <span className="text-sm text-gray-700">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </section>

      {/* Strategic Insights Section */}
      <section className="mb-12 p-4 sm:p-6"> {/* Removed box styling */}
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Strategic Insights</h2>
        <br />
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 pl-4 bg-white p-6 rounded-xl shadow-md border border-gray-200"> {/* Added subtle styling to the list container */}
          {strategicInsights.map((insight, index) => (
            <li key={index} className="flex flex-col items-start">
              <div className="flex items-center w-full justify-between">
                <span>{insight}</span>
              </div>
              {elaborations[index] && (
                <p className="mt-2 p-3 bg-gray-50 rounded-md text-sm text-gray-600 border border-gray-200 w-full">
                  {elaborations[index]}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Comparison Table Section */}
      <section className="mb-12 p-4 sm:p-6">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Smart Vision Glasses vs. Braille Books: A Comparison</h2>
        <br />
        <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-200">
          <table className="min-w-full bg-white rounded-xl overflow-hidden">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-lg rounded-tl-xl">Feature</th>
                <th className="py-3 px-4 text-left font-semibold text-lg">Smart Vision Glasses</th>
                <th className="py-3 px-4 text-left font-semibold text-lg rounded-tr-xl">Braille Books</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-4 px-5 border-b border-gray-200 text-base font-medium">{row.feature}</td>
                  <td className="py-4 px-5 border-b border-gray-200 text-base">{row.smartGlasses}</td>
                  <td className="py-4 px-5 border-b border-gray-200 text-base">{row.braille}</td>
                </tr>
              ))}
              <br />
            </tbody>
          </table>
        </div>
      </section>
    </div>
    </section>
  );
};

export default Financials;
