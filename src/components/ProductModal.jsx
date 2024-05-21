import { useTheme } from "@mui/material";
import { Box, Button, Modal, TextField } from "@mui/material";
import { tokens } from "../theme";

const ProductModal = ({
  open,
  handleClose,
  handleSave,
  productData,
  handleInputChange,
  isEdit,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          name="name"
          label="Name"
          value={productData.name}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          name="description"
          label="Description"
          value={productData.description}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          name="category"
          label="Category"
          value={productData.category}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          name="price"
          label="Price"
          type="number"
          value={productData.price}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          name="stock_quantity"
          label="Stock Quantity"
          type="number"
          value={productData.stock_quantity}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          name="producer_id"
          label="Producer ID"
          value={productData.producer_id}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          name="image"
          label="Image"
          value={productData.image}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          name="cities_available"
          label="Cities Available"
          value={
            Array.isArray(productData.cities_available)
              ? productData.cities_available.join(",")
              : productData.cities_available
          }
          onChange={handleInputChange}
          fullWidth
        />
        <Button
          onClick={handleSave}
          variant="contained"
          sx={{ marginRight: 1, backgroundColor: colors.greenAccent[500] }}
        >
          {isEdit ? "Save Changes" : "Add Product"}
        </Button>
        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{ marginRight: 1, backgroundColor: colors.redAccent[500] }}
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default ProductModal;
