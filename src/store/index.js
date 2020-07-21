import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import rootReducer from "../reducers/reducer";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;

//applyMiddleware to sposob na rozszerzenie redux o niestandardowe funkcje
//nie wymaga wiedzy co dzieje sie przed nim i po nim w lancuchu
//umozliwia wysylanie akcji asynchronicznych

//Oprogramowanie pośredniczące Redux Thunk umożliwia pisanie kreatorów akcji,
//które zwracają funkcję zamiast akcji.
