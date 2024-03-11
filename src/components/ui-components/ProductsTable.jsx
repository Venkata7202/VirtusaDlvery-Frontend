import "../../assets/css/table.css";
import "../../assets/css/common.css";
import TablePagination from "./TablePagination";

function ProductsTable() {
  const headers = [
    {
      name: "Product Name",
      value_key: "name",
    },
    {
      name: "Actions",
      value_key: "actions",
      class: "mxw-10",
    },
    {
      name: "Description",
      type: "text",
      value_key: "description",
    },
    {
      name: "Category",
      value_key: "category",
    },
  ];
  const rows = [
    {
      name: "Product 1",
      description: "Product 1 description",
      category: "Category 1",
    },
    {
      name: "Product 2",
      description: "Product 2 description",
      category: "Category 2",
    },
    {
      name: "Product 3",
      description: "Product 3 description",
      category: "Category 3",
    },
    {
      name: "Product 4",
      description: "Product 4 description",
      category: "Category 4",
    },
    {
      name: "Product 5",
      description: "Product 5 description",
      category: "Category 5",
    },
  ];
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full font-[sans-serif]">
          <thead className="whitespace-wrap">
            <tr>
              <th className="w-8 pl-6">
                <input id="checkbox0" type="checkbox" className="peer hidden" />
                <label
                  htmlFor="checkbox0"
                  className="relative flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded border border-gray-400 bg-blue-500 p-0.5 before:absolute before:block before:h-full before:w-full before:bg-white peer-checked:before:hidden"
                ></label>
              </th>
              {headers.map((header, index) => {
                return (
                  <th
                    key={"header_" + index}
                    className="mandali-regular px-6 py-4 text-left text-sm font-semibold"
                  >
                    {header.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {rows.map((row, index) => {
              return (
                <tr key={"row_" + index} className="text-white">
                  <td className="w-8 pl-6">
                    <input
                      id={"checkbox" + (index + 1)}
                      type="checkbox"
                      className="checkbox peer hidden"
                    />
                    <label
                      htmlFor={"checkbox" + (index + 1)}
                      className="relative flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded border border-gray-400 bg-blue-500 p-0.5 before:absolute before:block before:h-full before:w-full before:bg-white peer-checked:before:hidden"
                    ></label>
                  </td>
                  {headers.map((header, index) => {
                    return (
                      <td
                        key={"row_" + index + "_col_" + index}
                        className={
                          "mandali-regular px-6 py-4 text-sm" + header.class
                        }
                      >
                        {row[header.value_key]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <TablePagination /> */}
    </div>
  );
}

export default ProductsTable;
