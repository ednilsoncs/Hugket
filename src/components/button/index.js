/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Touchable, Text } from './styles';

const Button = ({
  isDisabled,
  isBlue,
  isFacebook,
  isSearch,
  color,
  children,
  ...props
}) => (
  <Container>
    <Touchable
      color={color}
      {...props}
      disabled={isDisabled}
      isDisabled={isDisabled}
    >
      <Text isDisabled={isDisabled}>{children}</Text>
    </Touchable>
  </Container>
);

export default Button;
