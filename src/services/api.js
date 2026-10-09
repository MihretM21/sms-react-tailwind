const BASE_URL = "http://localhost:5000";

async function request(path, options) {
  const res = await fetch(`${BASE_URL}${path}`, options);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

const jsonHeaders = { "Content-Type": "application/json" };

export const getStudents = () => request("/students");
export const getCourses = () => request("/courses");

export const createStudent = (student) =>
  request("/students", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(student),
  });

export const updateStudent = (id, student) =>
  request(`/students/${id}`, {
    method: "PUT",
    headers: jsonHeaders,
    body: JSON.stringify(student),
  });

export const deleteStudent = (id) =>
  request(`/students/${id}`, { method: "DELETE" });
