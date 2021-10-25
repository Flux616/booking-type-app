import React from 'react';
import styled from 'styled-components/native';
import { GalleryImageProp } from '../../../config/navigation/types';

const ImageGrid = ({path, id}: GalleryImageProp) => (
    <ImageContainer>
        <GalleryImage source={{uri: path}} key={id}/>
    </ImageContainer>
);

const ImageContainer = styled.View`
  height: 75px;
  width: 75px;
`;

const GalleryImage = styled.Image`
  borderRadius: 6px;
  flex: 1;
  height: undefined;
  width: undefined;
`;

export default ImageGrid;
