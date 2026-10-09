import { useEffect, useState } from "react";
import { getCourses } from "../services/api";

export default function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch(() => setError("Could not load courses."))
      .finally(() => setLoading(false));
  }, []);

  return { courses, loading, error };
}
