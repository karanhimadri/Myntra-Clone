import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import bagSlice from "./bagItemSlice";

const myntraStore = configureStore({
  reducer: {
    item_store: itemSlice.reducer,
    bag_store: bagSlice.reducer,
  },
});

export default myntraStore;
