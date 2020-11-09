import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { Form } from '@unform/mobile';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 80}px;
  background: #312e37;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: 'RobotoSlab-Medium';
  margin: 60px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 30px;
`;

export const ForgotPasswordText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAccount = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #312e37;
  border-top-width: 1px;
  border-color: #807a75;
  padding: 16px 0 ${16 + getBottomSpace() / 2}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountText = styled.Text`
  color: #ff9000;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 15px;
`;

export const FormContainer = styled(Form)`
  width: 100%;
`;
