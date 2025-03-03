"use client";
import { useState } from 'react';
import SizeTable from '../components/SizeTable'; // Import your SizeTable component

// Define the props interface
interface ShirtGuideProps {
  category: string;
}

// Define the type for categoryContent
type CategoryContent = {
  [key: string]: {
    description: string;
    sizes: {
      size: string;
      chest?: number;
      length?: number;
      shoulder?: number;
      sleeve?: number;
      [key: string]: any; // Allow additional dynamic properties
    }[];
  };
};

// Define the content for each category
const categoryContent: CategoryContent = {
  "t-shirts":{
    description: `
      This t-shirt is exactly what you’ve imagined and even better. It’s soft, light, and has the right stretch. It’s comfy and looks good on everyone, plus it’s made of 100% pure cotton.
      <ul class="list-disc pl-5 mt-2">
        <li>Product Type (100% Cotton)</li>
        <li>Fabric weight: 150-160 gsm</li>
        <li>Pre-shrunk fabric</li>
        <li>Side-seamed construction</li>
        <li>Shoulder-to-shoulder taping</li>
        <li>Blank product sourced from Pakistan.</li>
      </ul>
    `,
    sizes: [
      { size: 'S', chest: 19, length: 28, shoulder: 16, sleeve: 9 },
      { size: 'M', chest: 21, length: 29, shoulder: 16, sleeve: 9 },
      { size: 'L', chest: 22, length: 30, shoulder: 17, sleeve: 9.5 },
      { size: 'XL', chest: 23, length: 30, shoulder: 20, sleeve: 9.5 },
      { size: 'XXL', chest: 25, length: 31, shoulder: 20, sleeve: 11 },
    ],
  },
  "drop-shoulder": {
    description: `
      This t-shirt is everything you’ve dreamed of and more. It feels soft and lightweight, with the right amount of stretch. It’s comfortable and flattering for all.
      <ul class="list-disc pl-5 mt-2">
        <li>Product Type(60% Polyester and 40% Cotton)</li>
        <li>Fabric weight: 150 gsm</li>
        <li>Pre-shrunk fabric</li>
        <li>Side-seamed construction</li>
        <li>Shoulder-to-shoulder taping</li>
        <li> Blank product sourced from Pakistan.</li>
      </ul>
    `,
    sizes: [
      { size: 'S', length: 27,chest: 21, shoulder: 22,sleeve:8.5 },
      { size: 'M', length: 28,chest: 22, shoulder: 23,sleeve:9 },
      { size: 'L', length: 29,chest: 23, shoulder: 24,sleeve:9 },
      { size: 'XL', length: 30,chest: 24, shoulder: 26,sleeve:10 },
    ],
  },
  drifit: {
    description: `
      This Drifit t-shirt is everything you’ve dreamed of and more. It feels soft and lightweight, with the right amount of stretch. It’s comfortable and flattering for all.
      <ul class="list-disc pl-5 mt-2">
        <li>Product Type(100% Polyster)</li>
        <li>Fabric weight: 150 gsm</li>
        <li>Pre-shrunk fabric</li>
        <li>Side-seamed construction</li>
        <li>Shoulder-to-shoulder taping</li>
        <li>Blank product sourced from Pakistan.</li>
      </ul>
    `,
    sizes: [
        { size: 'M', length: 26,chest: 20,},
        { size: 'L', length: 27,chest: 21,},
        { size: 'XL', length: 28,chest: 22,},
    ],
  },
  "polo-shirts":{
    description: `
    Add a touch of class to your wardrobe with our Unisex Pique Polo Shirt. Crafted from cotton pique, its durable, textured fabric is comfortable and made to last. The relaxed fit, classic collar, and dyed-to-match buttons give it a smart, casual style. Wear it to work or in your free time—this polo shirt is truly an everyday staple.
      <ul class="list-disc pl-5 mt-2">
        <li>40% ring-spun cotton</li>
        <li>60% polyester</li>
        <li>Fabric weight: 150 GSM</li>
        <li>Semi-fitted</li>
        <li>Side-seamed construction</li>
        <li>Placket with dyed-to-match buttons</li>
        <li>Blank product sourced from Pakistan.</li>
      </ul>
    `,
    sizes: [
        { size: 'S', length: 26,width: 19,},
        { size: 'M', length: 27,width: 20,},
        { size: 'L', length: 28,width: 21,},
        { size: 'XL', length: 29,width: 22,},
      ], // Replace with the appropriate size guide for hoodies
  },
  "sweat-shirt":{
    description: `
 A sturdy and warm sweatshirt bound to keep you warm in the colder months. A pre-shrunk, classic fit sweater that’s made with air-jet spun yarn for a soft feel and reduced pilling.
      <ul class="list-disc pl-5 mt-2">
        <li>40% cotton, 60% polyester,  Fabric weight: 220 gsm</li>
        <li>Pre-shrunk</li>
        <li>Classic fit</li>
        <li>1×1 athletic rib knit collar with spandex</li>
        <li> Air-jet spun yarn with a soft feel and reduced pilling</li>
        <li> Double-needle stitched collar, shoulders, armholes, cuffs, and hem</li>
      </ul>
    `,
    
    sizes: [
        { size: 'XS', length: 26, width: 19 },
        { size: 'S', length: 26, width: 21 },
        { size: 'M', length: 27, width: 21 },
        { size: 'L', length: 28, width: 22 },
        { size: 'XL', length: 30, width: 26 },
        { size: '2XL', length: 31, width: 26 },
      ], // Replace with the appropriate size guide for hoodies
  },
  // Add more categories as needed
};

const ShirtGuide: React.FC<ShirtGuideProps> = ({ category }) => {
  // State to manage which section is visible
  const [activeSection, setActiveSection] = useState('description');

  // State to manage "See More" functionality for the paragraph text
  const [showFullParagraph, setShowFullParagraph] = useState(false);

  // Get the content for the current category
  const content = categoryContent[category] || categoryContent["t-shirts"]; // Fallback to t-shirts if category is not found

  // Paragraph text with HTML
  const paragraphText = content.description;

  // Truncated text (first 220 characters for example)
  const truncatedText = paragraphText.slice(0, 220) + '...';

  return (
    <div className="mt-2">
      {/* Heading Buttons */}
      <div className="flex space-x-4 border-b mb-4">
        <button
          className={`py-2 px-4 font-semibold text-lg ${
            activeSection === 'description'
              ? 'border-b-2 border-blue-500'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveSection('description')}
        >
          Description
        </button>
        <button
          className={`py-2 px-4 font-semibold text-lg ${
            activeSection === 'sizeGuide'
              ? 'border-b-2 border-blue-500'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveSection('sizeGuide')}
        >
          Size Guide
        </button>
      </div>

      {/* Description Section */}
      {activeSection === 'description' && (
        <div>
          {/* Paragraph Text with "See More" and "See Less" */}
          <div
            dangerouslySetInnerHTML={{
              __html: showFullParagraph ? paragraphText : truncatedText,
            }}
          />
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setShowFullParagraph(!showFullParagraph)}
          >
            {showFullParagraph ? 'See Less' : 'See More'}
          </button>
        </div>
      )}

      {/* Size Guide Section */}
      {activeSection === 'sizeGuide' && (
        <div>
          <SizeTable sizes={content.sizes} />
        </div>
      )}
    </div>
  );
};

export default ShirtGuide;