import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.Jsx';
import ProductRow from './ProductRow.Jsx';

class ProductTable extends React.Component {
  render() {
    const { products } = this.props;
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
