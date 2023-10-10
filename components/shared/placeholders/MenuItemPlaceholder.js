import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const PlaceholderStyles = styled.div`
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const ItemPlaceholder = ({ i }) => {
  return (
    <ContentLoader
      height={24}
      speed={2}
      viewBox='0 0 120 24'
      backgroundColor='#7ca8a15c'
      foregroundColor='#7ca8a129'
      uniqueKey={i}
    >
      <rect
        x='0'
        y='12'
        rx='3'
        ry='3'
        width='100'
        height='12'
      />
    </ContentLoader>
  );
};

const MenuItemPlaceholder = ({ i }) => {
  return (
    <PlaceholderStyles>
      <ItemPlaceholder i={i} />
      <ItemPlaceholder i={i} />
      <ItemPlaceholder i={i} />
    </PlaceholderStyles>
  );
};

export default MenuItemPlaceholder;
