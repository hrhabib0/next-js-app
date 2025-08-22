"use client";

import { useState } from "react";

export default function AddProductForm() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";

    // ✅ Upload image to Cloudinary
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", uploadPreset);

      const uploadRes = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const uploadData = await uploadRes.json();
      imageUrl = uploadData.secure_url;
    }
    // ✅ Convert price to number
    const productData = {
      ...formData,
      price: Number(formData.price),
      image: imageUrl,
    };

    // ✅ Send product data to your API
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    if (res.ok) {
      alert("✅ Product added successfully!");
      setFormData({ name: "", price: "", description: "" });
      setFile(null);
    } else {
      alert("❌ Failed to add product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>
  );
}
