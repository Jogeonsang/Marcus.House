import {useEffect} from "react";

const useIS  = ({loader, loadMore}) => {

  const options = {
    threshold: 0.25,
    rootMargin: '0px',
    root: null
  };

  useEffect(() => {
    const observer = new IntersectionObserver(loadMore, options);

    // observer loader
    if (loader && loader.current) {
      observer.observe(loader.current);
    }

    // clean up on willUnMount
    return () => observer.unobserve(loader.current);
  }, [loader, loadMore]);
};

export default useIS;
