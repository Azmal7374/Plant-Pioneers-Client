import { Button, Dialog, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
const AddProductModal = ({ open, handleOpen }: any) => {
  const [formValues, setFormValues] = useState({
    imageLink: "",
    title: "",
    description: "",
    price: "",
    category: "default",
    quantity: "",
    rating: "default",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <Dialog
        open={open}
        handler={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="px-10 py-5">
          <h1 className="text-center text-2xl text-[#1B3048] font-semibold">
            Add New Product
          </h1>

          <form className="mt-5 flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              label="Image Link"
              required
              name="imageLink"
              value={formValues.imageLink}
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />

            <Input
              label="Title"
              required
              name="title"
              value={formValues.title}
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            <Input
              label="Price"
              required
              type="number"
              name="price"
              value={formValues.price}
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />

            <select
              name="category"
              value={formValues.category}
              onChange={handleChange}
              className="outline-none px-7 py-2 rounded-lg border border-gray-700"
            >
              <option value="default" disabled>
                Select a category
              </option>
              <option value="Indoor Plants">Indoor Plants</option>
              <option value="Outdoor Trees">Outdoor Trees</option>
              <option value="Fruit Bearing Trees">Fruit Bearing Trees</option>
              <option value="Flower Trees">Flower Trees</option>
            </select>

            <Input
              label="Quantity"
              type="number"
              required
              name="quantity"
              value={formValues.quantity}
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />

            <select
              name="rating"
              value={formValues.rating}
              onChange={handleChange}
              className="outline-none px-7 py-2 rounded-lg border border-gray-700"
            >
              <option value="default" disabled>
                Ratings
              </option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>

            <Textarea
              label="Description"
              required
              name="description"
              value={formValues.description}
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />

            <Button
              type="submit"
              className="bg-[#1B3048] capitalize text-lg"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <div className="flex justify-center items-center gap-4">
               
                Add Product
              </div>
            </Button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default AddProductModal;
