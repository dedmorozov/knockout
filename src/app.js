import { getProducts } from "./api.js";
import { getGridConfig } from "./constants.js";

function AppViewModel() {
  var self = this;
  self.products = ko.observableArray([]);

  self.saveData = function () {
    var productsGrid = $("#productsGrid").data("kendoGrid");

    if (productsGrid) {
      var gridData = productsGrid.dataSource.view();

      console.log(JSON.stringify(gridData, null, 2));
    } else {
      console.error("Kendo Grid is not initialized properly.");
    }
  };

  self.loadProducts = (function () {
    getProducts()
      .then((data) => {
        self.products(data.products);

        $("#productsGrid").kendoGrid(
          getGridConfig(self.products(), self.saveData)
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  })();
}

$(document).ready(function () {
  ko.applyBindings(new AppViewModel());
});
