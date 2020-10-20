import { useState, useEffect } from 'react';

const useInfiniteScroll = (callBack:() => void) => {
  const [isFetching, setIsFetching] = useState<any>(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    console.log(isFetching)
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