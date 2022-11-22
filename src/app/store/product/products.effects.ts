import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { MainService } from 'src/app/services/main.service';
import { AppState } from '../app.state';
import { loadProducts, loadProductsFailure, loadProductsSuccess } from './product.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private mainService: MainService
    ) { }

    productLoad$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProducts),
            switchMap(() =>
                from(this.mainService.getData()).pipe(
                    map((products) => loadProductsSuccess({ content: products })),
                    catchError((error) => of(loadProductsFailure({ error })))
                )
            )
        )
    );
}