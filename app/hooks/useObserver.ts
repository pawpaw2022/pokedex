/** @format */

import { useEffect, useState } from "react";

type options = {
  rootMargin?: string;
};

type ref = {
  current?: any;
};

export const useObserver = (ref: ref, options: options) => {
  const { rootMargin } = options;
  const [observerEntry, setObserverEntry] = useState<any>(null);
  useEffect(() => {
    if (!ref?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setObserverEntry(entry);
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);
  }, [ref, rootMargin]);

  return observerEntry;
};
