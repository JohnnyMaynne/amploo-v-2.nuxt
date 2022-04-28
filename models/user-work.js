import Model from "@/models/model";
import User from "@/models/user";

export default class UserWork extends Model {
  resource() {
    return 'users/work'
  }

  relations() {
    return {
      user: User
    }
  }
}
