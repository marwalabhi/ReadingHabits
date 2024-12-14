import { Link } from "react-router-dom";
import "../../components/BookCard/BookCard.scss";

const BookCard = ({ dataPass }) => {
  console.log(dataPass);
  // const {volumeInfo } = dataPass;
//   00121211
  return (
    <>
      {dataPass?.volumeInfo?.imageLinks && (
        <Link to={""} className="text-decoration-none">
          <div className="col">
            <div className="card" style={{ width: "16rem" }}>
              <img
                src={dataPass?.volumeInfo?.imageLinks?.thumbnail}
                className="card-img-top img-fluid"
                alt="book_image"
              />

              <div className="card-body">
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
