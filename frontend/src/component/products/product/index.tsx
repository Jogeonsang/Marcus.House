import React from 'react';
import styled from 'styled-components';
import {Skeleton} from "../../skeletonEl";

interface IProductProps {
  product?: {
    brand_name: string;
    name: string;
    cost:  number;
    image_url: string;
  };
  isLazy?: any;
  key?: number;
}

const Product: React.FC<IProductProps> = ({product={}, isLazy}) => {

  if(Object.keys(product).length === 0) {
    return (
      <ProductWrapper>
        <ProductImgWrapper><Skeleton/></ProductImgWrapper>
        <ProductContent>
          <ProductBrand><Skeleton width={'35%'}/></ProductBrand>
          <ProductName><Skeleton width={'90%'}/></ProductName>
          <ProductPrice><Skeleton width={'60%'}/></ProductPrice>
        </ProductContent>
      </ProductWrapper>
    )
  }

  return(
  <ProductWrapper>
    <ProductImg
      className={isLazy ? 'lazy' : ''}
      data-src={product.image_url}
    />
    <ProductContent>
      <ProductBrand>{product.brand_name}</ProductBrand>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.cost}</ProductPrice>
    </ProductContent>
  </ProductWrapper>
)
};
export default Product


const ProductWrapper = styled.div`
  padding: 0 10px;
  padding-bottom: 20px;
  position: relative;
`;

const ProductImg = styled.img`
  cursor: pointer;
  width: 262px;
  height: 262px;
  border-radius: 4px;
  background-color: #f1f3f5;
`;

const ProductImgWrapper = styled.div`
  width: 262px;
  height: 262px;
  border-radius: 4px;
`;
const ProductContent = styled.div`
  padding: 0 10px;
  width: 262px;
`;

const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #3a3d42;
  margin-top: 2px;
  width: 262px;
`;

const ProductBrand = styled.div`
  font-size: 14px;
  color: #666;
  width: 262px;
  margin: 5px 0px;
  ${({theme}) => theme.textSingleLine};
`;

const ProductName = styled.div`
  font-size: 14px;
  color: #888;
  width: 262px;
  
  ${({theme}) => theme.textSingleLine};
`;
