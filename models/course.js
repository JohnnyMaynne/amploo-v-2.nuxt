import Model from "@/models/model";
import CoursePage from "@/models/course-page";

export default class Course extends Model {
  resource() {
    return 'courses'
  }

  relations() {
    return {
      pages: CoursePage
    }
  }
}
