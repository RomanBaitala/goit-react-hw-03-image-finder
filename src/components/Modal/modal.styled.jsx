import styled from 'styled-components';
import { ImCross } from 'react-icons/im';

export const Overlay = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalS = styled('div')`
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
`;

export const ExitCross = styled(ImCross)`
  position: absolute;
  padding: 4px;
  fill: #fff;
  background-color: black;
  border-radius: 16px;
  right: 0;
  margin: 10px;
  opacity: 0.3;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    opacity: 1;
  }
`;
