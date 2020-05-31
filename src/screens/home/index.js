import React from 'react';
import { View } from 'react-native';

import { Container, Image } from './styles';
import { Button, Title } from '../../components';
import { colors } from '../../theme';
import jaqueta from '../../assets/images/jaqueta.png';

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
      <Image source={jaqueta} />
      <Button icon="connect">CONNECT YOUR JACKET</Button>

      <Button onPress={() => navigation.navigate('Rooms')}>
        CONNECT IN ROOM
      </Button>
      <Button>SETTINGS</Button>
      <Button color="#00BFFF" fontColor={colors.bue}>
        FIND FRIENDS
      </Button>
    </Container>
  );
}
