import React from 'react';
import { Sun, Moon } from 'lucide-react';

export const DailyRoutine: React.FC = () => {
  // This would typically come from your backend based on the user's assessment
  const morningRoutine = [
    { id: 1, step: "Cleanse", product: "Gentle Foaming Cleanser", time: "2 minutes" },
    { id: 2, step: "Tone", product: "Hydrating Toner", time: "30 seconds" },
    { id: 3, step: "Serum", product: "Vitamin C Serum", time: "1 minute" },
    { id: 4, step: "Moisturize", product: "Lightweight Day Cream", time: "1 minute" },
    { id: 5, step: "Sunscreen", product: "Broad Spectrum SPF 50", time: "1 minute" }
  ];

  const eveningRoutine = [
    { id: 1, step: "Cleanse", product: "Oil-based Cleanser", time: "2 minutes" },
    { id: 2, step: "Exfoliate", product: "Gentle AHA/BHA Exfoliant", time: "1 minute" },
    { id: 3, step: "Tone", product: "Hydrating Toner", time: "30 seconds" },
    { id: 4, step: "Treat", product: "Retinol Serum", time: "1 minute" },
    { id: 5, step: "Moisturize", product: "Rich Night Cream", time: "1 minute" }
  ];

  const RoutineList = ({ routine, icon }) => (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        {icon}
        <span className="ml-2">{icon === <Sun /> ? "Morning" : "Evening"} Routine</span>
      </h2>
      <ul className="space-y-4">
        {routine.map((item) => (
          <li key={item.id} className="flex items-start">
            <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full text-indigo-800 font-semibold mr-4">
              {item.id}
            </span>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{item.step}</h3>
              <p className="text-gray-600">{item.product}</p>
              <p className="text-sm text-gray-500">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Daily Skincare Routine</h1>
      
      <RoutineList routine={morningRoutine} icon={<Sun className="w-6 h-6 text-yellow-500" />} />
      <RoutineList routine={eveningRoutine} icon={<Moon className="w-6 h-6 text-indigo-500" />} />
      
      <div className="bg-indigo-50 rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Routine Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-indigo-800">
          <li>Always apply products from thinnest to thickest consistency.</li>
          <li>Wait about 1 minute between each step to allow products to absorb.</li>
          <li>Don't forget to patch test new products before adding them to your routine.</li>
          <li>Consistency is key - stick to your routine for best results!</li>
        </ul>
      </div>
    </div>
  );
};