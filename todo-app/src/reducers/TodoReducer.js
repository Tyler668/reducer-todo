export const initialState = {
    todos: [
        {
            task: 'Learn about reducers',
            id: 3892987589,
            completed: false
        },
        {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
        },
        {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
        }
    ]

}

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            console.log('State:',state.todos);
            console.log('Initial State:',initialState.todos);
            
            return {
                ...state,
                todos: state.todos.concat(
                    {
                        task: action.payload,
                        id: Date.now(),
                        completed: false
                    }
                )
            };
        case 'CROSS_ITEM':
            return {
                ...state,
                completed: !state.completed
            };
        case 'CLEAR_COMPLETED':
            console.log('Clearing Completed', state)
            return {
                ...state,
                todos: state.todos.filter(item => !item.completed)
            }

        default: return state;

    }
}