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
      <Title isSize={3}>Cadastro</Title>
      <View>
        <Input
          placeholder="Nome Completo"
          value={email}
          onChange={(value) => setEmail({ value })}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(value) => setEmail({ value })}
        />
        <Input
          placeholder="Senha"
          value={email}
          onChange={(value) => setEmail({ value })}
        />
        <Input
          placeholder="Confirmar senha"
          value={senha}
          onChange={(value) => setSenha({ value })}
        />
      </View>
      <View>
        <Button onPress={() => navigate('Login')}>CADASTRAR</Button>
        <Button onPress={() => navigate('Login')} color="#fff">
          VOLTAR
        </Button>
      </View>
    </Container>
  );
};

export default App;
