import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <SelectUI>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={2} size={24} />
        </IconWrapper>
      </SelectUI>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const SelectUI = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.gray700};
  padding: 12px 16px;
  width: fit-content;
  display: flex;
  align-items: center;

  ${NativeSelect}:focus + & {
    outline: 1px dotted ${COLORS.black};
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  margin-left: 18px;
`;

export default Select;
