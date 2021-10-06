import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const BathIcon = () => (
    <StyledSvg width={30} height={30} viewBox="0 0 512 512">
        <Path d="M480 255.051H32c-17.643 0-32 14.357-32 32s14.357 32 32 32h448c17.643 0 32-14.357 32-32s-14.357-32-32-32zm0 42.666H32c-5.867 0-10.667-4.779-10.667-10.667s4.8-10.667 10.667-10.667h448c5.867 0 10.667 4.779 10.667 10.667s-4.8 10.667-10.667 10.667z" />
        <Path d="M482.944 298.123c-5.781-1.6-11.584 1.664-13.184 7.339l-29.397 102.912c-6.507 22.763-27.605 38.677-51.285 38.677H122.944c-23.68 0-44.757-15.915-51.285-38.677L42.261 305.461c-1.6-5.675-7.424-8.939-13.184-7.339a10.644 10.644 0 00-7.317 13.184l29.397 102.912c9.109 31.893 38.613 54.165 71.787 54.165h266.112c33.173 0 62.699-22.272 71.808-54.165l29.397-102.912c1.622-5.653-1.642-11.562-7.317-13.183z" />
        <Path d="M122.944 404.405c-4.736 0-8.939-3.2-10.261-7.744l-13.845-48.512c-1.6-5.653-7.467-8.96-13.184-7.339-5.653 1.621-8.939 7.509-7.317 13.184l13.845 48.512c3.883 13.675 16.555 23.211 30.763 23.211 5.888 0 10.667-4.757 10.667-10.645-.001-5.888-4.78-10.667-10.668-10.667zM143.424 448.16c-5.269-2.581-11.648-.512-14.315 4.779l-21.333 42.667c-2.624 5.269-.491 11.669 4.779 14.315a10.647 10.647 0 0014.315-4.778l21.333-42.667c2.624-5.271.49-11.671-4.779-14.316zM404.224 495.627l-21.333-42.667c-2.645-5.291-9.045-7.403-14.315-4.779-5.269 2.645-7.403 9.045-4.779 14.315l21.333 42.667a10.665 10.665 0 009.536 5.888c1.6 0 3.221-.363 4.779-1.109 5.27-2.646 7.403-9.046 4.779-14.315zM428.48.949c-10.88 0-21.12 4.245-28.821 11.947l-33.856 33.856c-4.16 4.16-4.16 10.923 0 15.083s10.923 4.16 15.083 0L414.741 28c3.648-3.669 8.533-5.696 13.845-5.696 10.709 0 19.413 8.704 19.413 19.413v224c0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 10.688-10.688v-224C469.355 19.232 451.093.949 428.48.949z" />
        <Path d="M391.573 57.44L370.24 36.107c-2.453-2.453-5.845-3.584-9.28-2.987l-53.333 8.747c-3.925.619-7.147 3.392-8.405 7.168s-.299 7.936 2.475 10.773l64 65.92c2.005 2.112 4.8 3.243 7.637 3.243 1.003 0 2.027-.149 3.051-.427a10.63 10.63 0 007.445-8.128l10.667-53.333a10.682 10.682 0 00-2.924-9.643zm-24.725 38.869L331.2 59.595l27.797-4.544 13.419 13.419-5.568 27.839zM252.864 130.187c-4.16-4.16-10.923-4.16-15.083 0l-21.333 21.333c-4.16 4.16-4.16 10.923 0 15.083 2.091 2.069 4.821 3.115 7.552 3.115s5.461-1.045 7.531-3.115l21.333-21.333c4.16-4.161 4.16-10.923 0-15.083zM295.531 172.853c-4.16-4.16-10.923-4.16-15.083 0l-21.333 21.333c-4.16 4.16-4.16 10.923 0 15.083a10.716 10.716 0 007.552 3.115c2.731 0 5.461-1.045 7.531-3.115l21.333-21.333c4.16-4.16 4.16-10.923 0-15.083zM316.864 108.853c-4.16-4.16-10.923-4.16-15.083 0l-21.333 21.333c-4.16 4.16-4.16 10.923 0 15.083 2.091 2.069 4.821 3.115 7.552 3.115s5.461-1.045 7.531-3.115l21.333-21.333c4.16-4.16 4.16-10.923 0-15.083z" />
    </StyledSvg>
)

const StyledSvg = styled(Svg).attrs((props) => ({
    fill: props.theme.featIcon
}))``

export default BathIcon;
