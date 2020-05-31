import React, { useState } from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { Input, Button, Title } from '../../components';
import { Container } from './styles';
import hugAnimation from '../../assets/animations/hug.json';

export const App = ({ navigation }) => {
  const { navigate } = navigation;
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <Container>
      <View>
        <Title isSize={3}>Bem vindo ao EVIT19 </Title>
      </View>

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
      <View style={{ alignItems: 'center' }}>
        <Title isSize={7}>Desenvolvido By Mandacaru</Title>
        <LottieView
          style={{ padding: 30 }}
          source={hugAnimation}
          autoPlay
          loop
        />
      </View>
    </Container>
  );
};

export default App;
