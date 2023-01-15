import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';

export default function App(){
  
  const router = useRouter()
  
  useEffect(() => {
    router.push('/fantom');
  })

  return (
    <>
    </>
  )
}