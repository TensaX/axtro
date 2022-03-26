import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const selectedstore = writable("My_Details");

let latitude=0.0, longitude=0.0, place=null;
let pldata={
    latitude, 
    longitude,
    place
}
export const placeValue = writable(browser && (localStorage.getItem("placeValue") || pldata));
placeValue.subscribe((val)=> browser && (localStorage.placeValue=JSON.stringify(val)));

export const dataValue = writable(browser && JSON.parse(localStorage.getItem("dataValue") || null));
dataValue.subscribe((val)=> browser && (localStorage.dataValue=JSON.stringify(val)));
