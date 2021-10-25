import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import { cityImages } from '../../../../__mocks__/cityImages';
import { GalleryImageProp } from '../../../config/navigation/types';
import ImageGrid from './ImageGrid';

const Gallery = () => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.details.gallery'});

    return (
        <Wrapper>
            <Title>{t('gallery')}</Title>
            <ImageList<React.ElementType>
                renderItem={({item}: {item: GalleryImageProp}) => <ImageGrid path={item.path} id={item.id}/>}
                horizontal
                scrollEnabled={false}
                data={cityImages}
            />
        </Wrapper>
    );
};

const Wrapper = styled.View`
  marginTop: 20px;
`;

const ImageList = styled.FlatList.attrs(() => ({
    contentContainerStyle: {
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10
    }
}))``;

const Title = styled.Text`
  color: ${props => props.theme.text};
  fontSize: 18px;
  fontWeight: bold;
`;

export default Gallery;