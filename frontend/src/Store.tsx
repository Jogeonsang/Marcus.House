import React, {useState, useRef, useEffect} from 'react';
import {useSelector} from "react-redux";
import styled from 'styled-components';

import Category from "./component/category";
import Products from "./pages/market";
import useQuery from "./hooks/URLSearchParams/useQuery";

import * as commonSelector from 'store/common/selectors'
import Toast from "./component/common/Toast/Toast";

const Store: React.FC = () => {
  const error = useSelector(commonSelector.getError);
  const category: number = Number(useQuery().get('category')) || 1;
  const [selectCategory, setCategory] = useState({name: '가구', id: category});
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(error.status)
  }, [error.status])

  return (
    <AppContainer>
      <Category selectCategory={selectCategory} setCategory={setCategory}/>
      <Products selectCategory={selectCategory}/>
      {showToast && (<Toast />)}
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
