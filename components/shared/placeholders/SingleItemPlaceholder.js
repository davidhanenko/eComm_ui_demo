import ContentLoader from 'react-content-loader';

const ItemPlaceholder = ({ i }) => {
  return (
    <ContentLoader
      speed={2}
      viewBox='0 0 450 450'
      backgroundColor='#7ca8a15c'
      foregroundColor='#7ca8a129'
      uniqueKey={i}
    >
      <rect
        x='0'
        y='0'
        rx='3'
        ry='3'
        width='200'
        height='200'
      />
      <rect
        x='220'
        y='10'
        rx='3'
        ry='3'
        width='180'
        height='12'
      />
      <rect
        x='340'
        y='30'
        rx='3'
        ry='3'
        width='50'
        height='12'
      />

      <rect
        x='220'
        y='50'
        rx='3'
        ry='3'
        width='100'
        height='10'
      />

      <rect
        x='220'
        y='70'
        rx='3'
        ry='3'
        width='50'
        height='16'
      />
      <rect
        x='280'
        y='70'
        rx='3'
        ry='3'
        width='50'
        height='16'
      />

      <rect
        x='220'
        y='120'
        rx='3'
        ry='3'
        width='200'
        height='8'
      />

      <rect
        x='220'
        y='135'
        rx='3'
        ry='3'
        width='200'
        height='8'
      />

      <rect
        x='220'
        y='150'
        rx='3'
        ry='3'
        width='200'
        height='8'
      />

      <rect
        x='220'
        y='165'
        rx='3'
        ry='3'
        width='200'
        height='8'
      />

      <rect
        x='220'
        y='180'
        rx='3'
        ry='3'
        width='200'
        height='8'
      />
    </ContentLoader>
  );
};

export default ItemPlaceholder;
