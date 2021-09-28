import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
    style?: StyleProp<ViewStyle>,
    height: number,
    width: number
}

const HalfStarIcon: React.FC<Props> = ({style, height, width}) => {
    return (
        <Svg
            style={style}
            height={height}
            width={width}
            viewBox="0 0 24 24"
        >
            <Path
                d="M23.79 9.87l-5.36 5.49 1.26 7.77c.111.62-.562 1.074-1.1.78L12 20.26V.03c.28 0 .56.13.68.4l3.31 7.05 7.37 1.12c.616.11.843.835.43 1.27z"
                fill="#eceff1"
            />
            <Path
                d="M12 .03v20.23l-6.59 3.65c-.529.297-1.212-.153-1.1-.78l1.26-7.77L.21 9.87A.757.757 0 01.64 8.6l7.37-1.12L11.32.43c.12-.27.4-.4.68-.4z"
                fill="#ffc107"
            />
        </Svg>
    );
}

export default HalfStarIcon;
