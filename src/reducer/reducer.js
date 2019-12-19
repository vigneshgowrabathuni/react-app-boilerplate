import {FETCH_DATA} from "../actions/action-types";

const initialState = {
    data: []
};

const pageState = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload
            }
        default : 
        return state;
    }
}

export default {pageState};