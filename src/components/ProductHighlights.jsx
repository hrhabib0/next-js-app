import Image from "next/image";

const products = [
    { id: 1, name: "Smartphone", desc: "Latest 5G technology.", img: "/smartphone.png" },
    { id: 2, name: "Headphones", desc: "Noise cancelling.", img: "/headphones.jpg" },
    { id: 3, name: "Smartwatch", desc: "Track your fitness goals.", img: "/smart-watch.jpg" },
];

export default function ProductHighlights() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-10">Product Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-lg transition"
                        >
                            <Image
                                src={product.img}
                                alt={product.name}
                                width={100}
                                height={100}
                                className="mx-auto mb-4 rounded-lg"
                            />
                            <h3 className="text-xl font-semibold">{product.name}</h3>
                            <p className="text-gray-600">{product.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
