import Model from "@/models/model";
import User from "@/models/user";

export default class UserDependent extends Model {
  resource() {
    return 'users/dependent'
  }

  relations() {
    return {
      user: User
    }
  }
}
