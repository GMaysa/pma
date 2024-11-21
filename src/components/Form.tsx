import { useMemo, useState } from "react";
import Card from "./Card";

interface FormProps {
  onClose: () => void;
  onSubmit: (data: { name: string; category: string; price: number; id?: number }) => void;  // Menambahkan id sebagai optional
  products: { category: string; id: number }[]; // Daftar produk
  editProduct?: { name: string; category: string; price: number; id: number }; // Data untuk edit
}

const Form = ({ onClose, onSubmit, products, editProduct }: FormProps): JSX.Element => {
  const [name, setName] = useState(editProduct?.name || "");
  const [category, setCategory] = useState(editProduct?.category || "");
  const [price, setPrice] = useState<number | null>(editProduct?.price || null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));
    return uniqueCategories;
  }, [products]);

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(category.toLowerCase())
  );

  const handleCategorySelect = (cat: string) => {
    setCategory(cat);
    setIsCategoryOpen(false);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
    setIsCategoryOpen(true);
  };

  const handleSubmit = () => {
    if (!name || !category || price === null) {
      alert("Semua field harus diisi!");
      return;
    }
  
    const productData = { name, category, price: Number(price), id: editProduct?.id };
  
    if (editProduct) {
      onSubmit({ ...productData, id: editProduct.id });
    } else {
      onSubmit(productData); 
    }
  
    onClose(); 
  };

  return (
    <Card head="Input Data">
      <div className="pt-4 flex flex-col gap-4">
        {/* Input Nama */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nama Produk
          </label>
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
          <label className="block text-sm font-medium text-gray-700">
            Kategori
          </label>
          <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full"
            value={category}
            onChange={handleCategoryChange}
            placeholder="Masukkan kategori"
          />
          {isCategoryOpen && category && filteredCategories.length > 0 && (
            <div className="absolute bg-white border rounded-md w-full mt-1 z-10">
              {filteredCategories.map((cat) => (
                <div
                  key={cat}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleCategorySelect(cat)} 
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Input Harga */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Harga
          </label>
          <input
            type="number"
            className="mt-1 p-2 border rounded-md w-full"
            value={price || ''}
            onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : null)}
            placeholder="Masukkan harga"
          />
        </div>

        {/* Tombol Submit */}
        <div className="w-full pt-4 flex gap-2">
          <button className="w-full flex justify-center py-3 rounded-lg font-semibold text-gray-500 hover:text-gray-800 duration-300" onClick={onClose}>Close</button>
          <button className="w-full flex justify-center py-3 rounded-lg font-semibold bg-gray-100 hover:bg-gray-800 hover:text-white duration-300" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </Card>
  );
};

export default Form;
