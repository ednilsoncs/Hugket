// @flow
import React, { useState } from 'react';
// $FlowFixMe: Ignore
import { TextInputProps } from 'react-native';
import { Container, TextInput, Label } from './styles';

const Input = ({
  placeholder,
  value,
  onBlur = () => {},
  onFocus = () => {},
  ...rest
}: TextInputProps) => {
  const [isFocused, setFocus] = useState(false);
  return (
    <Container>
      <Label isActive={isFocused || value}>{placeholder}</Label>
      <TextInput
        {...rest}
        onFocus={() => {
          onFocus();
          setFocus(true);
        }}
        onBlur={() => {
          onBlur();
          setFocus(false);
        }}
      />
    </Container>
  );
};

export default Input;
