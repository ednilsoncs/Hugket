import styled from 'styled-components/native';
import { ifIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import bg from '../../assets/images/cadastro.jpg';

export const Container = styled.ImageBackground.attrs({
  source: bg,
  imageStyle: {
    opacity: 0.3,
  },
})`
  flex: 1;
  padding: 0px 30px 30px 30px;
  justify-content: space-evenly;
  padding-top: ${ifIphoneX ? getStatusBarHeight(true) : 0};
`;
