import React, { useState, useMemo } from "react";
import Card from "./Card"; // Asumsi ada komponen Card

interface FormProps {
  onClose: () => void;
  onSubmit: (data: { name: string; category: string; price: number; id?: number }) => void;
  products: { category: string; id: number }[]; // Daftar produk
  editProduct?: { name: string; category: string; price: number; id: number }; // Produk yang sedang diedit
}

const FormAdd = ({ onClose, onSubmit, products, editProduct }: FormProps): JSX.Element => {
  // Menggunakan nilai default jika editProduct ada, jika tidak maka set string kosong
  const [name, setName] = useState(editProduct?.name || "");
  const [category, setCategory] = useState(editProduct?.category || "");
  const [price, setPrice] = useState<number | null>(editProduct?.price || null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // Daftar kategori produk
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));
    return uniqueCategories;
  }, [products]);

  // Menyaring kategori berdasarkan input user
  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(category.toLowerCase())
  );

  const handleSubmit = () => {
    if (!name || !category || price === null) {
      alert("Semua field harus diisi!");
      return;
    }

    const productData = { name, category, price: Number(price), id: editProduct?.id };

    // Jika sedang edit, kirim data untuk edit, jika tidak kirim data baru
    if (editProduct) {
      onSubmit({ ...productData, id: editProduct.id });
    } else {
      onSubmit(productData);
    }

    onClose(); // Tutup form setelah submit
  };

  const handleCategorySelect = (cat: string) => {
    setCategory(cat);
    setIsCategoryOpen(false);
  };

  return (
    <Card head={editProduct ? "Edit Product" : "Add Product"}>
      <div className="pt-4 flex flex-col gap-4">
        {/* Input Nama */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Produk</label>
          <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama produk"
          />
        </div>

        {/* Input Kategori */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">Kategori</label>
          <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Masukkan kategori"
          />
          {isCategoryOpen && category && filteredCategories.length > 0 && (
            <div className="absolute bg-white border rounded-md w-full mt-1 z-10">
              {filteredCategories.map((cat) => (
                <div key={cat} className="p-2 cursor-pointer" onClick={() => handleCategorySelect(cat)}>
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Input Harga */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Harga</label>
          <input
            type="number"
            className="mt-1 p-2 border rounded-md w-full"
            value={price || ""}
            onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : null)}
            placeholder="Masukkan harga"
          />
        </div>

        {/* Tombol Submit */}
        <div className="w-full pt-4 flex gap-2">
          <button className="w-full flex justify-center py-3 rounded-lg font-semibold text-gray-500 hover:text-gray-800 duration-300" onClick={onClose}>
            Close
          </button>
          <button className="w-full flex justify-center py-3 rounded-lg font-semibold bg-gray-100 hover:bg-gray-800 hover:text-white duration-300" onClick={handleSubmit}>
            {editProduct ? "Update" : "Submit"}
          </button>
        </div>
      </div>
    </Card>
  );
};

export default FormAdd;
