import React from 'react';
import { FlatList, View, ScrollView } from 'react-native';
import { Container, Image } from './styles';
import { Title, Text } from '../../components';
import praia from '../../assets/images/praia.jpeg';
import quarto from '../../assets/images/quarto.jpeg';
import space from '../../assets/images/space.jpeg';
import { colors } from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ({ navigation }) {
  return (
    <Container>
      <View>
        <Title>EVIT19</Title>
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
              idVideo: '1FvwPEKgcsA',
            })
          }
        >
          <Text color={colors.blue}>Beach</Text>
          <Image source={praia} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text color={colors.blue}>Bedroom</Text>
          <Image source={quarto} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text color={colors.blue}>Space</Text>
          <Image source={praia} />
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}
