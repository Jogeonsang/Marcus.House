import styled, {css} from "styled-components";
import React from "react";

interface ISkeleton{
    width: string;
}
const SkeletonLine = styled.div<ISkeleton>`
  display: inline-block;
  height: 100%;
  width: ${(props: any) => props.width ? props.width : '100%'};
  min-height: 12px;
  background: ${props => css`linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%)`};
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  margin: 0;
  padding: 0;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  
  &::before {
    content: "\00a0";
  }
`;
export const Skeleton = ({width='0%'}) => (
  <SkeletonLine width={width}/>
);
