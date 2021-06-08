export const CHANGE_SIDE_CORNER = 'CHANGE_SIDE_CORNER';

export default function changeSideBorder(side, value) {
  return {
    type: CHANGE_SIDE_CORNER,
    payload: {
      side,
      value,
    },
  };
}
