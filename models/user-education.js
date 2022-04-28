import Model from "@/models/model";
import User from "@/models/user";

export default class UserEducation extends Model {
  resource() {
    return 'users/education'
  }

  relations() {
    return {
      user: User
    }
  }
}
