import Model from "@/models/model";
import User from "@/models/user";

export default class UserLeaveBalance extends Model {
  resource() {
    return 'users/leave/balances'
  }

  relations() {
    return {
      user: User
    }
  }
}
