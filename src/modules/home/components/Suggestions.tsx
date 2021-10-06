import React from 'react';
import { SectionList } from 'react-native';
import PopularCity from './PopularCity';
import NearestCity from './NearestCity';
import { Location } from '../../../config/navigation/types';
import LocationsStore from '../../../config/stores/locations';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';

type SingleSection = {
    id: string,
    title: string,
    data: Array<Location[]>,
    renderBlock: (item: Location[]) => React.ReactElement
}

type SectionsType = Array<SingleSection>

const Suggestions = () => {
    const locations = LocationsStore.locations
    const { t } = useTranslation('translation', { keyPrefix: 'screens.home.suggestions'})

    const sections: SectionsType = [
        {
            id: 'popular',
            title: t('popular'),
            data: [locations],
            renderBlock: (item) => <StyledHorizontalList<React.ElementType>
                showsHorizontalScrollIndicator={false}
                horizontal
                data={item}
                renderItem={({ item }: {item: Location}) => <PopularCity image={item.image} country={item.country} rating={item.rating} city={item.city} price={item.price}/>}
            />
        },
        {
            id: 'nearest',
            title: t('nearest'),
            data: [locations],
            renderBlock: (item) => <StyledVerticalList<React.ElementType>
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={false}
                contentContainerStyle={{flex: 1}}
                scrollEnabled={false}
                data={item}
                renderItem={({ item }: {item: Location}) => <NearestCity image={item.image} country={item.country} city={item.city} price={item.price} rating={item.rating} />}
            />
        }
    ];

    return (
        <SectionList
            removeClippedSubviews={false}
            sections={sections}
            renderItem={({ section: {renderBlock}, item }) => renderBlock(item)}
            renderSectionHeader={({ section: { title } }) => (
                <StyledHeaderText>{title}</StyledHeaderText>
            )}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={false}
        />
    );
};

const StyledHorizontalList = styled.FlatList`
margin: 10px;
flexDirection: row;
overflow: visible
`

const StyledVerticalList = styled.FlatList`
paddingBottom: 150px;
overflow: visible
`

const StyledHeaderText = styled.Text`
paddingTop: 10px;
marginLeft: 10px;
fontWeight: bold;
color: ${props => props.theme.text}
`

export default Suggestions;