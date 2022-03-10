import client from "../api/index";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  const [simpsonsData, setSimpsonsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await client.get(`/simpsons/${id}`);
        setSimpsonsData(result.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container text-center d-flex justify-content-center mt-5">
      <div class="cardDetail">
        <img src={simpsonsData.avatar} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">
            {" "}
            <strong>Name:</strong> {simpsonsData.name}
          </h5>
          <p class="card-text">
            <strong>Job:</strong> {simpsonsData.job}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
