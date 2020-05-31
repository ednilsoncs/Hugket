/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import LottieView from 'lottie-react-native';
import settingAnimation from '../../assets/animations/setting.json';
import { Container, Touchable, Text } from './styles';
import { animations } from '../../assets/animations';

const Button = ({
  isDisabled,
  isBlue,
  isFacebook,
  isSearch,
  color,
  children,
  icon,
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
      {icon && (
        <LottieView
          style={{ padding: 10, marginLeft: 130 }}
          source={animations[icon]}
          autoPlay
          loop
        />
      )}
    </Touchable>
  </Container>
);

export default Button;
