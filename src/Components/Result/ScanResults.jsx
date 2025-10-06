import React from 'react'

export default function ScanResults({ AIresponse , ingredientInfo }) {

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Scan Results
          </h1>
          <p className="text-xl text-gray-600">
            AI-powered analysis complete
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            AI Safety Summary
          </h2>
          <p className="text-green-800 text-lg leading-relaxed">
              {AIresponse}
          </p>
        </div>

        <div className="space-y-4">
          {ingredientInfo.map((ingredient, index) => (
            <div
              key={index}
              className={`border-l-4 rounded-xl bg-red-50  p-6 cursor-pointer transition-all hover:shadow-md`}
            >
              <div className="flex items-center  justify-between">
                <div className="flex-1">
                  <h3 className={`text-xl font-boldmb-2`}>
                    ingredient Name: {ingredient.ingredientName}
                  </h3>
                  <p className={` text-base`}>
                    Side Effect: {ingredient.sideEffects}
                  </p>
                  <p className={`text-base`}>
                    Banned In : {ingredient.bannedIn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}