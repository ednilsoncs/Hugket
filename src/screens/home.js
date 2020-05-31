/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { Input, Button, Title } from '../components';
import { Container } from './styles';
import { View } from 'react-native';

export const App = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <Container>
      <Title isSize={3}>Seja bem vindo ao EVIT19</Title>
      <View>
        <Input
          placeholder="Email"
          value={email}
          onChange={(value) => setEmail({ value })}
        />
        <Input
          placeholder="Senha"
          value={senha}
          onChange={(value) => setEmail({ value })}
        />
      </View>

      <Button>LOGIN</Button>
    </Container>
  );
};

export default App;
