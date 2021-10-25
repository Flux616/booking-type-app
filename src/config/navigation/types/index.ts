import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    HomeTabs: undefined,
    Details: {
        image: string,
        country: string,
        city: string,
        rating: number,
        price: number,
        cityKey: string | number[],
        description: string
    },
    Location: {
        image: string,
        country: string,
        city: string,
        rating: number,
        price: number
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

export type City = {
    country: string,
    city: string,
    image: string,
    cityKey: string | number[],
    rating: number,
    price: number,
    description: string
}

export type GalleryImageProp = { path: string, id: string }

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>

export type DetailsScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Details'>

export type EditScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'EditProfile'>;