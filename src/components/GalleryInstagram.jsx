import React from 'react';

const GalleryInstagram = () => {
  const images = [
    '/Images/gallery1.png',
    '/Images/gallery1.png',
    '/Images/gallery1.png',
    '/Images/gallery1.png',
    '/Images/gallery1.png',
    '/Images/gallery1.png',
    '/Images/gallery1.png',
    '/Images/gallery1.png',
    '/Images/gallery1.png',
    '/Images/gallery1.png',
    '/Images/gallery1.png',
    '/Images/gallery1.png',
  ];


  return (
    <div className="grid grid-cols-6 gap-4 p-4 px-0 mx-auto">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative ${
            index % 2 !== 0 ? 'translate-y-10' : ''
          }`}
        >
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryInstagram;
