import React, { useCallback, useState } from 'react';

export const useInput = <T extends HTMLInputElement | HTMLTextAreaElement>(initialState?: string) => {
  const [value, setValue] = useState(initialState ?? '');

  const onChange = useCallback((e: React.ChangeEvent<T>) => {
    setValue(e.target.value);
  }, []);

  const reset = useCallback(() => {
    setValue('');
  }, []);

  return [value, onChange, reset] as const;
};
