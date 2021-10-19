import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    HomeTabs: undefined,
    Details: {
        image: string,
        country: string,
        city: string,
        rating: string,
        price: string,
        cityKey: string,
        description: string
    },
    Location: {
        image: string,
        country: string,
        city: string,
        rating: string,
        price: string
    },
    EditProfile: undefined
}

export type Profile = {
    image: string,
    name: string,
    description: string,
    email: string,
    username: string,
    status: string
}

export type Location = {
    country: string,
    city: string,
    image: string,
    key: string,
    rating: string,
    price: string,
    description: string
}

export type GalleryImageProp = { path: string, id: string }

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>

export type DetailsScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Details'>

export type EditScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'EditProfile'>;