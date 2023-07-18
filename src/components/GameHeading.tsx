import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const { data: platforms } = usePlatform();
  const genre = genres.results.find(g => g.id === gameQuery.genreId);
  const platform = platforms.results.find(g => g.id === gameQuery.platformId);
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as='h1'>{heading}</Heading>
  );
};

export default GameHeading;