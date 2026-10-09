import useStudents from "../hooks/useStudents";
import useCourses from "../hooks/useCourses";

export default function Dashboard() {
  const { students, loading, error } = useStudents();
  const { courses } = useCourses();

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  const activeCount = students.filter((s) => s.status === "Active").length;

  const stats = [
    { label: "Total Students", value: students.length },
    { label: "Active Students", value: activeCount },
    { label: "Courses", value: courses.length },
  ];

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-sm font-medium text-slate-500">{stat.label}</h3>
            <p className="mt-1 text-4xl font-bold text-slate-900">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
