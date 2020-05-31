import React from 'react';
import { FlatList, View, ScrollView } from 'react-native';
import { Container, Image } from './styles';
import { Title } from '../../components';
import praia from '../../assets/images/praia.jpeg';
import quarto from '../../assets/images/quarto.jpeg';
import space from '../../assets/images/space.jpeg';
import { colors } from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ({ navigation }) {
  return (
    <Container>
      <View>
        <Title>HUGKET</Title>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Title isSize={3} color="#1E90FF">
          Virtual Rooms
        </Title>
      </View>
      <ScrollView>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Room', {
              idVideo: 'nA9UZF-SZoQ',
            })
          }
        >
          <Title isSize={3} color={colors.blue}>
            Beach
          </Title>
          <Image source={praia} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Title isSize={3} color={colors.blue}>
            Bedroom
          </Title>
          <Image source={quarto} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Title isSize={3} color={colors.blue}>
            Space
          </Title>
          <Image source={praia} />
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}
