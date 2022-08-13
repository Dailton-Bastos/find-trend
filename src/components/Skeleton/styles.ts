import styled, { keyframes } from 'styled-components';

const skeleton = keyframes`
  from {
    background-position: 0;
  }
  to {
    background-position: -200%;
  }
`;

export const Skeleton = styled.div`
  animation: ${skeleton} 1.5s infinite linear;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-size: 200%;
  height: 200px;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 30px;
  height: 220px;
  margin-bottom: 30px;
  width: 100%;
`;

export const Img = styled(Skeleton)`
  max-width: 300px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  width: 100%;
`;

export const Author = styled(Skeleton)`
  height: 22px;
  width: 200px;
`;

export const Title = styled(Skeleton)`
  height: 78px;
  width: 100%;
`;

export const Description = styled(Skeleton)`
  height: 128px;
  width: 100%;
`;

export const Time = styled(Skeleton)`
  height: 22px;
  width: 152px;
`;
