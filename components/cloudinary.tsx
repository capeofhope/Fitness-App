import { useState } from 'react';

export default function UploadForm() {
  const [imageUrl, setImageUrl] = useState('');

  const handleUpload = async (event:any) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setImageUrl(data.secure_url);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
}
