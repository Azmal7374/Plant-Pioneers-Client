/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dialog, Input, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "sonner";
import { useProductUpdateMutation } from "../../../redux/features/product/productSlice";

const UpdateModal = ({ open, handleOpen, productToUpdate }: any) => {
  const [updateProduct, { isLoading }] = useProductUpdateMutation();

  const [formValues, setFormValues] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
    category: "default",
    quantity: "",
    rating: "default",
  });

  useEffect(() => {
    if (productToUpdate) {
      setFormValues({
        image: productToUpdate.image,
        title: productToUpdate.title,
        description: productToUpdate.description,
        price: productToUpdate.price,
        category: productToUpdate.category,
        quantity: productToUpdate.quantity,
        rating: productToUpdate.rating,
      });
    }
  }, [productToUpdate]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Please Wait!!");
    const payload = {
      image: formValues.image,
      title: formValues.title,
      description: formValues.description,
      price: parseInt(formValues.price),
      category: formValues.category,
      quantity: parseInt(formValues.quantity),
      rating: parseInt(formValues.rating),
    };

    const id = productToUpdate._id;

    await updateProduct({ id, payload });

    handleOpen();

    toast.success("Product Updated Successfully", {
      id: toastId,
      duration: 2000,
    });
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
            Update Product With {productToUpdate?.title}
          </h1>

          <form className="mt-5 flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              name="image"
              defaultValue={formValues.image}
              label="Image"
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />

            <Input
              name="title"
              label="Title"
              defaultValue={formValues.title}
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            <select
              name="category"
              value={formValues.category}
              className="outline-none px-7 py-2 rounded-lg border border-gray-700"
              onChange={handleChange}
            >
              <option value="default" disabled>
                Select a category
              </option>
              <option value="Insite Plants">Insite Plants</option>
              <option value="Outsite Plants">Outsite Plants</option>
              <option value="Fruit Plants">Fruit Plants</option>
              <option value="Flower Plants">Flower Plants</option>
            </select>
            <Input
              name="price"
              label="Price"
              type="number"
              defaultValue={formValues.price}
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            <Input
              name="quantity"
              defaultValue={formValues.quantity}
              label="Quantity"
              type="number"
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />

            <select
              name="rating"
              value={formValues.rating}
              className="outline-none px-7 py-2 rounded-lg border border-gray-500"
              onChange={handleChange}
            >
              <option value="default" disabled>
                Ratings
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <Textarea
              name="description"
              label="Description"
              defaultValue={formValues.description}
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />

            <Button
              type="submit"
              className="bg-[#1B3048] hover:bg-[#275fa0]  capitalize text-lg"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex justify-center items-center gap-4">
                  <ImSpinner9 className="animate-spin text-[20px]" />
                  Updating Product
                </div>
              ) : (
                "Update Product"
              )}
            </Button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default UpdateModal;
