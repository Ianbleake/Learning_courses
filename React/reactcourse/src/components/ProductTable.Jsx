import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table className='w-96 h-64 border-2 rounded-xl border-gray-300 text-white mx-auto'>
    <thead className='text-left mx-auto'>
      <tr className='text-center'>
        <th className='py-2 w-20'>Nombre</th>
        <th className='py-2 w-20'>Precio</th>
      </tr>
    </thead>
    <tbody className='text-center'>
      {rows}
    </tbody>
  </table>
  );
}

export default ProductTable;

