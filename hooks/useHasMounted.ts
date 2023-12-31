import { useEffect, useState } from 'react';

/**
 * This hook helps with hydration issues; see https://joshwcomeau.com/react/the-perils-of-rehydration/. Another explanation and how this is related to wagmi https://github.com/wagmi-dev/wagmi/issues/542#issuecomment-1144178142.
 */
export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};
