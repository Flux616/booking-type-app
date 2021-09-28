import { makeAutoObservable } from "mobx"
import { Profile } from "../navigation/types"

class ProfileStore {
    user: Profile = {
        image: require('../../../assets/images/avatar.jpg'),
        name: 'Jimmy Raynor',
        description: 'Kitty Cat',
        email: 'qwerty1234@gmail.com',
        username: 'HappyCat',
        status: '💼 At Work'
    }

    constructor() {
        makeAutoObservable(this)
    }

    setName(name: string){ this.user.name = name }
    setDescription(description: string){ this.user.description = description }
    setEmail(email: string){ this.user.email = email }
    setUsername(username: string){ this.user.username = username }
    setStatus(status: string){ this.user.status = status }
}

const store = new ProfileStore()

export default store