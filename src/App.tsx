import React from 'react';
import styled from '@emotion/styled';

const App = () => <HelloContainer>하이하이d123</HelloContainer>;

export default App;

const HelloContainer = styled.div<{ color?: string }>`
  color: ${(props) => props.color || 'purple'};
`;
