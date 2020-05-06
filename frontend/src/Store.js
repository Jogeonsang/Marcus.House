import React, {useState, useRef} from 'react';
import styled from 'styled-components';

import Category from "./component/category";
import Products from "./component/products";
import useQuery from "./hooks/URLSearchParams/useQuery";

const Store = () => {

  const category = useQuery().get('category');
  const [selectCategory, setCategory] = useState({name: '가구', id: category});
  const refContainer = useRef(null);
  return (
    <AppContainer>
      <Category selectCategory={selectCategory} setCategory={setCategory}/>
      <Products selectCategory={selectCategory} refContainer={refContainer}/>
    </AppContainer>
  )
};

export default Store;

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  padding: 0 40px;
  
`;

const AppContent = styled.div`
  
`;
