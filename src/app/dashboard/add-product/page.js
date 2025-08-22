import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AddProductForm from "@/components/AddProductForm";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login"); // redirect if not logged in
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <AddProductForm />
    </div>
  );
}
