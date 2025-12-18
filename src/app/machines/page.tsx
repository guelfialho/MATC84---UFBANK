"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardTemplate } from "../../components/templates/DashboardTemplate";

export default function MachinesPage() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    try {
      const auth = localStorage.getItem('ufbank_auth');
      if (!auth) {
        router.push('/');
        return;
      }
      setChecked(true);
    } catch (e) {
      router.push('/');
    }
  }, [router]);

  if (!checked) return null;

  return <DashboardTemplate />;
}
