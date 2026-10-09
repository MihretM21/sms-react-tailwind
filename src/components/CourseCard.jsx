export default function CourseCard({ course }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
      <h3 className="mb-1 text-lg font-semibold">{course.title}</h3>
      <p className="text-sm text-slate-600">Instructor: {course.instructor}</p>
      <p className="text-sm text-slate-600">Credits: {course.credits}</p>
    </div>
  );
}
