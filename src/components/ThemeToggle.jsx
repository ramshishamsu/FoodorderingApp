import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button onClick={() => setDark((d) => !d)} title="Toggle theme" className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
