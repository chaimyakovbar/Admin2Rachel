import React, { useState } from 'react';

function AddImage({ image, setImage }) {
  // const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      // const reader = new FileReader();
      // reader.onload = () => {
      //   setImagePreview(reader.result);
      // };
      // reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {/* {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '100px', height: '100px' }} />} */}
    </div>
  );
}

export default AddImage;
