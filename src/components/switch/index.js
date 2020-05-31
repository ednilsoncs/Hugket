import React from 'react';
import { Container, Text, Switch } from './styles';
import { colors } from '../../theme';

export default function SwitchComponent({ children, onChange, value }) {
  return (
    <Container>
      <Text isSize={4}>{children}</Text>
      <Switch
        onValueChange={onChange}
        onTintColor="#00BFFF"
        thumbColor={colors.black}
        value={value}
      />
    </Container>
  );
}
