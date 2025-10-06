import React, { useState, useRef } from 'react';
import { Upload, Image, X } from 'lucide-react';
import "../AnimateborderCard.css"

export default function AnimatedBorderCard({setselectedFile}) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result); 
        setUploadedImage({ url: e.target.result, name: file.name, size: file.size });
        setselectedFile(file)
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className='w-[500px] h-[500px] bg-white border-dashed border-2 hover:border-primary border-gray-300 rounded-2xl duration-300 '>
      <div className='h-full overflow-hidden p-2 relative'>
        <div className=' h-full bg-white rounded-xl'>
          <div className='h-full p-.5 '>
            {!uploadedImage ? (
              <div
                className={`h-full rounded-xl transition-all duration-300 cursor-pointer
                  ${isDragOver
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleClick}
              >
                <div className='h-full flex flex-col items-center justify-center text-center'>
                  <div className={`mb-4 p-4 rounded-full transition-colors duration-300
                    ${isDragOver ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    <Upload className={`w-8 h-8 transition-colors duration-300
                      ${isDragOver ? 'text-blue-500' : 'text-gray-500'}`} />
                  </div>

                  <h3 className='text-lg font-semibold text-gray-700 mb-2'>
                    {isDragOver ? 'Drop your image here' : 'Upload Image'}
                  </h3>

                  <p className='text-sm text-gray-500 mb-4'>
                    Drag and drop your image here, or{' '}
                    <span className='text-blue-500 font-medium'>click to browse</span>
                  </p>

                  <div className='flex items-center gap-2 text-xs text-gray-400'>
                    <Image className='w-4 h-4' />
                    <span>PNG, JPG up to 10MB</span>
                  </div>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className='hidden'
                />
              </div>
            ) : (
              <div className='h-full relative rounded-xl overflow-hidden bg-gray-50'>
                <button
                  onClick={removeImage}
                  className='absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200'
                >
                  <X className='w-4 h-4 text-gray-600' />
                </button>

                <div className='h-full flex flex-col'>
                  <div className='flex-1 flex items-center justify-center p-4'>
                    <img
                      src={uploadedImage.url}
                      alt={uploadedImage.name}
                      className='max-w-full max-h-full object-contain rounded-lg shadow-md'
                    />
                  </div>

                  <div className='p-4 bg-white border-t border-gray-200'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <p className='font-medium text-gray-900 truncate'>
                          {uploadedImage.name}
                        </p>
                        <p className='text-sm text-gray-500'>
                          {formatFileSize(uploadedImage.size)}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}