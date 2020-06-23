import Link from 'next/link';
import styled from 'styled-components';


const Home = () => {
  return (
    <>
     <Title>Hello, Next</Title>
      <Link href={`/products/[id]`} as={`/products/1`}>
        <a>상품 상세 페이지</a>
      </Link>
    </>
  );
};

export default Home

const Title = styled.div`
  color: #2f5fd1;
`;
