var defaultState = {
    list: []
}

export default (preState = defaultState, action) => {
    switch (action.type) {
        case 'INIT_DATA':
            return {
                ...preState,
                list: [...action.data]
            };
        case 'ADD_FRIEND':
            return {
                ...preState,
                list: [...preState.list, action.data]
            };
        case 'REMOVE_FRIEND':
            let newList = [...preState.list];
            newList.splice(action.index, 1);
            return {
                ...preState,
                list: newList
            };
        default:
            return preState;
    }   
}