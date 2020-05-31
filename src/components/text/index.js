import styled from 'styled-components/native';
import { colors, fonts, type } from '../../theme';

const Text = styled.Text`
  font-size: ${(props) => type.subtitle[props.isSize || 1]};
  color: ${(props) => props.color || colors.black};
  text-align: left;
  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'none')};
`;

export default Text;
