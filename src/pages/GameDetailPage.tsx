import { Box, Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import APIClinet from '../services/api-client';
import { Game } from '../hooks/useGames';
import { REST_ENDPOINT } from '../services/constants';
import { useQuery } from '@tanstack/react-query';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);

  if(isLoading) return <Spinner />;
  if(error || !game) throw error;

	return (
		<>
			<Box padding={5}>
				<Heading>{game.name}</Heading>
				<Text>{game.description_raw}</Text>
			</Box>
		</>
	);
};

export default GameDetailPage;
