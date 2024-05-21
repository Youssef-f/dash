import React, { useState, useEffect } from "react";
import { Box, useTheme, Button, ButtonGroup } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { fetchProducts } from "../../data/productsData";

import Header from "../../components/Header";
import { tokens } from "../../theme";
import ProductModal from "../../components/ProductModal";

const Product = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock_quantity: "",
    producer_id: "",
    image: "",
    cities_available: [],
  });
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log("Fetched data:", data);
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  const handleAddProduct = () => {
    setEditedProduct(null);
    setProductData({
      name: "",
      description: "",
      category: "",
      price: "",
      stock_quantity: "",
      producer_id: "",
      image: "",
      cities_available: [],
    });
    setOpenModal(true);
  };

  const handleEdit = (row) => {
    setEditedProduct(row);
    setProductData({ ...row });
    setOpenModal(true);
  };

  const handleDelete = async (row) => {
    try {
      await fetch(`http://localhost:5010/products/${row._id}`, {
        method: "DELETE",
      });
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== row._id)
      );
      console.log("Deleted product:", row);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleSave = async () => {
    try {
      const method = editedProduct ? "PUT" : "POST";
      const url = editedProduct
        ? `http://localhost:5010/products/${editedProduct._id}`
        : "http://localhost:5010/product";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const updatedProducts = await fetchProducts();
        setProducts(updatedProducts.products || []);
        console.log("Product saved successfully.");
        setOpenModal(false);
      } else {
        console.error("Error saving product:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "stock_quantity", headerName: "Stock Quantity", type: "number" },
    { field: "producer_id", headerName: "Producer ID" },
    { field: "image", headerName: "Image" },
    { field: "cities_available", headerName: "Cities Available" },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <ButtonGroup>
          <Button
            onClick={() => handleEdit(params.row)}
            variant="contained"
            sx={{ marginRight: 1, backgroundColor: colors.greenAccent[500] }}
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(params.row)}
            variant="contained"
            sx={{ marginRight: 1, backgroundColor: colors.redAccent[500] }}
          >
            Delete
          </Button>
        </ButtonGroup>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="Admin" subtitle="Managing products" />
      <Box m="40px 0 0 0" height="75vh">
        <Button
          onClick={handleAddProduct}
          variant="contained"
          sx={{ marginBottom: 2, backgroundColor: colors.blueAccent[500] }}
        >
          Add Product
        </Button>
        {console.log("Products:", products)}
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          getRowId={(row) => row._id}
        />
      </Box>
      <ProductModal
        open={openModal}
        handleClose={handleCloseModal}
        handleSave={handleSave}
        productData={productData}
        handleInputChange={handleInputChange}
        isEdit={!!editedProduct}
      />
    </Box>
  );
};

export default Product;
