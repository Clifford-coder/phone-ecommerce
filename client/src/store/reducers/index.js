import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cartReducer';
import productReducer from './productsReducer';
import costReducer from './costReducer';
import authReducer from './authReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cost', 'auth'],
};

const rootReducer = combineReducers({
	auth: authReducer,
	products: productReducer,
	carts: cartReducer,
	cost: costReducer,
});

export default persistReducer(persistConfig, rootReducer);
