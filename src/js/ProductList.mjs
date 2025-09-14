// ProductList.mjs
import { renderListWithTemplate } from "./utils.mjs";
import productCardTemplate from "./productCardTemplate.mjs";

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    try {
      // obtenemos los productos desde el DataSource
      const products = await this.dataSource.getData(this.category);
      console.log("Products:", products); // <-- verificamos aquí
      // los mandamos a renderizar
      this.renderList(products);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  }

  renderList(list) {
    if (!list || !Array.isArray(list) || list.length === 0) {
      console.warn("No hay productos para mostrar");
      return;
    }

    renderListWithTemplate(
      productCardTemplate,  // función de plantilla
      this.listElement,     // dónde insertarlo
      list,                 // los datos
      "afterbegin",         // posición
      true                  // limpiar antes de renderizar
    );
  }
}
