const STATUS_CHECKED = 'STATUS_CHECKED';

export const statusChecked = () => ({
  STATUS_CHECKED,
  status: true,
});

export default function categories(prevState = { status: false }, action) {
  switch (action.type) {
    case STATUS_CHECKED:
      return { ...prevState, status: action.status };

    default:
      return prevState;
  }
}
