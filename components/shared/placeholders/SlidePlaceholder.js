import ContentPlaceholder from 'react-content-loader';

const SlidePlaceholder = ({ i }) => {
  return (
    <ContentPlaceholder
      speed={2}
      width={300}
      height={300}
      viewBox='0 0 300 300'
      backgroundColor='#a7a7a7'
      foregroundColor='#362222'
      uniqueKey={i}
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
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
