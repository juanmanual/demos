import { IClickerState } from ".";
import { clickerTypes } from "../actions/clicker/clicker.actions";

const initialState: IClickerState = {
  clicks: 1500
}

export const clickerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case clickerTypes.INCREMENT:
      return {
        ...state,
        clicks: action.payload.amount + state.clicks
      }
  }
  return state;
}