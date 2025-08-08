import { computed, } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";


export let obj = {
    name: 'book',
    price: 110,
    isloading: false,
}
export let arrayobj = [
    {
        name: 'book',
        price: 110,
        isloading: false,
    },
    {
        name: 'book',
        price: 110,
        isloading: false,
    },
]

export const sstore = signalStore(
    withState(obj),
    withMethods((store) => ({
        pilus: () => {
            patchState(store, { price: store.price() + 1 })
        },
        namechange: (n: string) => {
            patchState(store, { isloading: true })
            setTimeout(() => {
                patchState(store, { name: n, isloading: false })
            }, 2000);
        }
    })),
    withComputed(store => ({
        discount: computed(() => {
            return store.price() * 0.9
        })
    }))
)
export class bro extends sstore { }