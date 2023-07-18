import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatfom from "../hooks/usePlatfom";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatfom(gameQuery.platformId);
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as='h1'>{heading}</Heading>
  );
};

export default GameHeading;