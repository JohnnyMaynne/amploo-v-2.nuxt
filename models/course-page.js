import Model from "@/models/model";
import Course from "@/models/course";

export default class CoursePage extends Model {
  resource() {
    return 'course-pages'
  }

  relations() {
    return {
     course: Course,
    }
  }
}
