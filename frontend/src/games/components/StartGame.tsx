import { useCallback, useEffect, useState } from "react";
import GameFactory from "../factory/gameFactory";
import GameWrapper from "../wrapper/GameWrapper";
import axios from "axios";
import { useParams } from "react-router-dom";

const StartGame = () => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const { gameType } = useParams();

  // Define fetchData using useCallback
  const fetchData = useCallback((type) => {
    setLoading(true);
    axios
      .get(`/api/v1/${type}`)
      .then((response) => {
        const data = response.data;
        const newGame = GameFactory.createGame(type, data);
        setGame(newGame);
        setLoading(false);
        console.log("fetched");
      })
      .catch((error) => {
        console.error("Failed to load game data:", error);
        setGame(null);
        setLoading(false); // Set loading to false also on error
      });
  }, []);

  // useEffect to call fetchData when gameType changes
  useEffect(() => {
    if (gameType) {
      fetchData(gameType);
    }
  }, [gameType, fetchData]);

  const onGameOver = useCallback(() => {
    setGame(null); 
  }, []);

  if (loading) return <div>Loading...</div>;

  return <GameWrapper game={game} gameType={gameType} onGameOver={onGameOver} />;
};

export default StartGame;
