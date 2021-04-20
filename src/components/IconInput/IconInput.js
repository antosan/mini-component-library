import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    iconSize: 16,
    iconStrokeWidth: 1,
    textPaddingLeft: 24,
    borderWidth: 1,
  },
  large: {
    iconSize: 24,
    iconStrokeWidth: 2,
    textPaddingLeft: 36,
    borderWidth: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  return (
    <Wrapper style={{ '--width': width + 'px' }}>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={styles.strokeWidth} />
      </IconWrapper>
      <Input
        placeholder={placeholder}
        style={{ '--paddingLeft': styles.textPaddingLeft + 'px', '--borderWidth': styles.borderWidth + 'px' }}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  color: ${COLORS.gray700};
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;

  ${Wrapper}:hover > & {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  border-radius: 0;
  height: var(--paddingLeft);
  width: 100%;
  padding-left: var(--paddingLeft);
  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: ${14 / 16}rem;
  line-height: ${16 / 16}rem;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-width: 2px;
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
