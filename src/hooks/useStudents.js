import { useEffect, useState } from "react";
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../services/api";

export default function useStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getStudents()
      .then(setStudents)
      .catch(() =>
        setError("Could not load students. Is the API running? (npm run api)")
      )
      .finally(() => setLoading(false));
  }, []);

  async function addStudent(data) {
    const created = await createStudent(data);
    setStudents((prev) => [...prev, created]);
  }

  async function editStudent(id, data) {
    const updated = await updateStudent(id, data);
    setStudents((prev) => prev.map((s) => (s.id === id ? updated : s)));
  }

  async function removeStudent(id) {
    await deleteStudent(id);
    setStudents((prev) => prev.filter((s) => s.id !== id));
  }

  return { students, loading, error, addStudent, editStudent, removeStudent };
}
