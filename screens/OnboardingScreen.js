import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace("LoginScreen")}
            onDone={() => navigation.navigate("LoginScreen")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../images/onboarding1.png')} />,
                    title: 'Ship Cod Toàn Quốc',
                    subtitle: 'Giao Hàng Tiện Lợi & nhanh chóng ',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../images/onboarding2.png')} />,
                    title: 'Thanh toán dễ dàng',
                    subtitle: 'Thủ tục đơn giản không phức tạp',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../images/onboarding3.png')} />,
                    title: 'Ưu đãi bất ngờ',
                    subtitle: "Nhanh tay săn các món hàng ngon bổ rẻ",
                },
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});