import {useEffect} from "react";

interface IOptions {
  root: null;
  rootMargin: string;
  threshold: number;
}

const useIS: ((loader: any) => void) | ((loadMore: any) => void) = ({loader, loadMore}) => {

  const options: IOptions = {
    threshold: 0.25,
    rootMargin: '0px',
    root: null
  };

  useEffect(() => {
    const observer = new IntersectionObserver(loadMore, options);

    console.log(typeof loader, loader)
    // observer loader
    if (loader && loader.current) {
      observer.observe(loader.current);
    }

    // clean up on willUnMount
    return () => observer.unobserve(loader.current);
  }, [loader, loadMore]);
};

export default useIS;
