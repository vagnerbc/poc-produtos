import { useEffect } from 'react';

const syncInterval = 6000;

export const useSync = (sync: () => void) => {
  useEffect(() => {
    sync();
    const interval = setInterval(sync, syncInterval);
    return () => clearInterval(interval);
  }, [sync]);
}
