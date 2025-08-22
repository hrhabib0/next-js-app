import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/lib/products";

// Next.js 13+ App Router supports async server components
export default async function ProductDetailPage({ params }) {
  console.log(params)
  const {id } = params;

  // Fetch single product (currently from mock, later DB)
  const product = await getProductById(id);

  // If product not found, show 404 message
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products" className="text-blue-600 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex md:gap-8">
          {/* Product Image */}
          <div className="md:w-1/2">
            <Image
              src={product.img}
              alt={product.name}
              width={500}
              height={400}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-6">{product.desc}</p>
            <p className="text-2xl font-semibold text-blue-600 mb-6">
              ${product.price}
            </p>
            <Link
              href="/products"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-max"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
