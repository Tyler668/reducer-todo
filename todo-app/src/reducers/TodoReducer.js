export const initialState = {
    todos: [
        {
            task: 'Learn about reducers',
            completed: false,
            id: 3892987589
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
            console.log('Adding item:',action.payload)
            return {
                ...state,
                todos: ([...todos, action.payload])
            };
        case 'CROSS_ITEM':
            return {
                ...state,
                completed: !state.completed
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                 todos: state.todos.filter(item => !item.completed) 
            }

        default: return state;

    }
}