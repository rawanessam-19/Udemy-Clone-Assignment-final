import { topCourses } from "../data/udemyData";

function CoursesSection() {
  return (
    <section>
      <h2>Students are viewing</h2>
      <div className="course-grid">
        {topCourses.map(course => (
          <div className="course-card" key={course.id}>
            <img src={course.image} />
            <h3>{course.title}</h3>
            <p>{course.instructor}</p>
            <p>{course.rating} ⭐</p>
            <strong>${course.price}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoursesSection;
