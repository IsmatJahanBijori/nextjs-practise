import Link from 'next/link'
import React from 'react'
import Sidebar1 from './sidebar1'
import Sidebar2 from './sidebar2'
import Layout from '../components/Layout'
import { useRouter } from 'next/router';

const Dashboard1 = () => {
    const router = useRouter();
  const content = router.query.content;

  return (
    <Layout>
      <div className="w-4/6 p-4 border-l border-gray-300">
        {content === 'profile' && <Sidebar1 />}
        {content === 'connection' && <Sidebar2 />}
      </div>
    </Layout>
  );
}

export default Dashboard1
