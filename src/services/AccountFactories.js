import ApiConstants from "../adapter/ApiConstants";
import ApiOperation from "../adapter/ApiOperation";

const AccountFactories = {
  requestLogin: async data => {
    return ApiOperation.request({
      url: ApiConstants.LOGIN,
      method: "POST",
      data: data
    });
  },
  requestLSignUp: async data => {
    return ApiOperation.request({
      url: ApiConstants.SIGNUP,
      method: "POST",
      data: data
    });
  },
  requestUpdate: async (id,data) => {
    return ApiOperation.request({
      url: `${ApiConstants.ACCOUNT}/${id}`,
      method: "PUT",
      data: data
    });
  }
};

export default AccountFactories;
