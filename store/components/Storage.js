import React, { useState, useEffect } from 'react';
import { R2 } from '@cloudflare/r2';

const Storage = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    // Fetch files from Cloudflare R2
    const fetchFiles = async () => {
      try {
        const r2 = new R2({ bucket: 'magrinfo-store' });
        const response = await r2.listObjects();
        setFiles(response.objects);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);

    try {
      const r2 = new R2({ bucket: 'magrinfo-store' });
      await r2.putObject(file.name, file);
      setFiles((prevFiles) => [...prevFiles, { key: file.name }]);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Storage</h1>
      <input type="file" onChange={handleUpload} disabled={uploading} />
      <ul>
        {files.map((file) => (
          <li key={file.key}>{file.key}</li>
        ))}
      </ul>
    </div>
  );
};

export default Storage;
