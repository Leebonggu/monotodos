import React, { useState } from 'react';

function useInput(initialValue: any) {
  const [value, setValue] =  useState(initialValue);
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return [value, handler, setValue];
}

export default useInput;