export const MASCOTA_LIST = "MASCOTA_LIST";
export const MASCOTA_LOADING = "MASCOTA_LOADING";
export const MASCOTA_ERROR = "MASCOTA_ERROR";

export const data = (data) => ({
  type: MASCOTA_LIST,
  data,
});

export const loading = (loading) => ({
  type: MASCOTA_LOADING,
  loading,
});

export const error = (error) => ({
  type: MASCOTA_ERROR,
  error,
});

export const list = () => {
  return (dispatch) => {
    dispatch(loading(true));
    dispatch(error(null));
    fetch(`${process.env.REACT_APP_SERVER}/mascotas`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        dispatch(data(response));
      })
      .catch((e) => {
        console.log(e);
        dispatch(error(e));
      })
      .finally(() => dispatch(loading(false)));
  };
};
