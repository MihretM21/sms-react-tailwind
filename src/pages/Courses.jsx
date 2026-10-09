import useCourses from "../hooks/useCourses";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const { courses, loading, error } = useCourses();

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Courses</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
