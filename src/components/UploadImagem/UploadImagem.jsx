import React, { useContext, useState } from 'react';

import { BoletimContext } from "../../Context/BoletimContext";
import { Button, Form } from 'react-bootstrap';

const UploadImagem = () => {
    const { boletim, setBoletim } = useContext(BoletimContext);

    
    const [selectedImages, setSelectedImages] = useState([]);
    const [captions, setCaptions] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
  
    const handleImageChange = (event) => {
      const files = event.target.files;
  
      if (files.length + selectedImages.length > 4) {
        console.log('Você pode fazer upload de no máximo 4 imagens.');
        return;
      }
  
      const newCaptions = Array.from({ length: files.length }, () => '');
      setCaptions([...captions, ...newCaptions]);
  
      const newImageData = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImageData.push({
            file: files[i],
            caption: newCaptions[i],
            preview: reader.result,
          });
          if (newImageData.length === files.length) {
            setBoletim((boletim) => ({
              ...boletim,
              images: [...boletim.images, ...newImageData],
            }));
            setPreviewImages([...previewImages, ...newImageData]);
          }
        };
        reader.readAsDataURL(files[i]);
      }
  
      setSelectedImages([...selectedImages, ...files]);
    };
  
    const handleCaptionChange = (imageIndex, event) => {
      const newCaptions = [...captions];
      newCaptions[imageIndex] = event.target.value;
  
      setCaptions(newCaptions);
  
      setBoletim((prevBoletim) => ({
        ...prevBoletim,
        images: prevBoletim.images.map((image, idx) =>
          idx === imageIndex ? { ...image, caption: event.target.value } : image
        ),
      }));
    };
  
    const removeImage = (imageIndex) => {
      const newSelectedImages = [...selectedImages];
      const newCaptions = [...captions];
      const newPreviewImages = [...previewImages];
  
      newSelectedImages.splice(imageIndex, 1);
      newCaptions.splice(imageIndex, 1);
      newPreviewImages.splice(imageIndex, 1);
  
      setSelectedImages(newSelectedImages);
      setCaptions(newCaptions);
  
      setBoletim((prevBoletim) => ({
        ...prevBoletim,
        images: prevBoletim.images.filter((_, idx) => idx !== imageIndex),
      }));
  
      setPreviewImages(newPreviewImages);
    };
  
    // const handleUpload = async () => {
      // Lógica de upload aqui, usando boletim.images
  
      // Exemplo fictício de envio para o backend:
      // const formData = new FormData();
      // boletim.images.forEach((imageData) => {
      //   formData.append('images', imageData.file);
      //   formData.append('captions', imageData.caption);
      // });
  
      // try {
      //   const response = await fetch('URL_DO_SEU_BACKEND/upload', {
      //     method: 'POST',
      //     body: formData,
      //   });
  
      //   if (response.ok) {
      //     console.log('Upload bem-sucedido!');
      //     setPreviewImages([]);
      //     setSelectedImages([]);
      //     setCaptions([]);
      //     setBoletim({ ...boletim, images: [] });
      //   } else {
      //     console.error('Falha no upload.');
      //   }
      // } catch (error) {
      //   console.error('Erro ao enviar as imagens:', error);
      // }
    // };
  
    return (
      <div>
        
        {boletim.images?.map((imageData, imageIndex) => (
          <div key={imageIndex} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
            <img src={imageData.preview} alt={`Imagem ${imageIndex}`} style={{ maxWidth: '300px', maxHeight: '300px', marginRight: '10px', marginBottom:'5px' }} />
            <Form.Control
              style={{marginBottom: '6px' }}
              type="text"
              value={imageData.caption}
              placeholder="Legenda da foto anexada"
              onChange={(e) => handleCaptionChange(imageIndex, e)}
            />
            <Button variant="danger" onClick={() => removeImage(imageIndex)}>Remover</Button>
          </div>
        ))}
        {selectedImages.length < 4 && (
          <div>
            <input type="file" onChange={handleImageChange} accept="image/*" />
          </div>
        )}
        {/* {selectedImages.length > 0 && <button onClick={handleUpload}>Enviar Imagens</button>} */}
      </div>
    );
  };
  
  export default UploadImagem;