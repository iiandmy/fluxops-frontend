import { createSlice } from '@reduxjs/toolkit';
import { Theme } from '~/constants';

import { RootState } from '../app-store';

type ThemeState = {
	theme: Theme;
};

const initialState: ThemeState = {
	theme: Theme.Light,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.theme = state.theme === Theme.Dark ? Theme.Light : Theme.Dark;
		},
	},
});

export const selectTheme = (state: RootState) => state.theme.theme;

export const { toggleTheme } = themeSlice.actions;
