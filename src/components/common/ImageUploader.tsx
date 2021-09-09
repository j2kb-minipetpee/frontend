import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { ColorMap } from '@/lib/constants/color';
import { makeImageFormData, uploadImage } from '@/lib/ImageUploadAPI';
import bigPlusIcon from '@/assets/images/plus_big.png';
interface ImageUploaderProps {
  id?: number;
  src?: string;
  width: string;
  height: string;
  handleImageChange: (targetImageUrl: string, targetDOMId?: number) => void;
  handleImageRemove: (targetDOMId?: number) => void;
}

export const ImageUploader = ({ width, height, handleImageChange, handleImageRemove, id, src }: ImageUploaderProps) => {
  const inputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(src);

  const handleRemoveClick = () => {
    setImagePreview(null);
    id ? handleImageRemove(id) : handleImageRemove();
  };

  const completeImageLoad = async () => {
    try {
      if (inputRef.current.files && inputRef.current.files[0]) {
        const newImage = makeImageFormData(inputRef.current.files[0]);
        const imageUrl = await uploadImage(newImage);
        id ? handleImageChange(imageUrl, id) : handleImageChange(imageUrl);
        setImagePreview(imageUrl);
      }
    } catch (error) {
      console.log(error);
      alert('fail image load');
    }
  };

  return (
    <ImageUploaderContainer width={width} height={height}>
      <RemoveImageButton onClick={handleRemoveClick}>x</RemoveImageButton>

      {imagePreview ? <PreviewImage src={imagePreview} /> : <PlusShapedBox src={bigPlusIcon} />}
      <ImageUploaderInput type="file" accept="image/*" onChange={completeImageLoad} ref={inputRef} />
    </ImageUploaderContainer>
  );
};

const ImageUploaderContainer = styled.section<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border: 1px solid ${ColorMap.GREY70};
`;

const RemoveImageButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${ColorMap.WHITE100};
  background: ${ColorMap.EMERALD100};
  border: none;
  outline: none;
  z-index: 4;
`;

const PlusShapedBox = styled.img`
  width: 90px;
  height: 90px;
  position: absolute;
  z-index: 1;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  // 넘치면... overflow로 처리하지 뭐
`;

const ImageUploaderInput = styled.input`
  width: 100%;
  height: 100%;
  background: ${ColorMap.EMERALD50};
  z-index: 3;
  opacity: 0;
`;
