import { useState, useEffect, Dispatch } from 'react';
import throttle from 'lodash.throttle';

const useInfiniteScroll = (callBack:() => void):[boolean, Dispatch<boolean>] => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 500))
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) return;

    return callBack()
  }, [isFetching])
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop <= document.documentElement.offsetHeight - 300 || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
}

export default useInfiniteScroll