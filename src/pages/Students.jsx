import { useState } from "react";
import useStudents from "../hooks/useStudents";
import useCourses from "../hooks/useCourses";
import StudentCard from "../components/StudentCard";
import StudentForm from "../components/StudentForm";

export default function Students() {
  const { students, loading, error, addStudent, editStudent, removeStudent } =
    useStudents();
  const { courses } = useCourses();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const visible = students.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  function closeForm() {
    setShowForm(false);
    setEditing(null);
  }

  async function handleSubmit(data) {
    if (editing) {
      await editStudent(editing.id, data);
    } else {
      await addStudent(data);
    }
    closeForm();
  }

  function handleEdit(student) {
    setEditing(student);
    setShowForm(true);
  }

  function handleDelete(id) {
    if (window.confirm("Delete this student?")) removeStudent(id);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Students</h2>
        <button
          onClick={() => setShowForm(true)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          + Add Student
        </button>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <input
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 sm:max-w-xs"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 sm:w-40"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {showForm && (
        <StudentForm
          key={editing ? editing.id : "new"}
          courses={courses}
          initialValues={editing}
          onSubmit={handleSubmit}
          onCancel={closeForm}
        />
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {visible.length === 0 && (
        <p className="mt-4 text-slate-500">No students found.</p>
      )}
    </div>
  );
}
