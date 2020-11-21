import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: #28262e;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #28262e;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #d00;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #807a75;
  font-size: 18px;
  font-family: 'NotoSansJP-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
