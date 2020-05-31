import React, { useState } from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { Input, Button, Title } from '../../components';
import { Container } from './styles';
import { colors } from '../../theme';
import { animations } from '../../assets/animations';

export const App = ({ navigation }) => {
  const { navigate } = navigation;
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <Container>
      <View>
        <Title isSize={3}>Welcome to EVIT19 </Title>
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
        <Button
          onPress={() => {
            navigate('Home');
          }}
        >
          LOGIN
        </Button>
        <Button
          onPress={() => {
            navigate('Cadastro');
          }}
          color="#00BFFF"
          fontColor={colors.blue}
        >
          SIGN IN
        </Button>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Title isSize={7}>Desenvolvido By Mandacaru</Title>
        <LottieView
          style={{ padding: 30 }}
          source={animations.hug}
          autoPlay
          loop
        />
      </View>
    </Container>
  );
};

export default App;
