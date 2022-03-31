const STATUS_CHECKED = 'STATUS_CHECKED';

export const statusChecked = () => ({
  type: STATUS_CHECKED,
  status: 'Under construction',
});

export default function categories(prevState = 'Under construction', action) {
  switch (action.type) {
    case STATUS_CHECKED:
      return action.status;

    default:
      return prevState;
  }
}
