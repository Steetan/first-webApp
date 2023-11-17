import { Text } from 'react-native';
import styled from "styled-components/native";

export default Button = (props) => {
    const BtnText = styled.TouchableOpacity`
      padding: 10px 15px;
      border-radius: 10px;
    `
  return (
    <BtnText style={props.backStyle} onPress={props.press}>
        <Text style={{color: "#fff", fontSize: 13}}>{props.textBtn}</Text>
    </BtnText>
  )
};
