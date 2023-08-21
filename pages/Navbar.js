// components/Navbar.js
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="w-1/6 bg-primary-500 h-screen p-4 text-white">
    <ul className="space-y-2">
      <li><Link href="/dashboard?content=profile">My Profile</Link></li>
      <li><Link href="/dashboard?content=connection">My Connection</Link></li>
    </ul>
  </nav>
  );
}

export default Navbar;
