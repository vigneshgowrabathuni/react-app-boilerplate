import {FETCH_DATA} from "./action-types";

export function fetchData() {
    const data = {name: "Vignesh"}
    return {
        type: FETCH_DATA,
        payload: data
    }
}