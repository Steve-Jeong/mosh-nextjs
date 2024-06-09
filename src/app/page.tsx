import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './component/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <ProductCard />
      <div className="border-gray-300 h-40 w-40 animate-spin rounded-full border-4 border-b-blue-600"></div>
    </main>
  );
}
