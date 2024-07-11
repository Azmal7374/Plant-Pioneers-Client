import { Button } from "@material-tailwind/react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { MdAddCircleOutline } from "react-icons/md";
import UpdateModal from "../../components/Modals/UpdateModal/UpdateModal";
import AddProductModal from "../../components/Modals/AddProductModal/AddProductModal";
import { useState } from "react";


const Management = () => {
  const [openAddProductModal, setOpenAddProductModal] = useState(false);

const handleAddProductModal = () => {
  setOpenAddProductModal(prevState => !prevState);
};

  return (
    <div>
      <div
        className="h-[200px] "
        style={{
          backgroundImage: `url("https://www.thetreecenter.com/c/uploads/little-lime-hydrangea-1-340x453.webp")`,
        }}
      >
        <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-5xl">Management</h1>
        </div>
      </div>

      <section className="flex flex-col justify-center antialiased  text-[#1B3048] py-20">
        <div className="h-full">
          <div className="w-[90%] mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-xl text-[#1B3048]">
                Products Table
              </h2>

              <Button
                 onClick={handleAddProductModal}
                size="md"
                className="bg-[#1B3048] hover:bg-[#275fa0] capitalize text-[15px] flex justify-center items-center gap-2 p-2"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <MdAddCircleOutline size={"24"} />
                <span>Add Product</span>
              </Button>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className={`table-auto w-full`}>
                  <thead className="text-xs font-semibold uppercase text-[#1B3048] bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="text-center text-[#1B3048] text-[12px]">
                          Image
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="text-center text-[#1B3048] text-[12px]">
                          Title
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="text-center text-[#1B3048] text-[12px]">
                          Category
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="text-center text-[#1B3048] text-[12px]">
                          Price
                        </div>
                      </th>

                      <th className="p-2 whitespace-nowrap">
                        <div className="text-center text-[#1B3048] text-[12px]">
                          Quantity
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="text-center text-[#1B3048] text-[12px]">
                          Rating
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="text-center text-[#1B3048] text-[12px]">
                          Action
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    <tr key="">
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          <div className="">
                            <img
                              className="rounded-full size-14"
                              src="https://www.thetreecenter.com/c/uploads/2016/08/Franklins_Gem_Korean_Boxwood-jpg-340x453.webp"
                              alt=""
                            />
                          </div>
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center text-[14px] text-[#1B3048]">
                          Title
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center text-[14px] text-[#1B3048]">
                          Category
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center font-medium text-[14px] text-[#1B3048]">
                          price
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center text-[14px] text-[#1B3048]">
                          Quantity
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center text-[14px] text-[#1B3048]">
                          Ratting
                        </div>
                      </td>

                      <td className="p-2 flex justify-center items-center gap-3">
                        <Button
                          size="sm"
                          className="capitalize bg-[#1B3048]"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          Update
                        </Button>

                        <Button
                          size="sm"
                          className="capitalize bg-red-500"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div
                  className={`flex items-center justify-center gap-3 w-[80%] mx-auto mt-10`}
                >
                  <Button
                    variant="text"
                    className="hidden md:flex lg:flex items-center gap-2 text-lg capitalize"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <GrFormPreviousLink size={"24"} />
                    After
                  </Button>

                  <button
                    key=""
                    className="px-3 py-1 font-bold text-[12px] md:text-[18px] lg:text-[18px] hover:bg-[#2121211a] rounded-lg"
                  >
                    index+1
                  </button>
                  <Button
                    variant="text"
                    className="hidden md:flex lg:flex items-center gap-2 text-lg capitalize"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Before
                    <GrFormNextLink size={"24"} />
                  </Button>
                </div>

                <UpdateModal />

                <AddProductModal
                  open={openAddProductModal}
                  handleOpen={handleAddProductModal}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;
