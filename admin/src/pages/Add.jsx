import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );
      if(response.data.success) {
        toast.success(response.data.message)
        setName('');
        setDescription('')
        setImage1(false)
        setImage2(false);
        setImage3(false)
        setImage4(false)
        setPrice("")
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      className="flex flex-col w-full items-start gap-3"
      onSubmit={onSubmitHandler}
    >
      {/* Image Upload */}
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20"
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
            />
            <input
              type="file"
              id="image1"
              hidden
              onChange={(event) => setImage1(event.target.files[0])}
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20"
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
            />
            <input
              type="file"
              id="image2"
              hidden
              onChange={(event) => setImage2(event.target.files[0])}
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20"
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=""
            />
            <input
              type="file"
              id="image3"
              hidden
              onChange={(event) => setImage3(event.target.files[0])}
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20"
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
            />
            <input
              type="file"
              id="image4"
              hidden
              onChange={(event) => setImage4(event.target.files[0])}
            />
          </label>
        </div>
      </div>

      {/* Product Name */}
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-[500px] px-3 py-2"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </div>

      {/* Product Description */}
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          type="text"
          placeholder="Write content here"
          required
          className="w-full max-w-[500px] px-3 py-2"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
      </div>

      {/* Category / Subcategory / Price */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select
            className="w-full px-3 py-2"
            onChange={(event) => setCategory(event.target.value)}
            value={category}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Sub category</p>
          <select
            className="w-full px-3 py-2"
            onChange={(event) => setSubCategory(event.target.value)}
            value={subCategory}
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Product Price</p>
          <input
            type="number"
            placeholder="25"
            className="w-full px-3 py-2 sm:w-[120px]"
            onChange={(event) => setPrice(event.target.value)}
            value={price}
          />
        </div>
      </div>

      {/* Product Sizes */}
      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
            >
              <p
                className={`${
                  sizes.includes(size) ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller Checkbox */}
      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={(e) => setBestseller(e.target.checked)}
        />
        <label htmlFor="bestseller" className="cursor-pointer">
          Add to bestseller
        </label>
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        Add
      </button>
    </form>
  );
};

export default Add;
