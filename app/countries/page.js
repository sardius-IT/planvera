import Link from 'next/link';

export default function CountriesPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Study Destinations</h2>
      <ul className="space-y-2 text-blue-600 underline">
        <li><Link href="/countries/canada">Study in Canada</Link></li>
        <li><Link href="/countries/usa">Study in USA</Link></li>
        <li><Link href="/countries/uk">Study in UK</Link></li>
      </ul>
    </div>
  );
}
