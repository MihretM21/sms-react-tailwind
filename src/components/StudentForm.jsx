import { useState } from "react";
import { isValidEmail } from "../utils/helpers";

const emptyForm = { name: "", email: "", course: "", status: "Active" };

const inputClass =
  "w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200";

export default function StudentForm({
  courses,
  initialValues,
  onSubmit,
  onCancel,
}) {
  const [form, setForm] = useState(initialValues || emptyForm);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim()) return setError("Name is required.");
    if (!isValidEmail(form.email)) return setError("Enter a valid email.");
    if (!form.course) return setError("Choose a course.");
    setError("");
    onSubmit(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 max-w-md space-y-3 rounded-xl bg-white p-5 shadow"
    >
      <h3 className="text-lg font-semibold">
        {initialValues ? "Edit Student" : "Add Student"}
      </h3>
      {error && <p className="text-sm text-red-600">{error}</p>}

      <input
        name="name"
        placeholder="Full name"
        value={form.name}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className={inputClass}
      />
      <select
        name="course"
        value={form.course}
        onChange={handleChange}
        className={inputClass}
      >
        <option value="">Select course</option>
        {courses.map((c) => (
          <option key={c.id} value={c.title}>
            {c.title}
          </option>
        ))}
      </select>
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className={inputClass}
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <div className="flex gap-2">
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
