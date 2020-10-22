import React, {useEffect, FC} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'

import Product from "./product";
import {IProduct} from 'types/product'

import * as marketSelector from 'store/market/selectors'
import * as marketActions from 'store/market/actions'

import useInfiniteScroll from "hooks/InfinityScroll";
import usePagination from "hooks/usePagination";

    interface IProductsProps {
    selectCategory: {
        name: string;
        id: number;
    };
}

const Products: FC<IProductsProps> = ({selectCategory}) => {

    const dispatch = useDispatch()
    const [pagination, nextPagination] = usePagination();
    const getMarketItemList = useSelector(marketSelector.getMarketItemList)
    const {name: title, id: categoryId} = selectCategory;

    const fetchData = () => {
        const { offset, limit } = pagination;
        if (getMarketItemList.hasMore) {
            dispatch(marketActions.fetchMarketItemListAsync.request({category: categoryId, offset: offset, limit: limit}))
            nextPagination()
            setIsFetching(false)
        }
    };

    const [isFetching, setIsFetching] = useInfiniteScroll(fetchData)

    useEffect(() => {
      fetchData();
    }, [categoryId]);

    if (getMarketItemList.isLoading && isFetching) {
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
