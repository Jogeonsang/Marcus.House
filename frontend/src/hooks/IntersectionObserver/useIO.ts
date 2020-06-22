import { useEffect, useRef, useState } from 'react';

interface IUseIO {
  setElements: any;
  observer: any;
  entries: any;
}

interface IOptions {
  root: null;
  rootMargin: string;
  threshold: number;
}


const useIO = (options:IOptions) => {
  const [elements, setElements] = useState<any>([]);
  const [entries, setEntries] = useState<any>([]);

  const observer = useRef<HTMLDivElement>(null);

  const { root, rootMargin, threshold } = options || {};



  useEffect(() => {
    if (elements.length) {
      // -----CONNECTING OBSERVER------
      // IO 생성
      observer.current = new IntersectionObserver((ioEntries) => {
        setEntries(ioEntries);
      }, {
        threshold,
        root,
        rootMargin
      });

      elements.forEach((element:HTMLDivElement)=> {
        observer.current.observe(element);
      });
    }
    return () => {
      if (observer.current) {
        // -----DISCONNECTING OBSERVER------
        observer.current.disconnect();
      }
    }
  }, [elements, root, rootMargin, threshold]);

  return [observer.current, setElements, entries];
};

export default useIO
