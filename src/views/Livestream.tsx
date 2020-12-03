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

const Livestream = () => {
  return (
    <Display>
      <a
        href="https://a26800f830c2.ngrok.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Livestream
      </a>
    </Display>
  );
};

export { Livestream };
