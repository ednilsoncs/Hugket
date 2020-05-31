import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Title } from '../../components';
import { Container } from './styles';
import { colors } from '../../theme';

export const App = ({ navigation }) => {
  const { navigate } = navigation;
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <Container>
      <Title isSize={3}>Cadastro</Title>
      <View>
        <Input
          placeholder="Full Name"
          value={email}
          onChange={(value) => setEmail({ value })}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(value) => setEmail({ value })}
        />
        <Input
          placeholder="Password"
          value={email}
          onChange={(value) => setEmail({ value })}
        />
        <Input
          placeholder="Confirm Password"
          value={senha}
          onChange={(value) => setSenha({ value })}
        />
      </View>
      <View>
        <Button onPress={() => navigate('Login')}>REGISTER</Button>
        <Button
          onPress={() => navigate('Login')}
          color="#00BFFF"
          fontColor={colors.blue}
        >
          BACK
        </Button>
      </View>
    </Container>
  );
};

export default App;
