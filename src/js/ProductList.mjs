import { renderListWithTemplate } from "./utils.mjs";
import productCardTemplate from "./productCardTemplate.mjs";

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        // obtenemos los productos desde el DataSource
        const products = await this.dataSource.getData(this.category);
        // los mandamos a renderizar
        this.renderList(products);
    }

    renderList(list) {
        renderListWithTemplate(
            productCardTemplate,  // función de plantilla
            this.listElement,     // dónde insertarlo
            list,                 // los datos
            "afterbegin",         // posición
            true                  // limpiar antes de renderizar
        );
    }
}
