import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
import {MdClose} from 'react-icons/md'

import ToastPortal from "./Portal";
import * as colors from 'styles/colors'
import * as commonActions from 'store/common/actions'
import * as commonSelector from 'store/common/selectors'

interface Props {
  showToast: boolean;
}

const slideUp = keyframes`
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0px);
  }
`

const ToastStyle = createGlobalStyle`
  .toastContainer {
    position: fixed;
    bottom: 5vh;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    z-index: 10000;
    min-width: 280px;
  }
`
const StyledToast = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  transition: 0.4s;
  font-size: 12px;
  padding: 14px;
  margin-bottom: 0.5em;
  box-sizing: border-box;
  align-items: center;
  color: #333;
  animation-name: ${slideUp};
  animation-duration: 0.25s;
  animation-timing-function: ease;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #d7dbe2;
  span {
    word-break: keep-all;
  }
  .HorizontalLine {
    width: 100%;
    height: 1px;
    margin: 10px 0;
    background-color: #EEE;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  strong {
    color: #688;
    font-weight: bold;
    font-size: 15px;
  }
`;

const Content = styled.div`
  width: 100%;
  color: #333;
  font-size: 14px;
  text-align: left;
`;
const Toast:React.FC = () => {
  const dispatch = useDispatch();
  const error = useSelector(commonSelector.getError);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log(error)
    switch (error.status) {
      case 500:
        setMessage('잠시 후에 다시 시도해 주세요.')
        return;
      case 404:
        setMessage('일시적인 오류로인해 불러오는데 실패했습니다.')
        return;
      default:
        setMessage('What the fuck')
    }

    setTimeout(() => dispatch(commonActions.clearAxiosErrorHandler({})), 399000)
  }, [])

    return (
      <ToastPortal>
        <ToastStyle/>
        <StyledToast>
          <Header>
            <strong>Toast!</strong>
            <MdClose size="16" color="#666" onClick={() => dispatch(commonActions.clearAxiosErrorHandler({}))}/>
          </Header>
          <div className="HorizontalLine"/>
          <Content>{message}</Content>
        </StyledToast>
      </ToastPortal>
    )
};

export default Toast