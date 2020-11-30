import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
  padding: 10px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  max-height: 90vh;
  gap: 10px;
`;

const Settings = () => {
  return <Display>Settings</Display>;
};

export { Settings };
