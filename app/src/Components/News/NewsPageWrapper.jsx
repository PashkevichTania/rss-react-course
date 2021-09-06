import React from "react";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../../Redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import NewsPage from "./NewsPage";
import { Provider } from "react-redux";

const NewsPageWrapper = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return (
    <Provider store={store}>
      <NewsPage />
    </Provider>
  );
};

export default NewsPageWrapper;
