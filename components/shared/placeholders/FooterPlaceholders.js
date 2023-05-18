import ContentLoader from 'react-content-loader';

export const ContactsPlaceholder = ({ i }) => {
  return (
    <ContentLoader
      speed={2}
      viewBox='0 0 200 180'
      backgroundColor='#7ca8a15c'
      foregroundColor='#7ca8a129'
      uniqueKey={i}
    >
      <rect
        x='0'
        y='0'
        rx='3'
        ry='3'
        width='140'
        height='8'
      />
      <rect
        x='0'
        y='20'
        rx='3'
        ry='3'
        width='120'
        height='8'
      />
      <rect
        x='0'
        y='50'
        rx='3'
        ry='3'
        width='180'
        height='1'
      />

      <rect
        x='0'
        y='70'
        rx='3'
        ry='3'
        width='130'
        height='8'
      />

      <rect
        x='0'
        y='90'
        rx='3'
        ry='3'
        width='160'
        height='8'
      />

      <rect
        x='0'
        y='110'
        rx='3'
        ry='3'
        width='140'
        height='8'
      />
    </ContentLoader>
  );
};


export const ServicesPlaceholder = ({ i }) => {
  return (
    <ContentLoader
      speed={2}
      viewBox='0 0 200 160'
      backgroundColor='#7ca8a15c'
      foregroundColor='#7ca8a129'
      uniqueKey={i}
    >
      <rect
        x='0'
        y='10'
        rx='3'
        ry='3'
        width='100'
        height='8'
      />
      <rect
        x='0'
        y='30'
        rx='3'
        ry='3'
        width='90'
        height='8'
      />
      <rect
        x='0'
        y='50'
        rx='3'
        ry='3'
        width='115'
        height='8'
      />
    </ContentLoader>
  );
};
