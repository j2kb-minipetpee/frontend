import { useCallback, useState } from 'react';

export const useToggle = () => {
  const [value, setValue] = useState(false);

  const onToggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const onTrue = useCallback(() => {
    setValue(true);
  }, []);

  const onFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, onToggle, onTrue, onFalse] as const;
};
