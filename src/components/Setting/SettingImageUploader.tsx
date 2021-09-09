import styled from '@emotion/styled';
import React, { useRef } from 'react';
import bigPlusIcon from '@/assets/images/plus_big.png';
import { makeImageFormData, uploadImage } from '@/lib/ImageUploadAPI';

type UploaderType = 'profile' | 'gate';

interface SettingImageUploaderProps {
  imageUrl?: string;
  onChange: (value: string) => void;
  type: UploaderType;
}

export const SettingImageUploader = ({ imageUrl, onChange, type }: SettingImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClickArea = () => {
    inputRef.current?.click();
  };

  const completeImageLoad = async () => {
    try {
      if (inputRef.current.files && inputRef.current.files[0]) {
        const newImage = makeImageFormData(inputRef.current.files[0]);
        const imageUrl = await uploadImage(newImage);
        onChange(imageUrl);
      }
    } catch (error) {
      console.log(error);
      alert('fail image load');
    }
  };

  return (
    <UploaderContainer type={type} onClick={onClickArea}>
      {imageUrl ? <ImageWrapper src={imageUrl} type={type} alt="image" /> : <PlusShapedBox src={bigPlusIcon} />}
      <input ref={inputRef} hidden type="file" onChange={completeImageLoad} />
    </UploaderContainer>
  );
};

const UploaderContainer = styled.div<{ type: UploaderType }>`
  border: ${({ type }) => (type === 'profile' ? 'none' : '1px dotted #B6BCC5')};
  width: ${({ type }) => (type === 'profile' ? '90px' : '633px')};
  height: ${({ type }) => (type === 'profile' ? '90px' : '94px')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ImageWrapper = styled.img<{ type: UploaderType }>`
  width: 100%;
  height: 100%;
  border-radius: ${({ type }) => (type === 'profile' ? '50%' : '0')};
`;

const PlusShapedBox = styled.img`
  width: 90px;
  height: 90px;
  position: absolute;
  z-index: 1;
`;
