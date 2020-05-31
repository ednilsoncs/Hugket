import styled from 'styled-components/native';
import { ifIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import bg from '../../assets/images/login.jpg';

export const Container = styled.ImageBackground.attrs({
  source: bg,
  imageStyle: {
    opacity: 0.1,
  },
})`
  flex: 1;
  padding: 0px 30px 30px 30px;
  justify-content: space-evenly;
  padding-top: ${ifIphoneX ? getStatusBarHeight(true) : 0};
`;

export const Image = styled.Image`
  max-width: 350px;
  height: 200px;
`;
