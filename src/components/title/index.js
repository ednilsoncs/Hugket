import styled from 'styled-components/native';
import { colors, fonts, type } from '../../theme';

const Title = styled.Text`
  font-size: ${(props) => type.title[props.isSize || 1]};
  color: ${(props) => props.color || colors.black};
  font-family: '${fonts.title}';
  text-align: left;
  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'none')};
`;

export default Title;
