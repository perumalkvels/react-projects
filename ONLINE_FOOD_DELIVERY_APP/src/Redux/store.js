import { configureStore } from '@reduxjs/toolkit'

import foodListSlice from './Slices/foodlistSlice'

import userDetailSlice from './Slices/UserdetailSlice'

export const store = configureStore({
    reducer: {
      foodList : foodListSlice,
      userDetail : userDetailSlice,
    },
  })
  