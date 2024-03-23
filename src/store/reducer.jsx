import { configureStore } from "@reduxjs/toolkit";
import { friendList, postDetails } from "../Components/Sidebar/helper";

const initialState = {
  user: [
    {
      id: 1,
      name: "Arun gupta",
      email: "arungupta3810@gmail.com",
      gender: "Male",
      password: "Pass@123",
    },
    {
      id: 2,
      name: "Anand Raj",
      email: "anandraj@gmail.com",
      gender: "Male",
      password: "Pass@1234",
    },
  ],
  loggedInUser: null,
  post: postDetails,
  friendlist: friendList,
};

const reducer = (state = initialState, action) => {
  switch (action.Type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default configureStore({
  reducer,
});
