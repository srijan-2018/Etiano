import React, { useState } from 'react';
import axios from 'axios';

const ImgUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imgUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedImage, selectedImage.name);

    axios
      .post('https://ims.achievexsolutions.in/api/image', formData, {
        onUploadProgress: (progressEvent) => {
          console.log(progressEvent.loaded / progressEvent.total);
        },
      })
      .then((res) => {
        console.log(res.data);
      });

    // setSelectedImage(null);

    // axios.post('https://ims.achievexsolutions.in/api/image', selectedImage);
  };

  return (
    <div className='container flex justify-center items-center'>
      <div className='max-w-3xl mx-auto rounded-md bg-secondary p-5'>
        <div>
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt=''
              width={'300px'}
            />
          )}
        </div>

        <form>
          <input
            type='file'
            name='image'
            onChange={(e) => {
              console.log(e.target.files[0]);
              setSelectedImage(e.target.files[0]);
            }}
            required
          />

          <button
            type='submit'
            className='w-full px-8 py-2 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg mb-7 md:mb-12 hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'
            onClick={imgUpload}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImgUpload;
