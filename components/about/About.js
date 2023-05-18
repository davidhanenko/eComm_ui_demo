import LoaderContainer from '../shared/loaders/loader-container/LoaderContainer';
import { AboutStyles } from './AboutStyles';
import Image from 'next/image';

export default function About({
  aboutData,
  placeholder,
  loading,
}) {
  if (loading) {
    return <LoaderContainer height={'80vh'} />;
  }

  return (
    <AboutStyles>
      <h1>About Our Company</h1>
      <hr />
      <h3>{aboutData?.header[0]?.header}</h3>
      <p>{aboutData?.header[0]?.paragraph}</p>

      <div className='about-image'>
        <Image
          src={aboutData?.image?.data?.attributes?.url}
          height={300}
          width={800}
          placeholder='blur'
          blurDataURL={placeholder}
        />
      </div>
      {aboutData?.section?.map(s => (
        <>
          <h3>{s?.header}</h3>
          <p>{s?.paragraph}</p>
        </>
      ))}
    </AboutStyles>
  );
}
