import { useAuth } from "../hooks/useAuth";

export default function Settings() {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Settings</h2>
      <div className="max-w-md rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="mb-1 text-lg font-semibold">Account</h3>
        <p className="text-sm text-slate-600">Logged in as: {user}</p>
      </div>
    </div>
  );
}
