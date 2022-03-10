import React from "react";
import { Link } from "react-router-dom";

const Home = ({ simpsonsData, data, removeItem }) => {
  return (
    <>
      <div className="container d-flex justify-content-center flex-column">
        <div className="d-flex flex-wrap">
          {simpsonsData?.map((data) => (
            <div className="card m-2" key={data.id}>
              <img
                src={data.avatar}
                className="img-thumbnail"
                alt={data.name}
              />
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <h5 className="card-title">{data.job}</h5>

                <div className="d-flex justify-content-between">
                  <Link to={`/Detail/${data.id}`}>
                    <span className="link-primary">Devamını oku</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {data?.map((item, index) => (
            <div className="card m-2" key={index}>
              <img
                src={item.avatar}
                className="img-thumbnail"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h5 className="card-title">{item.job}</h5>

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(item, index)}
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
