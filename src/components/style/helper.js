import { css } from 'styled-components';
import { BREAK_POINTS } from '@common/constants';

const backgroundImgSetting = (width, height, position, size = 'cover') => css`
  width: ${width};
  height: ${height};
  background-position: ${position};
  background-size: ${size};
  background-repeat: no-repeat;
`;

const media = Object.keys(BREAK_POINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${BREAK_POINTS[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export { backgroundImgSetting, media };
