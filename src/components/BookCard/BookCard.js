import { Link } from "react-router-dom";
import "../../components/BookCard/BookCard.scss";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const BookCard = ({ dataPass }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => {
    setShowModal(true);
  };

  console.log(dataPass);
  
  return (
    <>
      {dataPass?.volumeInfo?.imageLinks && (
        <Link to={""} className="text-decoration-none" onClick={handleModalShow}>
          <div className="col">
            <div className="card border-0 bg-transparent" style={{ width: "17rem" }}>
              <img
                src={dataPass?.volumeInfo?.imageLinks?.thumbnail}
                className="img-fluid rounded-end-4 w-75"
                alt="book_image"
                style={{height: "290px"}}
              />

              <div className="card-body w-75 px-1">
                <h5 className="card-title fs-6">
                  {dataPass?.volumeInfo?.title}
                </h5>
                <div className="">
                  <p className="card-text text-muted">
                    {dataPass?.volumeInfo?.authors?.join(", ")}
                  </p>
                </div>
                <div className="d-flex">
                  {dataPass?.volumeInfo?.averageRating && (
                    <div className="fw-medium d-flex c-gap-star ">
                      <span className="col c-star-fill">
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span className="col">
                        {dataPass?.volumeInfo?.averageRating}
                      </span>
                    </div>
                  )}
                  <span className="text-muted"><i class="bi bi-dot"></i></span>
                  <div className="text-muted">{dataPass?.volumeInfo?.pageCount}</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default BookCard;
