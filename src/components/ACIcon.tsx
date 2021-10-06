import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const ACIcon = () => (
    <StyledSvg width={30} height={30} viewBox="0 0 503.607 503.607">
        <Path d="M478.426 75.541H25.18C10.911 75.541 0 86.452 0 100.721V268.59c0 14.269 10.911 25.18 25.18 25.18h453.246c14.269 0 25.18-10.911 25.18-25.18V100.721c.001-14.269-10.911-25.18-25.18-25.18zm8.394 193.049c0 5.036-3.357 8.393-8.393 8.393H25.18c-5.036 0-8.393-3.357-8.393-8.393V100.721c0-5.036 4.197-8.393 8.393-8.393h453.246c5.036 0 8.393 3.357 8.393 8.393V268.59z" />
        <Path d="M218.229 151.082h67.148c5.036 0 8.393-3.357 8.393-8.393s-3.357-8.393-8.393-8.393h-67.148c-5.036 0-8.393 3.357-8.393 8.393s3.357 8.393 8.393 8.393zM461.639 243.41H41.967c-5.036 0-8.393 3.357-8.393 8.393s3.357 8.393 8.393 8.393h419.672c5.036 0 8.393-3.357 8.393-8.393s-3.357-8.393-8.393-8.393zM461.639 209.836H41.967c-5.036 0-8.393 3.357-8.393 8.393s3.357 8.393 8.393 8.393h419.672c5.036 0 8.393-3.357 8.393-8.393s-3.357-8.393-8.393-8.393zM256 353.364c-8.393-4.197-12.59-9.233-12.59-13.43s5.036-9.233 11.751-14.269c4.197-1.679 5.036-6.715 3.357-10.911-1.679-4.197-6.715-5.875-10.911-3.357-13.43 7.554-20.984 17.626-20.984 28.538 0 10.911 7.554 20.984 20.984 29.377 8.393 4.197 12.59 9.233 12.59 13.43s-5.036 9.233-12.59 13.429c-4.197 1.679-5.875 6.715-3.357 10.911 1.679 2.518 4.197 4.197 7.554 4.197 1.679 0 2.518 0 4.197-.839 13.43-7.554 20.984-17.626 20.984-28.538S269.43 360.079 256 353.364zM163.672 370.151c-8.393-4.197-12.59-9.233-12.59-13.43s5.036-9.233 11.751-14.269c4.197-1.679 5.875-6.715 3.357-10.911-1.679-4.197-6.715-5.875-10.911-3.357-13.43 7.554-20.984 17.626-20.984 28.538 0 10.911 7.554 20.984 20.984 29.377 8.393 4.197 12.59 9.233 12.59 13.43s-5.036 9.233-12.59 13.43c-4.197 1.679-5.875 6.715-3.357 10.911 1.679 2.518 4.197 4.197 7.554 4.197 1.679 0 2.518 0 4.197-.839 13.43-7.554 20.984-17.626 20.984-28.538s-7.555-21.824-20.985-28.539zM348.328 370.151c-8.393-4.197-12.59-9.233-12.59-13.43s5.036-9.233 11.751-14.269c4.197-1.679 5.036-6.715 3.357-10.911-1.679-4.197-6.715-5.875-10.911-3.357-13.43 7.554-20.984 17.626-20.984 28.538 0 10.911 7.554 20.984 20.984 29.377 8.393 4.197 12.59 9.233 12.59 13.43s-5.036 9.233-12.59 13.43c-4.197 1.679-5.875 6.715-3.357 10.911 1.679 2.518 4.197 4.197 7.554 4.197 1.679 0 2.518 0 4.197-.839 13.43-7.554 20.984-17.626 20.984-28.538s-7.556-21.824-20.985-28.539z" />
    </StyledSvg>
)

const StyledSvg = styled(Svg).attrs((props) => ({
    fill: props.theme.featIcon
}))``

export default ACIcon;
