// packages
import { useState } from 'react';

const useInputText = () => {
  const [inputText, setEdittableText] = useState<string>('');

  const inputTextHandler = (textData: string) => setEdittableText(textData);

  return { inputText, inputTextHandler };
};

export default useInputText;
