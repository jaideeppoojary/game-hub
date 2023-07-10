import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading} = useGames();
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl:5}} padding={"25px"} spacing={10}>
      {isLoading &&[1,2,3, 4, 5, 6].map((skeleton, i) => <GameCardSkeleton key={i}/>)}
      { games.map(g => (
        <GameCard key={g.id} game={g} />
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;