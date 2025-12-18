"use client";

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardTemplate } from "../../components/templates/DashboardTemplate";

export default function MachinesPage() {
  const router = useRouter();
  const hasCheckedAuth = useRef(false);

  useEffect(() => {
    if (hasCheckedAuth.current) return;
    hasCheckedAuth.current = true;

    try {
      const auth = localStorage.getItem('ufbank_auth');
      if (!auth) {
        router.push('/');
        return;
      }
    } catch (e) {
      router.push('/');
    }
  }, [router]);

  return <DashboardTemplate />;
}
