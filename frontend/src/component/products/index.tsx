import React, {useEffect, useState, useRef, useCallback, FC} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'

import Product from "./product";
import {IProduct} from 'types/product'

import * as marketSelector from 'store/market/selectors'
import * as marketActions from 'store/market/actions'

import useInfiniteScroll from "hooks/InfinityScroll/useIS";

    interface IProductsProps {
    selectCategory: {
        name: string;
        id: number;
    };
}

const Products: FC<IProductsProps> = ({selectCategory}) => {

    const dispatch = useDispatch()
    const getMarketItemList = useSelector(marketSelector.getMarketItemList)

    const {name: title, id: categoryId} = selectCategory;

    const fetchData = () => {
        dispatch(marketActions.fetchMarketItemListAsync.request({category: categoryId, offset: 24, limit: 0}))
        setIsFetching(false)
    };

    const [isFetching, setIsFetching] = useInfiniteScroll(fetchData)

    useEffect(() => {
      fetchData();
    }, [categoryId]);

    if (getMarketItemList.isLoading) {
      let arr = new Array(10).fill(undefined).map((val,idx) => idx);
      return (
        <ProductsWrapper>
          {arr.map((index:number) => (
            <Product key={index}/>
          ))}
        </ProductsWrapper>
      )
    }
    return (
      <ProductsWrapper>
        {getMarketItemList.data.map((product:IProduct) => (
          <Product key={product.id} product={product} isLazy={true}/>
        ))}
      </ProductsWrapper>
    )
  }
;

export default Products;

const ProductsWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
`;
