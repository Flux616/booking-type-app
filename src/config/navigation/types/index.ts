import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StackNavigationProp } from "@react-navigation/stack"
import { ImageSourcePropType } from "react-native"
import { RootStackParamList } from "../constants"

export type Profile = {
    image: ImageSourcePropType,
    name: string,
    description: string,
    email: string,
    username: string,
    status: string
}

export type Location = {
    country: string,
    city: string,
    image: ImageSourcePropType,
    id: number,
    rating: number,
    price: string
}

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>

export type DetailsScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Details'>

export type EditScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'EditProfile'>;