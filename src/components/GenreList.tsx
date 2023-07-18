import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}
const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data: genres, isLoading, error } = useGenre();
  
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize='2xl' marginY={3}>Genres</Heading>
      <List>
        {genres?.results?.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                whiteSpace="normal"
                textAlign="left"
                _active={{ textDecoration: "underline" }}
                isActive={genre.id === selectedGenreId}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
