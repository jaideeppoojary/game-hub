import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatfom from "../hooks/usePlatfom";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore(s=> s.gameQuery.genreId);
  const platformId = useGameQueryStore(s=> s.gameQuery.platformId);
  
  const genre = useGenre(genreId);
  const platform = usePlatfom(platformId);
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as='h1'>{heading}</Heading>
  );
};

export default GameHeading;