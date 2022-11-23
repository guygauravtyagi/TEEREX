import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export interface FeatureState {
    counter: number;
}

export const appState = (state: AppState) => state;

export const productsState = createSelector(
    appState,
    (state: AppState) => state.products
);