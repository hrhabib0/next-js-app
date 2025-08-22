import Image from "next/image";
import { getProducts } from "@/lib/products"; // fetch from DB

export default async function ProductHighlights() {
  // Fetch products from DB
  const products = await getProducts();

  // Pick only first 3 products for highlights
  const highlighted = products.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Product Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlighted.map((product) => (
            <div
              key={product._id.toString()}
              className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={150}
                className="mb-4 w-full h-64 object-cover"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.desc}</p>
              <p className="text-blue-600 font-semibold mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
