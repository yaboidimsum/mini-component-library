/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0px",
  },
  large: {
    "--height": "20px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const Styles = SIZES[size];

  return (
    <ProgressWrapper style={Styles}>
      <VisuallyHidden>Progress Bar</VisuallyHidden>
      <ProgressBase value={value} max={100} />
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  width: 370px;
  height: var(--height);
  position: relative;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressBase = styled.progress`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  position: absolute;
  padding: var(--padding);

  &::-webkit-progress-bar {
    background: transparent;
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${(props) =>
      props.value === 100.0 ? "4px" : "4px 0px 0px 4px"};
  }
`;

export default ProgressBar;
