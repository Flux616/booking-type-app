import React from 'react'
import {View} from 'react-native'
import PopularSection from './lowerSections/PopularSection'
import NearestSection from './lowerSections/NearestSection'

const SuggestionsSection = () => (
    <View>
        <PopularSection/>
        <NearestSection/>
    </View>
)

export default SuggestionsSection