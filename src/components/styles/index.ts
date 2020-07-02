import { css } from '@emotion/core';

const primaryColor = '#d4aa7d';
const primaryColorActive = '#cc9b66';
const primaryColorInactive = '#e6cdb2';

const linkBase = css`
  color: ${primaryColor};
`;

const primaryButtonBase = css`
  background-color: ${primaryColor};
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  min-width: 100px;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${primaryColorActive};
  }

  &:disabled {
    background-color: ${primaryColorInactive};
    cursor: not-allowed;
  }
`;

export { primaryColor, primaryColorActive, primaryColorInactive };
export { linkBase, primaryButtonBase };
