import { AuthApi } from "../../../services/authService/auth.service";
import { setAccountAction } from "../action";

export const authThunk = (data) => async (dispatch) => {
  try {
    const account = await AuthApi.login(data);
    await dispatch(setAccountAction(account));
  } catch (error) {
    console.log(error);
  }
};
