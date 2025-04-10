import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";


// This store is used to manage the state and actions related to products in a React application.
export const useProductStore = create((set) => ({
  // An array that holds the list of products. Initially set to an empty array ([]).
  products: [],
  // An object that holds the loading state. Initially set to false.
  loading: false,

  // Updates the products state in the store.
  setProducts: (products) => set({ products }),

  // Sends a POST request to create a new product and updates the store with the newly created product.
  createProduct: async (productData) => {
    set({ loading: true });
    try {
      const res = await axios.post("/products", productData);
      set((prevState) => ({
        products: [...prevState.products, res.data],
        loading: false,
      }));
    } catch (error) {
      toast.error(error.response.data.error);
      set({ loading: false });
    }
  },

  //Fetches all products from the server and updates the store's state with the retrieved data.
  fetchAllProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/products");
      set({ products: response.data.products, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
      toast.error(error.response.data.error || "Failed to fetch products");
    }
  },

  // Fetches products based on a specific category and updates the store's state with the retrieved data.
  // Fetches products from the server that belong to a specific category and updates the store's state with the retrieved data.
  fetchProductsByCategory: async (category) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/products/category/${category}`);
      set({ products: response.data.products, loading: false });
      console.log(response.data.products);
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
      toast.error(error.response.data.error || "Failed to fetch products");
    }
  },

  // Deletes a product from the server and updates the store's state by removing the deleted product from the products array.
  deleteProduct: async (productId) => {
    set({ loading: true });
    try {
      await axios.delete(`/products/${productId}`);
      set((prevProducts) => ({
        products: prevProducts.products.filter(
          (product) => product._id !== productId
        ),
        loading: false,
      }));
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.error || "Failed to delete product");
    }
  },

  // Toggles the isFeatured property of a specific product on the server and updates the store's state to reflect the change.
  toggleFeaturedProduct: async (productId) => {
    set({ loading: true });
    try {
      const response = await axios.patch(`/products/${productId}`);
      // this will update the isFeatured prop of the product
      set((prevProducts) => ({
        products: prevProducts.products.map((product) =>
          product._id === productId
            ? { ...product, isFeatured: response.data.isFeatured }
            : product
        ),
        loading: false,
      }));
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.error || "Failed to update product");
    }
  },

  // Fetches a list of featured products from the server and updates the store's state with the retrieved data.
  fetchFeaturedProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/products/featured");
      set({ products: response.data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
      console.log("Error fetching featured products:", error);
    }
  },
}));
