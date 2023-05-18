import ContentPlaceholder from 'react-content-loader';

const ItemPlaceholder = ({ i }) => {
  return (
    <ContentPlaceholder
      speed={2}
      width={100}
      height={100}
      viewBox='0 0 100 100'
      backgroundColor='#7ca8a15c'
      foregroundColor='#7ca8a129'
      uniqueKey={i}
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        borderRadius: '0.5rem',
      }}
    >
      <rect
        x='0'
        y='0'
        rx='0'
        ry='0'
        width='100'
        height='100'
      />
    </ContentPlaceholder>
  );
};

export default ItemPlaceholder;
