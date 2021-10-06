import React from 'react'
import styled from 'styled-components/native'
import { GalleryImageProp } from '../../../config/navigation/types'

const ImageGrid = ({path, id}: GalleryImageProp) => (
    <ImageContainer>
        <GalleryImage source={path} key={id}/>
    </ImageContainer>
)

const ImageContainer = styled.View`
width: 75px;
height: 75px
`

const GalleryImage = styled.Image`
flex: 1;
height: undefined;
width: undefined;
borderRadius: 6px
`

export default ImageGrid
