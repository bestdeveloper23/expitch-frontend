import axios from 'axios';

const url = 'https://api.example.com/data';

axios.get(url, {
  onDownloadProgress: progressEvent => {
    const progress = (progressEvent.loaded / progressEvent.total) * 100;
    console.log(`Download Progress: ${progress.toFixed(2)}%`);
  }
})
  .then(response => {
    // Process the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });

  


  //---------------------------file uploader----------------------------------


  import React from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader = () => {
  const onDrop = (acceptedFiles) => {
    // Handle the dropped files
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here...</p> :
            <p>Drag and drop files here, or click to select files</p>
        }
      </div>
      <button type="button" onClick={() => document.getElementById('fileInput').click()}>
        Upload File
      </button>
      <input id="fileInput" type="file" onChange={(e) => onDrop(e.target.files)} style={{ display: 'none' }} />
    </div>
  );
};

export default FileUploader;


//----------------------------------api-endpoint-------------------------
const sendEmailWithMP4 = async (email, mp4File) => {
 const formData = new FormData();
 formData.append('email', email);
 formData.append('file', mp4File);

 try {
   const response = await fetch('your-api-endpoint', {
     method: 'POST',
     body: formData,
   });

   if (response.ok) {
     // Request was successful
     console.log('Email sent successfully!');
   } else {
     // Request failed
     console.log('Failed to send email.');
   }
 } catch (error) {
   // Error occurred during the request
   console.error('Error sending email:', error);
 }
};


//---------------------------------------tota-----------------------------------\

import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = () => {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('file', file);

    axios.post('https://api.example.com/upload', formData, {
      onUploadProgress: (progressEvent) => {
        const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        setUploadProgress(progress);
      },
    })
      .then((response) => {
        // Handle the response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter email" />
      <input type="file" onChange={handleFileChange} />
      <button type="button" onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
    </div>
  );
};

export default FileUploader;


//-----------------------------------


import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = () => {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleUpload = () => {
    if (!validateEmail()) {
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('file', file);

    axios.post('https://api.example.com/upload', formData, {
      onUploadProgress: (progressEvent) => {
        const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        setUploadProgress(progress);
      },
    })
      .then((response) => {
        // Handle the response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter email"
      />
      {emailError && <p>{emailError}</p>}
      <input type="file" onChange={handleFileChange} />
      <button type="button" onClick={handleUpload}>
        Upload
      </button>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
    </div>
  );
};

export default FileUploader;
