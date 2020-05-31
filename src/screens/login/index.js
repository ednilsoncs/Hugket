import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Title } from '../../components';
import { Container } from './styles';

export const App = ({ navigation }) => {
  const { navigate } = navigation;
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <Container>
      <Title isSize={3}>Bem vindo ao EVIT19</Title>
      <View>
        <Input
          placeholder="Email"
          value={email}
          onChange={(value) => setEmail({ value })}
        />
        <Input
          placeholder="Senha"
          value={senha}
          onChange={(value) => setSenha({ value })}
        />
      </View>
      <View>
        <Button>LOGIN</Button>
        <Button
          onPress={() => {
            navigate('Cadastro');
          }}
          color="#fff"
        >
          CADASTRAR
        </Button>
      </View>
    </Container>
  );
};

export default App;
