import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';
import { Button, Title, Text } from '../../components';
import { colors } from '../../theme';

export default function about({ navigation }) {
  const { navigate } = navigation;
  return (
    <Container>
      <View>
        <Title>HUGKET</Title>
        <View style={{ alignItems: 'center' }}>
          <Title isSize={3} color="#1E90FF">
            About App
          </Title>
        </View>
      </View>
      <View>
        <Text isBold style={{ textAlign: 'center' }}>
          Liceses
        </Text>
        <Text>@Tam Doan/LottieFiles</Text>
        <Text>@Abhinandan Trilokia/LottieFiles</Text>
        <Text>@Radhikakpor/LottieFiles</Text>
        <Text>@Iconjump/LottieFiles</Text>
        <Text>Built app with react native</Text>
      </View>
      <View>
        <Button
          color="#00BFFF"
          fontColor={colors.bue}
          onPress={() => {
            navigate('Home');
          }}
        >
          BACK
        </Button>
      </View>
    </Container>
  );
}
