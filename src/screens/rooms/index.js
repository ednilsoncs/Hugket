import React from 'react';
import { FlatList, View, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Image } from './styles';
import { Title } from '../../components';
import space from '../../assets/images/space.jpg';
import meet from '../../assets/images/meet-room.jpg';
import nature from '../../assets/images/nature.jpg';
import { colors } from '../../theme';

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
              idVideo: 'YWOaVP7apU',
            })
          }
        >
          <Title isSize={3} color={colors.blue}>
            Meeting room
          </Title>
          <Image source={meet} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Room', {
              idVideo: 'CAacLfMhUvE',
            })
          }
        >
          <Title isSize={3} color={colors.blue}>
            rocket trip
          </Title>
          <Image source={space} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Room', {
              idVideo: '6MS_vXQ50vc',
            })
          }
        >
          <Title isSize={3} color={colors.blue}>
            Nature
          </Title>
          <Image source={nature} />
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}
