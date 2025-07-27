// src/pages/Dashboard/UploadSection.jsx
import React, { useState } from 'react';

const UploadSection = () => {
  const [file, setFile] = useState(null);

  return (
    <div className="p-6 rounded-xl shadow-md bg-white dark:bg-[#1f1f1f]">
      <h3 className="text-lg font-semibold mb-2">📤 Upload Images</h3>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-2" />
      {file && <p className="text-sm text-green-500">Selected: {file.name}</p>}
      <button
        className="mt-2 px-4 py-2 rounded-full bg-[#FFDDC1] hover:scale-105 transition"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadSection;
