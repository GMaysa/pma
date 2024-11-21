import {
  ArrowLeft2,
  ArrowRight2,
  ArrowSwapVertical,
  Edit,
  SearchNormal1,
  Trash,
} from "iconsax-react";

import { useEffect, useMemo, useState } from "react";
import { Bounce, toast } from "react-toastify";
import Form from "./Form";


const Index = (): JSX.Element => {
  type Product = {
    id: number;
    product_name: string;
    price: number;
    category: string;
    
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]); 
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [card, setCard] = useState<boolean>(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);

  const itemsPerPage = 10;

  useEffect(() => {
    const storedData = localStorage.getItem("product");
    if (storedData) {
      setProducts(JSON.parse(storedData));
    }
  }, []); // Removed unnecessary dependencies

  const filteredProducts = useMemo(() => {
    if (!search) return products;

    const lowerQuery = search.toLowerCase();
    return products
      .filter(
        (product) =>
          product.product_name.toLowerCase().includes(lowerQuery) ||
          product.category.toLowerCase().includes(lowerQuery)
      )
      .sort((a, b) => a.product_name.localeCompare(b.product_name));
  }, [search, products]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const currentData = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIdx, startIdx + itemsPerPage);
  }, [currentPage, filteredProducts]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  const deleteProductById = (id: number) => {
    const updatedProducts = products.filter(
      (product: { id: number }) => product.id !== id
    );

    // Update LocalStorage and state
    localStorage.setItem("product", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);

    // Show Toast
    toast.success("Product removed successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleAddProduct = (data: { name: string; category: string; price: number }) => {
    const lastProductId = products.length > 0 ? products[products.length - 1].id : 0;
    const newProduct: Product = {
      id: lastProductId + 1,
      product_name: data.name, // Map name ke product_name
      category: data.category,
      price: data.price,
    };
  
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("product", JSON.stringify(updatedProducts));

    toast.success("Product Added Successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const updateProduct = (updatedProduct: { id: number; name: string; category: string; price: number }) => {
    // Memastikan tipe produk sesuai dengan yang diharapkan
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id
        ? { ...product, product_name: updatedProduct.name, category: updatedProduct.category, price: updatedProduct.price } // Pastikan properti sesuai
        : product
    );
  
    // Update state products
    setProducts(updatedProducts);
  
    // Simpan ke localStorage setelah update state
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleEditProduct = (product: Product) => {
    setEditProduct(product); // Set produk yang akan diedit
  };

  const handleCloseForm = () => {
    setEditProduct(null);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      {isFormOpen && (
        <Form
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleAddProduct}
          products={products}
          editProduct={editProduct}
        />
      )}
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold py-4">Product Management App</h1>
          <div className="w-fit flex items-center bg-white border border-zinc-200 rounded-lg overflow-hidden">
            <div className="pl-4 py-2">
              <SearchNormal1 className="w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Find by name or category here..."
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1); // Reset to the first page on search
              }}
              className="bg-transparent outline-none pl-4 w-64 mr-4"
            />
          </div>
        </div>
        <div className="w-full flex justify-end mb-5">
          {/* <button className="py-2 px-3 bg-gray-100 text-gray-600 rounded-lg duration-300 hover:bg-gray-800 hover:text-white">Choose</button> */}
          <button
            className="py-2 px-3 bg-gray-800 text-white rounded-lg duration-300 hover:bg-gray-600"
            onClick={() => setIsFormOpen(true)}
          >
            Add Product
          </button>
        </div>
        <div className="pt-4 bg-white border border-gray-100 rounded-lg mb-3">
          <div className="w-fit">
            <div className="mx-4 flex gap-3">
              <h6 className="text-xs text-zinc-400 pb-3 font-semibold text-left w-16">
                NO.
              </h6>
              <h6 className="text-xs text-zinc-400 pb-3 font-semibold text-left w-80">
                PRODUCT NAME
              </h6>
              <h6 className="text-xs text-zinc-400 pb-3 font-semibold text-left w-48">
                CATEGORY
              </h6>
              <h6 className="text-xs text-zinc-400 pb-3 font-semibold text-left w-28">
                PRICE
              </h6>
              <h6 className="text-xs text-zinc-400 pb-3 font-semibold text-left w-20">
                ACTION
              </h6>
            </div>
            <hr className="w-full border-zinc-100" />
            {currentData.length > 0 ? (
              currentData.map((data, idx) => (
                <div className="mx-4 flex gap-3 items-center" key={data.id}>
                  <div className="text-base text-zinc-400 py-3 w-16">
                    {idx + 1 + (currentPage - 1) * itemsPerPage}
                  </div>
                  <div className="text-base text-zinc-800 py-3 w-80">
                    {data.product_name}
                  </div>
                  <div className="text-base text-zinc-400 py-3 w-48">
                    {data.category}
                  </div>
                  <div className="text-base text-zinc-800 py-3 w-28">
                    ${data.price}
                  </div>
                  <div className="w-20 flex gap-2">
                    <button
                      className="p-1.5 bg-gray-50 border border-gray-100 rounded-lg duration-300 hover:bg-gray-800 btn-hvr"
                      onClick={() => setCard(true)}
                    >
                      <Edit className="w-4 h-4 text-gray-600 icon" />
                    </button>
                    <button
                      className="p-1.5 bg-red-50 border border-red-100 rounded-lg duration-300 hover:bg-red-600 btn-hvr"
                      onClick={() => deleteProductById(data.id)}
                    >
                      <Trash className="w-4 h-4 text-red-600 icon" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h3>Data not found!</h3>
            )}
          </div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <p className="text-sm text-zinc-400">
            total products: {filteredProducts.length}
          </p>
          <div className="w-fit flex border border-zinc-100 rounded-lg overflow-hidden">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`px-3 py-2 ${
                currentPage > 1
                  ? "hover:bg-gray-200"
                  : "text-gray-300 cursor-default"
              }`}
            >
              <ArrowLeft2 className="w-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 ${
                  currentPage === page
                    ? "bg-gray-200 text-gray-600"
                    : "hover:bg-slate-100"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-3 py-2 ${
                currentPage < totalPages
                  ? "hover:bg-gray-200"
                  : "text-gray-300 cursor-default"
              }`}
            >
              <ArrowRight2 className="w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
