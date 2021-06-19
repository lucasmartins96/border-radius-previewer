import { CHANGE_SIDE_CORNER } from "../actions";

const initialState = {
  topLeft: "0",
  topRight: "0",
  bottomLeft: "0",
  bottomRight: "0",
};

function borderRadiusReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_SIDE_CORNER:
      return { ...state, [payload.side]: payload.value };
    default:
      return state;
  }
}

export default borderRadiusReducer;
