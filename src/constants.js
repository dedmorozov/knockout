export const getGridConfig = (data, saveFunction) => ({
  dataSource: {
    data: data,
    schema: {
      model: {
        id: "id",
        fields: {
          title: { type: "string", editable: true },
          brand: { type: "string", editable: true },
          category: { type: "string", editable: true },
          price: { type: "number", editable: true },
          discountPercentage: { type: "number", editable: true },
          rating: { type: "number", editable: true },
          stock: { type: "number", editable: true },
        },
      },
    },
    pageSize: 10,
  },
  pageable: true,
  sortable: true,
  filterable: true,
  editable: true,
  save: saveFunction,
  columns: [
    { field: "title", title: "Product Name" },
    { field: "brand", title: "Brand" },
    { field: "category", title: "Category" },
    { field: "price", title: "Price ($)", format: "{0:c}" },
    {
      field: "discountPercentage",
      title: "Discount (%)",
      format: "{0:n2}",
    },
    { field: "rating", title: "Rating", format: "{0:n1}" },
    { field: "stock", title: "Stock" },
    {
      field: "thumbnail",
      title: "Image",
      template:
        "<img src='#= thumbnail #' width='50' height='50' class='img-thumbnail'/>",
    },
  ],
});
