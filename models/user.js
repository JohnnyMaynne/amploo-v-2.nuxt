import Model from "@/models/model";
import Team from "@/models/team";

export default class User extends Model {
  resource() {
    return 'users'
  }

  relations() {
    return {
      team: Team
    }
  }
}
