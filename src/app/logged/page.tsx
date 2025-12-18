"use client";

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { LoggedTemplate } from '../../components/templates/LoggedTemplate';

export default function LoggedPage() {
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
    } catch {
      router.push('/');
    }
  }, [router]);

  return <LoggedTemplate />;
}
