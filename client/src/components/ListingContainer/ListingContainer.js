import React, { useState } from 'react';
import Card from '../Card/Card';
import "./listingContainer.css";
import { apiData } from '../../data/apiData';
import ReactPaginate from "react-paginate";

const sortDataByPrice = (data, direction) => {
  let listingData = data.listings;

  listingData.sort((a,b) => { 
    return (b.listing_details.current_price - a.listing_details.current_price) * direction;
  });
  return {...data,listings: listingData};
}
const ListingContainer = () => {
   
  const [sortData, setSortData] = useState(apiData);
  const handleSort = (event) => {

      setSortData(sortDataByPrice(apiData, ((event.target.value === 'least-expensive') ? -1 : 1)));
      
  }
  const [pageNumber, setPageNumber] = useState(0);
  const listingPerPage = 15;
  const visitedPages =  pageNumber * listingPerPage;

  const displayListings = (data) => {
    return data.listings
    .slice(visitedPages, visitedPages + listingPerPage)
    .map((listing, index) => {
      return <Card key={index} listingData={listing} />
    });
  }  

  const pageCount = Math.ceil(sortData.listings.length / listingPerPage);
  const changePage = ({ selected }) => {
        setPageNumber(selected);
      };
    return(
      <div className='listingContainer'>
        <div className='filterData'>
          <label>Sort By: </label>
          <select defaultValue="sort" onChange={(event) => {
            event.preventDefault();
            handleSort(event);
          }}>
            <option value="most-expensive">most expensive</option>
            <option value="least-expensive">least expensive</option>
          </select>
        </div>
        <div className="listing-wrapper">
          <div className="listing-area">
            {displayListings(sortData)}
          </div>
          <ReactPaginate 
            previousLabel = {"Previous"}
            nextLabel = {"Next"}
            pageCount = {pageCount}
            onPageChange = {changePage}
            containerClassName = {"paginationBttns"}
            previousLinkClassName = {"previousBttn"}
            nextLinkClassName = {"nextBttn"}
            disabledClassName = {"paginationDisabled"}
            activeClassName = {"paginationActive"}
          />
        </div>
      </div>
    )
  }

  export default ListingContainer;