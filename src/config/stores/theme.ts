import { makeAutoObservable } from "mobx"
import { DefaultTheme } from "styled-components/native"
import dark from "../themes/dark"
import light from "../themes/light"

class Theme {
    isThemeDark: boolean = false
    currentTheme: DefaultTheme = light

    constructor() {
        makeAutoObservable(this)
    }

    toggleTheme() {
        if (this.isThemeDark) {
            this.currentTheme = light;
            this.isThemeDark = false
        } else {
            this.currentTheme = dark
            this.isThemeDark = true
        }
    }
}

const CurrentTheme = new Theme()

export default CurrentTheme