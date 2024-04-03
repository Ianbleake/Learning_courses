import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable.Jsx';

class FilterableProductTable extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="border border-solid border-blue-950 h-[350px] w-[200px] m-12">
        <SearchBar />
        <ProductTable products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;
