import { ImageSourcePropType } from "react-native";


export type RootStackParamList = {
    HomeTabs: undefined,
    Details: {
        image: ImageSourcePropType,
        country: string,
        city: string,
        rating: number,
        price: string
    },
    Location: {
        image: ImageSourcePropType,
        country: string,
        city: string,
        rating: number,
        price: string
    },
    EditProfile: {
        title: string,
        image: ImageSourcePropType,
        name: string,
        description: string,
        email: string,
        username: string,
    }
}