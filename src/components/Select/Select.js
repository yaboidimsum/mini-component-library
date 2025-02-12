import React, { useId } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectComponent value={value} onChange={onChange}>
        {children}
      </SelectComponent>
      <DisplaySelect>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id={`chevron-down`} size={24} strokeWidth={2} />
        </IconWrapper>
      </DisplaySelect>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const SelectComponent = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const DisplaySelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 52px;
  appearance: none;
  border-radius: 8px;
  border: none;
  width: 100%;

  ${SelectComponent}:focus + & {
    outline: 2px solid hsla(218, 57%, 53%, 1);
  }

  ${SelectComponent}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
`;

export default Select;
