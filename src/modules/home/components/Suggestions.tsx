import React, { useCallback, useEffect } from 'react';
import { SectionList } from 'react-native';
import PopularCity from './PopularCity';
import NearestCity from './NearestCity';
import { Location } from '../../../config/navigation/types';
import LocationsStore from '../../../config/stores/locations';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

type SingleSection = {
    id: string,
    title: string,
    data: Array<Location[]>,
    renderBlock: (item: Location[]) => React.ReactElement
}

type SectionsType = Array<SingleSection>

const Suggestions = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'screens.home.suggestions'});

    useEffect(() => {
        LocationsStore.getCities();
    }, []);

    const sections: SectionsType = [
        {
            id: 'popular',
            title: t('popular'),
            data: [LocationsStore.locations],
            renderBlock: (item) => <HorizontalList<React.ElementType>
                showsHorizontalScrollIndicator={false}
                horizontal
                data={item}
                renderItem={({ item }: {item: Location}) => <PopularCity image={item.image} country={item.country} rating={item.rating} city={item.city} price={item.price} cityKey={item.key} description={item.description}/>}
            />
        },
        {
            id: 'nearest',
            title: t('nearest'),
            data: [LocationsStore.locations],
            renderBlock: (item) => <VerticalList<React.ElementType>
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flex: 1}}
                scrollEnabled={false}
                data={item}
                renderItem={({ item }: {item: Location}) => <NearestCity image={item.image} country={item.country} city={item.city} price={item.price} rating={item.rating} cityKey={item.key} description={item.description}/>}
            />
        }
    ];

    return (
        <SectionList
            sections={sections}
            renderItem={({ section: {renderBlock}, item }) => renderBlock(item)}
            renderSectionHeader={({ section: { title } }) => (
                <Header>{title}</Header>
            )}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={false}
        />
    );
};

const HorizontalList = styled.FlatList`
  flexDirection: row;
  margin: 10px;
  overflow: visible
`;

const VerticalList = styled.FlatList`
  overflow: visible
  paddingBottom: 150px;
`;

const Header = styled.Text`
  color: ${props => props.theme.text};
  fontWeight: bold;
  marginLeft: 10px;
  paddingTop: 10px;
`;

export default observer(Suggestions);