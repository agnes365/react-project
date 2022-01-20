// actions
const createActionName = actionName => `app/cards/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// actions creators
export const updateSearchString = (search) => ({ type: UPDATE_SEARCHSTRING, payload: search });
const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
        case UPDATE_SEARCHSTRING:
            return action.payload
        default:
            return statePart;
    }
}

export default searchStringReducer;