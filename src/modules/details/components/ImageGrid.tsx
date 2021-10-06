import React from 'react'
import styled from 'styled-components/native'
import { GalleryImageProp } from '../../../config/navigation/types'

const ImageGrid = ({path, id}: GalleryImageProp) => (
    <StyledImageContainer>
        <StyledImage source={path} key={id}/>
    </StyledImageContainer>
)

const StyledImageContainer = styled.View`
width: 75px;
height: 75px
`

const StyledImage = styled.Image`
flex: 1;
height: undefined;
width: undefined;
borderRadius: 6px
`

export default ImageGrid
