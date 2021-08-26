import { ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React, { useRef } from 'react';
export const WriteLayout = () => {
  const previousImg = useRef(null);

  const handleChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        previousImg.current.src = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <WriteContainer>
      <WriteTitle />
      <WriteImageUpload>
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '50%', height: '100%', position: 'absolute', background: `${ColorMap.EMERALD50}`, zIndex: -2 }}></div>
          <WriteImageInput type="file" accept="image/*" onChange={handleChange} />
          <PreviousImage ref={previousImg} />
        </div>
      </WriteImageUpload>
      <WriteContent rows={30} />
      <button
        onClick={() => {
          alert('ho');
        }}
      >
        글쓰기
      </button>
    </WriteContainer>
  );
};

const WriteImageInput = styled.input`
  position: absoulte;
  width: 50%;
  height: 100%;
  opacity: 0;
  top: 50%;
  left: 50%;
  z-index: 0;
`;

const PreviousImage = styled.img`
  width: 50%;
  position: absolute;
  z-index: -1;
`;

const WriteImageUpload = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 50vh;
  overflow: hidden;
`;

const WriteContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WriteTitle = styled.input`
  width: 50%;
  border: 0;
  border-bottom: 2px solid;
  :focus {
    border: 2px solid;
  }
`;

const WriteContent = styled.textarea`
  width: 50%;
  vertical-align: top;
`;
