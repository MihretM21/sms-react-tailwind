export function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
