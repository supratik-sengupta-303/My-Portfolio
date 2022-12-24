import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "infoSlice",
  initialState: {
    name: "",
    mail: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setMail: (state, action) => {
      state.mail = action.payload;
    },
  },
});

export default infoSlice.reducer;

export const { setName, setMail } = infoSlice.actions;
