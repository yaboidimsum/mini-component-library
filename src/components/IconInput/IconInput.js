import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { Search } from "react-feather";

const SIZES = {
  small: {
    "--font-family": "Roboto",
    "--font-weight": "700",
    "--font-size": "14px",
    "--line-height": "16.41px",
    "--letter-spacing": "0%",
    "--icon-size": 16,
    "--bottom-solid": "1px",
    "--padding": "4px",
    "--padding-left": "24px",
  },
  large: {
    "--font-family": "Roboto",
    "--font-weight": "700",
    "--font-size": "18px",
    "--line-height": "21.09px",
    "--letter-spacing": "0%",
    "--icon-size": 24,
    "--bottom-solid": "2px",
    "--padding": "8px",
    "--padding-left": "36px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const Styles = SIZES[size];

  return (
    <>
    <Label>{label}</Label>
      <VisuallyHidden>Icon Input</VisuallyHidden>
      <InputWrapper style={Styles}>
        <IconWrapper
          style={{
            width: Styles["--icon-size"] + "px",
            height: Styles["--icon-size"] + "px",
          }}
        >
          <Icon id={icon} size={Styles["--icon-size"]} strokeWidth={2} />
        </IconWrapper>
        <Input width={width} type="text" placeholder={placeholder} />
        <Hr />
      </InputWrapper>
    </>
  );
};

const Hr = styled.hr`
  border: var(--bottom-solid) solid ${COLORS.black};
  border-radius: 999px;
  position: absolute;
  width: 100%;
  bottom: -8px;
`;

const IconWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  margin: auto;
  width: var(--icon-size);
  height: var(--icon-size);
  color: ${COLORS.gray700};
`;

const Input = styled.input`
  padding: var(--padding);
  padding-left: var(--padding-left);
  border: none;
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--letter-spacing);
  width: ${(props) => props.width + "px"};
  color: ${COLORS.gray700};
  background: transparent;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 2px;
    border-radius: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: fit-content;

  &:hover ${IconWrapper} {
    color: ${COLORS.black};
  }
`;

const Label = styled.label`
  display: block;
  padding-bottom: 8px;
`;

export default IconInput;
