import { Box, Button, HStack, SimpleGrid } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
  } = useGames(gameQuery);

  return (
    <Box padding={"25px"}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          Array.from(Array(10)).map((d, i) => (
            <GameCardContainer key={i}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.pages?.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      { hasNextPage && <HStack justifyContent={"center"}>
        <Button
          size="lg"
          onClick={() => fetchNextPage()}
          isDisabled={isFetchingNextPage}
          marginTop={4}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      </HStack>}
    </Box>
  );
};

export default GameGrid;
