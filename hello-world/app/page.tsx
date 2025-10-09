'use client'

import { useEffect, useState } from "react";

export default function Home() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
          <p className="text-4xl font-bold">{message}</p>
    </div>
  );
}
