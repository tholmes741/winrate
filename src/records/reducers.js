import {
    CREATE_RECORD
} from './actions';

const initialState = {
    data: [],
    filter: null
};

export const records = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case CREATE_RECORD: {
            const { record } = payload;
            return {
                ...state,
                data: state.data.concat(record)
            };
        }
        default: 
            return state;
    }
}