import { useState, useEffect } from "react";
import api from "../api";
import PredictionsForm from "../components/PredictionsForm";
import Prediction from "../components/Prediction";
import "../styles/Home.css";

function Home() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    getPredictions();
  }, []);

  const getPredictions = async () => {
    try {
      const res = await api.get("/api/predictions/");
      setPredictions(res.data);
    } catch (err) {
      alert(err);
    }
  };

  const deletePrediction = async (id) => {
    try {
      const res = await api.delete(`/api/predictions/${id}/`);

      if (res.status === 204) {
        alert("Prediction deleted!");
      } else {
        alert("Failed to delete note.");
      }

      await getPredictions();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <PredictionsForm onSourceChange={getPredictions} />
      <div>
        <h2>Predictions</h2>
        {predictions.map((prediction) => (
          <div key={prediction.id}>
            <Prediction prediction={prediction} onDelete={deletePrediction} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
