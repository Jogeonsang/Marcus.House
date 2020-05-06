import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Category = ({selectCategory, setCategory}) => {

  const categoryList = [
    {name: '가구', id: 1},
    {name: '페브릭', id: 2},
    {name: '주방', id: 3},
    {name: '생활/수납', id: 4},
    {name: '홈 데코', id: 5},
  ];

  return (
    <CategoryContainer>
      <CategorySideBar>
        <CategoryList>
          <CategoryItem>
            {selectCategory.name}
          </CategoryItem>
          {categoryList.map(category => {
            const {name, id} = category;
            if (name !== selectCategory.name) {
              return (
                <CategoryItem onClick={() => setCategory(category)} key={id}>
                  <Link to={`/store?category=${id}`}>{name}</Link>
                </CategoryItem>
              )
            }
          })}
        </CategoryList>
      </CategorySideBar>
    </CategoryContainer>
  )
};

export default Category

const CategoryContainer = styled.div`
  width: 25%;
`;
const CategorySideBar = styled.div`
  max-width: 160px;
`;

const CategoryList = styled.ul`
  list-style: none;
`;

const CategoryItem = styled.li`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  color: #000;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
  &:nth-child(1) {
    padding-bottom: 20px;
    border-bottom: 1px solid #dbdbdb;
  }
`;
