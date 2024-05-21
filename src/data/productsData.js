// src/data/productsData.js
export const fetchProducts = async () => {
  try {
    const response = await fetch("http://localhost:5010/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    return data; // Return the entire data object which contains the products array
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return { products: [] }; // Return an object with an empty products array on error
  }
};

export const barData = [
  {
    city: "Montreal",
    "Organic Quinoa": 69,
    "hot dogColor": "hsl(335, 70%, 50%)",
    "Organic Tomatoes": 174,
    organicTomatoesColor: "hsl(164, 70%, 50%)",
    "Free-range Eggs": 64,
    freeRangeColor: "hsl(305, 70%, 50%)",
    "Organic Olive Oil": 50,
    organicOliveOilColor: "hsl(345, 70%, 50%)",
    "Organic Spinach": 58,
    organicSpinachColor: "hsl(185, 70%, 50%)",
  },
  {
    city: "Paris",
    "Organic Quinoa": 109,
    "hot dogColor": "hsl(335, 70%, 50%)",
    "Organic Tomatoes": 14,
    organicTomatoesColor: "hsl(164, 70%, 50%)",
    "Free-range Eggs": 43,
    freeRangeColor: "hsl(305, 70%, 50%)",
    "Organic Olive Oil": 80,
    organicOliveOilColor: "hsl(345, 70%, 50%)",
    "Organic Spinach": 188,
    organicSpinachColor: "hsl(185, 70%, 50%)",
  },
  {
    city: "Casablanca",
    "Organic Quinoa": 699,
    "hot dogColor": "hsl(335, 70%, 50%)",
    "Organic Tomatoes": 274,
    organicTomatoesColor: "hsl(164, 70%, 50%)",
    "Free-range Eggs": 464,
    freeRangeColor: "hsl(305, 70%, 50%)",
    "Organic Olive Oil": 50,
    organicOliveOilColor: "hsl(345, 70%, 50%)",
    "Organic Spinach": 658,
    organicSpinachColor: "hsl(185, 70%, 50%)",
  },
  {
    city: "Berlin",
    "Organic Quinoa": 69,
    "hot dogColor": "hsl(335, 70%, 50%)",
    "Organic Tomatoes": 174,
    organicTomatoesColor: "hsl(164, 70%, 50%)",
    "Free-range Eggs": 64,
    freeRangeColor: "hsl(305, 70%, 50%)",
    "Organic Olive Oil": 50,
    organicOliveOilColor: "hsl(345, 70%, 50%)",
    "Organic Spinach": 58,
    organicSpinachColor: "hsl(185, 70%, 50%)",
  },
];

export const pieData = [
  {
    id: "Organic Quinoa",
    label: "Organic Quinoa",
    value: 97,
    color: "hsl(89, 70%, 50%)",
  },
  {
    id: "Organic Tomatoes",
    label: "Organic Tomatoes",
    value: 504,
    color: "hsl(221, 70%, 50%)",
  },
  {
    id: "Free-range Eggs",
    label: "Free-range Eggs",
    value: 293,
    color: "hsl(295, 70%, 50%)",
  },
  {
    id: "Organic Olive Oil",
    label: "Organic Olive Oil",
    value: 334,
    color: "hsl(34, 70%, 50%)",
  },
  {
    id: "Organic Spinach",
    label: "Organic Spinach",
    value: 568,
    color: "hsl(186, 70%, 50%)",
  },
];

export const geoData = [
  {
    id: "FRA",
    value: 228,
  },
  {
    id: "MAR",
    value: 728,
  },
  {
    id: "DEU",
    value: 7999928,
  },
  {
    id: "CAN",
    value: 799928,
  },
];
export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];
