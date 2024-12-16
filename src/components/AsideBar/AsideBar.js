import React from "react";

const AsideBar = () => {
  return (
    <aside className="d-flex flex-column align-items-stretch flex-shrink-0">
      <div className="text-center fs-5">
        <p className="mt-4 c-font-lin-fmly fs-5">
          <em>No. of books you read till now</em>
        </p>
        <div className="fs-2 fw-semibold c-inclusive-sans-font">5</div>
      </div>
      <div className="text-center w-75 mx-auto">
        <hr className="my-3 border border-danger border-2 opacity-50"></hr>
      </div>
      <div className="text-center">
        <div>
          <p className="mt-4 c-font-lin-fmly fs-5">Book Reading Status</p>
          <ul className="list-group list-group-flush rounded c-inclusive-sans-font">
            <li className="list-group-item d-flex justify-content-between">
              <span className="">BookName</span>
              <span className="">5 pages/200</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="">BookName</span>
              <span className="">5 pages/200</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="">BookName</span>
              <span className="">5 pages/200</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="">BookName</span>
              <span className="">5 pages/200</span>
            </li>
            
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default AsideBar;
