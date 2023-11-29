import React from 'react';
import StyledComponentContainer from './StyledComponentsExample.styles';

const StyledComponentsExample = ({ isPrimary }) => {
  return (
    <StyledComponentContainer isPrimary={isPrimary}>
      <p>Styled Components Example</p>
    </StyledComponentContainer>
  );
};

export default StyledComponentsExample;
