import styled from 'styled-components';

export const InputWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    margin-top: 60px;
`;

export const InputField = styled.TextInput`
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-align: center;
    width:90%;
    margin-bottom: 10px;
`;

export const AddImage = styled.Image`
    width: 100px;
    height: 100px;
    margin-bottom: 50px;
`;

export const StatusWrapper = styled.View`
    justify-content: center;
    align-items: center;
`;

export const SubmitBtn = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    background-color: #2e64e515;
    border-radius: 5px;
    padding: 10px 25px;
`;

export const SubmitBtnText = styled.Text`
    font-size: 18px;
    font-family: 'Lato-Bold';
    font-weight: bold;
    color: #2e64e5;
`;