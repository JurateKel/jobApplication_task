import { useEffect, useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import mainContext from '../../context/mainContext';
import ListPageComponent from '../../components/ListPageComponent';
import FilterTableItems from '../../components/FilterTableItems';

function ListPage() {
    const { getItems } = useContext(mainContext)
    const [filteredItems, setFilteredItems] = useState([])
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5

    useEffect(() => {
      if (getItems) {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(getItems.slice(itemOffset, endOffset));
        setPageCount(Math.ceil((filteredItems.length > 0 ? filteredItems.length : getItems.length) / itemsPerPage));
      }
    }, [itemOffset, itemsPerPage, getItems, filteredItems]);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % getItems.length;
      setItemOffset(newOffset);
      window.scrollTo({top: 0, behavior: 'instant'})

    };
    return (
        <div className='list-page-wrapper'>
            <FilterTableItems setItems={setFilteredItems} getItems={filteredItems} items={getItems}/>
            {getItems ? <ListPageComponent currentItems={filteredItems.length>0 ? filteredItems : currentItems} /> : 
            (<div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
            </div>
            </div>)}
            <ReactPaginate className='paging'
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
        </div>
    
    )
  }
  export default ListPage