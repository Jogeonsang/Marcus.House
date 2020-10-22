import React, { useState, useEffect, Dispatch } from 'react';

const useInfiniteScroll = (callBack:() => void):[boolean, Dispatch<boolean>] => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) return;

    return callBack()
  }, [isFetching])
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
}

export default useInfiniteScroll