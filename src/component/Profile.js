import React, { useState } from 'react';

const ImageUpload = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
    const reader = new FileReader();
    reader.onload = () => {
    setImage(reader.result);
    };
    reader.readAsDataURL(file);
    }
    };

    return (
    <div>
    <input
    type="file"
    id="upload"
    accept="image/*"
    style={{ display: 'none' }}
    onChange={handleImageChange}
    />
    <button onClick={() => document.getElementById('upload').click()}>
    Upload Image
    </button>
    {image && <img src={image} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
    </div>
    );
};

export default ImageUpload;