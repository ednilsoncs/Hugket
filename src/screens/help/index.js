import React, { useState } from 'react';
import { View } from 'react-native';

import { Container, Image } from './styles';
import { Button, Title, Text, Switch } from '../../components';
import { colors } from '../../theme';

export default function Help({ navigation }) {
  const { navigate } = navigation;
  return (
    <Container>
      <View>
        <Title>EVIT19</Title>
        <View style={{ alignItems: 'center' }}>
          <Title isSize={3} color="#1E90FF">
            Help
          </Title>
        </View>
      </View>
      <View>
        <Text isBold style={{ textAlign: 'center' }}>
          Breathe. We are all experiencing difficulties in the midst of a
          pandemic, the ideal is for you to breathe and do exercises that
          motivate you, in our app you will find several ways to see your
          friends and feel them up close. If you still think you need help we
          will refer you to a professional who can help you better.
        </Text>
      </View>
      <View>
        <Button
          icon="search"
          onPress={() => {
            navigate('Home');
          }}
        >
          A NEED PROFISSIONAL
        </Button>

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
