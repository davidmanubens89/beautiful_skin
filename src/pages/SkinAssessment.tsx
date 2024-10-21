import React, { useState } from 'react';
import { Fingerprint, Target, Beaker, Sparkles } from 'lucide-react';

export const SkinAssessment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showRecommendations, setShowRecommendations] = useState(false);

  const keyFacts = [
    {
      icon: <Fingerprint className="w-8 h-8 text-indigo-600" />,
      title: "Unique Skin Profile",
      description: "Every person's skin is unique, requiring tailored care for optimal results."
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-600" />,
      title: "Targeted Solutions",
      description: "Knowing your skin type allows for precise targeting of specific skin concerns."
    },
    {
      icon: <Beaker className="w-8 h-8 text-indigo-600" />,
      title: "Ingredient Compatibility",
      description: "Different skin types react differently to ingredients, making personalization crucial."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-indigo-600" />,
      title: "Optimized Results",
      description: "A tailored approach leads to more effective and efficient skincare outcomes."
    }
  ];

  const questions = [
    { 
      id: 'age', 
      question: 'How old are you?', 
      options: ['Under 18', '18-24', '25-34', '35-44', '45-54', '55+'] 
    },
    { 
      id: 'skinType', 
      question: 'How would you describe your skin type?', 
      options: [
        { label: 'Dry', image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80' },
        { label: 'Oily', image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80' },
        { label: 'Combination', image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80' },
        { label: 'Normal', image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80' },
        { label: 'Sensitive', image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80' },
        { label: 'Acne-Prone', image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80' }
      ]
    },
    { id: 'concerns', question: 'What are your main skin concerns?', options: ['Acne', 'Aging', 'Hyperpigmentation', 'Dryness', 'Sensitivity'] },
    { id: 'allergies', question: 'Do you have any known allergies to skincare ingredients?', options: ['Yes', 'No', 'Not sure'] },
    { id: 'currentRoutine', question: 'How would you describe your current skincare routine?', options: ['Basic', 'Intermediate', 'Advanced', 'None'] }
  ];

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    setShowRecommendations(true);
  };

  const getRecommendedProducts = () => {
    // This is a simplified recommendation logic. In a real application, you'd have more complex logic or API calls.
    const products = [
      {
        name: "Gentle Hydrating Cleanser",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
        description: "A mild, soap-free cleanser that removes impurities without stripping the skin of its natural oils.",
        benefits: "Cleanses without drying, maintains skin's natural pH balance, suitable for all skin types."
      },
      {
        name: "Hyaluronic Acid Serum",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
        description: "A hydrating serum that helps attract and retain moisture in the skin.",
        benefits: "Intensely hydrates, plumps skin, reduces the appearance of fine lines."
      },
      {
        name: "Niacinamide Brightening Cream",
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
        description: "A lightweight cream that helps even out skin tone and improve skin texture.",
        benefits: "Reduces hyperpigmentation, minimizes pores, strengthens skin barrier."
      }
    ];

    return products.map(product => ({
      ...product,
      reason: `Based on your ${answers.skinType} skin type and concern with ${answers.concerns}, this ${product.name} is ideal for your skincare routine.`
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Why Does Not One Size Fit All?</h1>
      
      <div className="flex flex-wrap -mx-4 mb-12">
        {keyFacts.map((fact, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
            <div className="bg-white shadow-md rounded-lg p-6 h-full">
              <div className="flex items-center mb-4">
                {fact.icon}
                <h3 className="text-lg font-semibold text-gray-900 ml-3">{fact.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{fact.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skin and Treatment Goals Assessment</h2>
        <div className="flex space-x-6">
          {/* Question Categories */}
          <div className="w-1/4">
            {questions.map((q, index) => (
              <button
                key={q.id}
                onClick={() => setCurrentQuestion(index)}
                className={`w-full text-left px-4 py-2 mb-2 rounded-md transition-colors ${
                  currentQuestion === index
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {q.question}
              </button>
            ))}
          </div>

          {/* Current Question and Options */}
          <div className="w-1/2">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {questions[currentQuestion].question}
            </h3>
            <div className={`grid ${questions[currentQuestion].id === 'skinType' ? 'grid-cols-2 gap-4' : 'space-y-2'}`}>
              {Array.isArray(questions[currentQuestion].options) ? (
                questions[currentQuestion].options.map((option: string | { label: string; image: string }) => (
                  <button
                    key={typeof option === 'string' ? option : option.label}
                    onClick={() => handleAnswer(questions[currentQuestion].id, typeof option === 'string' ? option : option.label)}
                    className={`w-full text-left px-4 py-2 border rounded-md transition-colors ${
                      answers[questions[currentQuestion].id] === (typeof option === 'string' ? option : option.label)
                        ? 'bg-indigo-100 border-indigo-300 text-indigo-700'
                        : 'border-gray-300 hover:bg-gray-50'
                    } ${questions[currentQuestion].id === 'skinType' ? 'flex flex-col items-center' : ''}`}
                  >
                    {typeof option === 'string' ? (
                      option
                    ) : (
                      <>
                        <div className="relative w-full h-32 mb-2 overflow-hidden rounded-md group">
                          <img 
                            src={option.image} 
                            alt={option.label} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                        </div>
                        <span>{option.label}</span>
                      </>
                    )}
                  </button>
                ))
              ) : null}
            </div>
          </div>

          {/* Selected Answers */}
          <div className="w-1/4 bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Selected Answers</h3>
            {Object.keys(answers).length === 0 ? (
              <p className="text-gray-500">No answers selected yet.</p>
            ) : (
              <ul className="space-y-2">
                {Object.entries(answers).map(([questionId, answer]) => (
                  <li key={questionId} className="text-sm">
                    <span className="font-medium">{questions.find(q => q.id === questionId)?.question}:</span> {answer}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-8 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Get Your Personalized Routine
        </button>
      </div>

      {showRecommendations && (
        <div className="mt-12 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recommended Treatment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getRecommendedProducts().map((product, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  <h4 className="font-medium text-indigo-600 mb-2">Benefits:</h4>
                  <p className="text-sm text-gray-600 mb-4">{product.benefits}</p>
                  <h4 className="font-medium text-indigo-600 mb-2">Why it's recommended for you:</h4>
                  <p className="text-sm text-gray-600">{product.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkinAssessment;