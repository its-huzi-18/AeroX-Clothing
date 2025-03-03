import React from 'react';

interface SizeData {
  size: string;
  chest?: number; // Optional properties
  length?: number;
  shoulder?: number;
  sleeve?: number;
  [key: string]: any; // Allow additional dynamic properties
}

interface SizeTableProps {
  sizes: SizeData[];
}

const SizeTable: React.FC<SizeTableProps> = ({ sizes }) => {
  // Get all unique keys (columns) from the sizes data
  const columns = sizes.reduce((keys, size) => {
    Object.keys(size).forEach((key) => {
      if (!keys.includes(key)) {
        keys.push(key);
      }
    });
    return keys;
  }, [] as string[]);

  return (
    <div className="p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column) => (
              <th key={column} className="py-2 px-4 border capitalize">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sizes.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td key={column} className="py-2 px-4 border text-center">
                  {item[column] || '-'} {/* Display '-' if the property is missing */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm text-gray-600">
        Please note: All measurements are in inches and may vary slightly.
      </p>
    </div>
  );
};

export default SizeTable;