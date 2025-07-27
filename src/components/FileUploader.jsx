// src/components/FileUploader.jsx
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

const FileUploader = () => {
  const { user } = useAuth();
  const [fileURL, setFileURL] = useState(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const filePath = `uploads/${user?.id || 'anon'}/${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage.from('uploads').upload(filePath, file);
    if (error) {
      alert('Upload failed: ' + error.message);
      return;
    }
    const { data: publicUrlData } = supabase.storage.from('uploads').getPublicUrl(data.path);
    setFileURL(publicUrlData.publicUrl);
  };

  return (
    <div className="mt-6">
      <label className="block text-sm font-medium">Upload Selfie or Outfit:</label>
      <input type="file" onChange={handleUpload} className="mt-2" />
      {fileURL && <p className="text-green-500 mt-2">✅ Uploaded! <a href={fileURL} target="_blank" rel="noreferrer" className="underline">View</a></p>}
    </div>
  );
};

export default FileUploader;
