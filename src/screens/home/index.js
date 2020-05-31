import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';
import { Button, Title, Text } from '../../components';
import { colors } from '../../theme';

export default function Home({ navigation }) {
  return (
    <Container>
      <View>
        <Title>EVIT19</Title>
        <View style={{ alignItems: 'center' }}>
          <Title isSize={6} color="#1E90FF">
            HUG SOMEONE
          </Title>
        </View>
      </View>

      <Button icon="connect">CONNECT YOUR JACKET</Button>

      <Button onPress={() => navigation.navigate('Room')}>
        CONNECT IN ROOM
      </Button>
      <Button>SETTINGS</Button>
      <Button color="#00BFFF" fontColor={colors.bue}>
        FIND FRIENDS
      </Button>
    </Container>
  );
}
