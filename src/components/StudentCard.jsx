import { getInitials } from "../utils/helpers";

export default function StudentCard({ student, onEdit, onDelete }) {
  const isActive = student.status === "Active";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
        {getInitials(student.name)}
      </div>
      <h3 className="text-lg font-semibold">{student.name}</h3>
      <p className="text-sm text-slate-600">{student.email}</p>
      <p className="text-sm text-slate-600">{student.course}</p>
      <span
        className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
          isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
        }`}
      >
        {student.status}
      </span>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onEdit(student)}
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(student.id)}
          className="rounded-lg bg-red-600 px-3 py-1.5 text-sm text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
