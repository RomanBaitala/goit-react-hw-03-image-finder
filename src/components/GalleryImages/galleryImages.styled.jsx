import styled from 'styled-components';

export const GalleryList = styled('ul')`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const NotFound = styled('h1')`
  text-align: center;
  font-weight: 700;
  font-style: 32px;
  line-height: 38px;
`;
