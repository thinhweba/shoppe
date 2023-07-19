import { createSlice } from '@reduxjs/toolkit';

// const initialAuth = {
//     token: '',
//     userId: '',
// };
const initialAuth = {
    productData:  [],
    token: '',
    userId: '',
    userName: '',
}

export const AuthReducer = createSlice({
    name: 'AuthReducer',
    initialState: initialAuth,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.userName = action.payload.userName
        },
        setLogout: (state, action) => {
            state.token = '';
            state.userId = '';
            state.userName = '';
        },
        addToCart: (state, action) => {
            const item = state.productData.find( item => item._id === action.payload._id)
            if(item){
                item.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload)
            }
        },
        deleteItem: (state, action) => {
            state.productData = state.productData.filter( item => item._id !== action.payload)
        },
        resetCart: (state, action) => {
            state.productData = [];
        },
        increamentQuantity: (state, action) => {
            const item = state.productData.find(item => item._id === action.payload._id )
            if(item){
                item.quantity++;
            }
        },
        decreamentQuantity: (state, action) => {
            const item = state.productData.find( item => item._id === action.payload._id)
            if(item.quantity === 1){
                item.quantity = 1
            }else {
                item.quantity--;
            }
        },
    }
});

export const { setToken, setLogout, addToCart, deleteItem, resetCart, increamentQuantity, decreamentQuantity } = AuthReducer.actions;
export default AuthReducer.reducer;
