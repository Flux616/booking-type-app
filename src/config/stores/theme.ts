import { makeAutoObservable } from 'mobx';
import { DefaultTheme } from 'styled-components/native';
import dark from '../themes/dark';
import light from '../themes/light';

class Theme {
    currentTheme: DefaultTheme = light

    constructor() {
        makeAutoObservable(this);
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme.key === 'dark' ? light : dark;
    }
}

const ThemeStore = new Theme();

export default ThemeStore;