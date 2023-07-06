import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error} = useGames();
  
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl:5}} padding={"25px"} spacing={10}>
      { games.map(g => (
        <GameCard key={g.id} game={g} />
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;