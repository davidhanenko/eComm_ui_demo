import styled from 'styled-components';

const MapStyles = styled.div`
  height: 250px;
  max-height: 300px;
  
  h4 {
    margin: 0 0 2rem 0;
    font-size: 2.3rem;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: center;
    color: var(--blue3);
  }
  
  .map-wrap {
    height: 100%;
  }
  
  #map {
    box-shadow: var(--bs);
    height: 100%;
  }
`;

export { MapStyles };
