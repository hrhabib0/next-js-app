import { ObjectId } from "mongodb";
import clientPromise from "./mongodb";

export async function getProducts() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const products = await db.collection("products").find({}).toArray();
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProductById(id) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });
    return product;
  } catch (error) {
    console.error(error);
    return null;
  }
}
