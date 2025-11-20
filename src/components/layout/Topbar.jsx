import { useAuth } from "../../hooks/useAuth";

export default function Topbar() {
  const { user, logout } = useAuth();

  return (
    <header className="topbar">
      <div className="topbar__left">Clinic management</div>
      <div className="topbar__right">
        {user && (
          <>
            <span>
              {user.full_name} ({user.role})
            </span>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </header>
  );
}
