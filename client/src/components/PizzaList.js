import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions";
//import pizzas from "../data/data";
import Pizza from "./Pizza";
import Loading from "./Loading";
import Error from "./Error";
import ReactPaginate from "react-paginate";

export default function PizzaList() {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;
  const dispatch = useDispatch();
  const pizzasList = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasList;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  const displayProducts = pizzas
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((pizza) => {
      return (
        <div className='col-md-6 col-lg-4' key={pizza._id}>
          <div>
            <Pizza pizza={pizza} />
          </div>
        </div>
      );
    });
  const pageCount = Math.ceil(pizzas && pizzas.length / productsPerPage);
  const chanePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <section className='mt-5'>
      <div className='row'>
        {loading ? (
          <div className='col-12'>
            <Loading />
          </div>
        ) : error ? (
          <div className='col-12'>
            <Error error='Something went wrong' />
          </div>
        ) : (
          <>
            {displayProducts}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={chanePage}
              containerClassName={"paginateBtn"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"disBtn"}
              activeClassName={"actBtn"}
            />
          </>
        )}
      </div>
    </section>
  );
}
