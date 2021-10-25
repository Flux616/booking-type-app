import React, { useEffect } from 'react';
import { SectionList } from 'react-native';
import PopularCity from './PopularCity';
import NearestCity from './NearestCity';
import { City } from '../../../config/navigation/types';
import CitiesStore from '../../../config/stores/cities';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import { observer } from 'mobx-react';

type SingleSection = {
    id: string,
    title: string,
    data: Array<City[]>,
    renderBlock: (item: City[]) => React.ReactElement
}

type SectionsType = Array<SingleSection>

const Suggestions = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'screens.home.suggestions'});

    useEffect(() => {
        CitiesStore.getCities();
    }, []);

    const sections: SectionsType = [
        {
            id: 'popular',
            title: t('popular'),
            data: [CitiesStore.cities],
            renderBlock: (item) => <HorizontalList<React.ElementType>
                showsHorizontalScrollIndicator={false}
                horizontal
                data={item}
                renderItem={({ item }: {item: City}) => <PopularCity image={item.image} country={item.country} rating={item.rating} city={item.city} price={item.price} cityKey={item.cityKey} description={item.description}/>}
            />
        },
        {
            id: 'nearest',
            title: t('nearest'),
            data: [CitiesStore.cities],
            renderBlock: (item) => <VerticalList<React.ElementType>
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flex: 1}}
                scrollEnabled={false}
                data={item}
                renderItem={({ item }: {item: City}) => <NearestCity image={item.image} country={item.country} city={item.city} price={item.price} rating={item.rating} cityKey={item.cityKey} description={item.description}/>}
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
  overflow: visible;
`;

const VerticalList = styled.FlatList`
  overflow: visible;
  paddingBottom: 150px;
`;

const Header = styled.Text`
  color: ${props => props.theme.text};
  fontWeight: bold;
  marginLeft: 10px;
  paddingTop: 10px;
`;

export default observer(Suggestions);