import styled from 'styled-components/native';
import { colors, fonts, type, sizes } from '../../theme';

export const Container = styled.View`
  height: ${sizes.buttonHeight}px;
  position: relative;
  margin: 15px 0;
`;
export const Label = styled.Text`
  position: absolute;
  margin-bottom: 5px;
  color: ${colors.black};
  bottom: ${({ isActive }) => (isActive ? '45px' : '17px')};
  font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
`;

export const TextInput = styled.TextInput`
  height: ${sizes.buttonHeight}px;
  border: 1.5px;
  border-color: ${colors.black};
  font-size: ${type.body};
  color: ${colors.black};
  font-family: ${fonts.regular};
`;