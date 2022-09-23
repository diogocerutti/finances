import express from "express";

const app = express();

app.get("/", function (req, res) {
  return res.status(201).json([
    {
      id: 1,
      title: "Aluguel",
      price: 1000,
      category: "Casa",
      date: "2021-02-01T00:00:00",
    },
    {
      id: 2,
      title: "Carro",
      price: 1000,
      category: "Transporte",
      date: "2021-02-01T00:00:00",
    },
    {
      id: 3,
      title: "Viagem",
      price: 1000,
      category: "laser",
      date: "2021-02-01T23:59:59",
    },
  ]);
});

app.listen(3333, function () {
  console.log("Example app listening on port 3333!");
});
