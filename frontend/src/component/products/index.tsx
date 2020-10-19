import React, {useEffect, useState, useRef, useCallback, FC} from 'react';
import styled from 'styled-components';

import {getProducts} from "../../api";
import Product from "./product";
import useIO from "../../hooks/IntersectionObserver/useIO";
import useIS from "../../hooks/InfinityScroll/useIS";
interface IProductsProps {
    selectCategory: {
        name: string;
        id: number;
    };
}

const Products: FC<IProductsProps> = ({selectCategory}) => {

    const {name: title, id: categoryId} = selectCategory;
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [observer, setElements, entries] = useIO({
      threshold: 0.25,
      rootMargin: '30px',
      root: null
    });

    const loader = useRef<HTMLDivElement | null>(null);

    const loadMore = useCallback((entries) => {
      const target = entries[0];
    }, []);

    // Infinity Scroll 사용 함수
    useIS({loader, loadMore});

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        const result = await getProducts(categoryId, 24, 0);

        setProducts(result.data.payload);
        setIsLoading(false);
      };

      fetchData();
    }, [categoryId]);

    useEffect(() => {
      if (products.length) {
        let img = Array.from(document.getElementsByClassName('lazy'));
        setElements(img)
      }
    }, [products, setElements, isLoading]);

    useEffect(() => {
      entries.forEach((entry:any) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          observer.unobserve(lazyImage);
        }
      })
    }, [entries, observer]);

    if (isLoading) {
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
        {products.map((product:any) => (
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
