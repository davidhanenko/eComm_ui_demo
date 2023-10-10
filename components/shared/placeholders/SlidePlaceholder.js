import ContentPlaceholder from 'react-content-loader';

const SlidePlaceholder = ({ i }) => {
  return (
    <ContentPlaceholder
      speed={2}
      width={300}
      height={300}
      viewBox='0 0 300 300'
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
        width='300'
        height='300'
      />
    </ContentPlaceholder>
  );
};

export default SlidePlaceholder;
