import React, { useState } from 'react';
import { View } from 'react-native';

import { Container, Image } from './styles';
import { Button, Title, Text, Switch } from '../../components';
import { colors } from '../../theme';
import jaqueta from '../../assets/images/jaqueta.png';
import { onChange } from 'react-native-reanimated';

export default function Home({ navigation }) {
  const { navigate } = navigation;
  const [settings, setSettings] = useState({
    jacket: true,
    virtual: true,
    bluetooth: true,
    wireles: true,
  });
  return (
    <Container>
      <View>
        <Title>EVIT19</Title>
        <View style={{ alignItems: 'center' }}>
          <Title isSize={3} color="#1E90FF">
            Settings
          </Title>
        </View>
      </View>
      <Image source={jaqueta} />
      <View style={{ alignItems: 'center' }}>
        <Switch
          value={settings.jacket}
          onChange={(value) => setSettings({ ...settings, jacket: value })}
        >
          JACKET SENSORES
        </Switch>
        <Switch
          value={settings.virtual}
          onChange={(value) => setSettings({ ...settings, virtual: value })}
        >
          VIRTUAL REALITY
        </Switch>
        <Switch
          value={settings.bluetooth}
          onChange={(value) => setSettings({ ...settings, bluetooth: value })}
        >
          BLUETOOTH
        </Switch>
        <Switch
          value={settings.wireles}
          onChange={(value) => setSettings({ ...settings, wireles: value })}
        >
          WIRELES
        </Switch>
      </View>
      <Button
        icon="settings"
        onPress={() => {
          navigate('Home');
        }}
      >
        Salvar
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
    </Container>
  );
}
