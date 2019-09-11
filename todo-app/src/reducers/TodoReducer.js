export const initialState = [{
    item: 'Learn react',
    completed: false,
    id: 6547658
},
{
    item: 'Clean room',
    completed: false,
    id: 985293
},
{
    item: 'Do homework',
    completed: false,
    id: 2345363
}]
export const TodoReducer = (state, action) => {
    //actions: ADD_TODO, TOGGLE_TODO
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,
            {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            ];
        case 'CROSS_ITEM':
            let toggled = state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                } else {
                    return item;
                }
            });
            return toggled;
        case 'CLEAR_COMPLETED':
            return state.filter(element => element.completed === false);
            
        default:
            return state;
    }
};


//  clearPurchased = () => {
//     this.setState({
//       data: this.state.data.filter(item => !item.completed)
//     });
//   };
