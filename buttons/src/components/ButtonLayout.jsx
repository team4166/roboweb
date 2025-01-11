import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

const ButtonLayout = () => {
  const [image, setImage] = useState(null);
  const [numButtons, setNumButtons] = useState(12);
  const printRef = useRef();

  // Constants for button dimensions (in inches)
  const BUTTON_DIAMETER = 2.25;
  const BLEED = 0.125; // 1/8 inch bleed
  const TOTAL_DIAMETER = BUTTON_DIAMETER + (BLEED * 2);
  
  // Convert to pixels (assuming 96 DPI)
  const DPI = 96;
  const BUTTON_PX = Math.round(BUTTON_DIAMETER * DPI);
  const TOTAL_PX = Math.round(TOTAL_DIAMETER * DPI);
  const BLEED_PX = Math.round(BLEED * DPI);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4">
      <div className="mb-6 space-y-4">
        <div className="flex items-center space-x-4">
          <label className="flex items-center px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600">
            <Upload className="w-4 h-4 mr-2" />
            Upload Image
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
          <div className="flex items-center space-x-2">
            <label htmlFor="numButtons">Buttons per page:</label>
            <input
              type="number"
              id="numButtons"
              className="border rounded px-2 py-1 w-20"
              value={numButtons}
              onChange={(e) => setNumButtons(Math.max(1, parseInt(e.target.value) || 1))}
            />
          </div>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            disabled={!image}
          >
            Print Layout
          </button>
        </div>
        
        {!image && (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <p className="text-gray-500">Upload an image to begin</p>
          </div>
        )}
      </div>

      <div ref={printRef} className="w-full">
        {image && (
          <div className="grid grid-cols-3 gap-4 p-4">
            {Array.from({ length: numButtons }).map((_, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  width: TOTAL_PX,
                  height: TOTAL_PX,
                }}
              >
                {/* Bleed area indicator (only visible in preview) */}
                <div className="absolute inset-0 border border-red-300 rounded-full print:hidden" />
                
                {/* Button circle with image */}
                <div
                  className="absolute rounded-full overflow-hidden"
                  style={{
                    top: BLEED_PX,
                    left: BLEED_PX,
                    width: BUTTON_PX,
                    height: BUTTON_PX,
                  }}
                >
                  <img
                    src={image}
                    alt={`Button ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
          }
          .print-hide {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ButtonLayout;
