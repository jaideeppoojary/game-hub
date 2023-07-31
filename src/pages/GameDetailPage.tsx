import {
	Box,
	Button,
	GridItem,
	Heading,
	SimpleGrid,
	Spinner,
	Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import APIClinet from '../services/api-client';
import Game from '../entities/Game';
import { REST_ENDPOINT } from '../services/constants';
import { useQuery } from '@tanstack/react-query';
import useGame from '../hooks/useGame';
import { useState } from 'react';
import ExpandableText from '../components/ExpandableText';
import DefinationItem from '../components/DefinationItem';
import CriticScore from '../components/CriticScore';
import GameAttribites from '../components/GameAttribites';
import GameTrailer from '../components/GameTrailer';
import GameScreenshots from '../components/GameScreenshots';

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;
	if (error || !game) throw error;

	return (
		<SimpleGrid
			columns={{ base: 1, md: 2 }}
			spacing={5}
		>
			<GridItem>
				<Heading>{game.name}</Heading>
				<ExpandableText>{game.description_raw}</ExpandableText>
				<GameAttribites game={game} />
			</GridItem>
			<GridItem>
				<GameTrailer gameId={game.id} />
				<GameScreenshots gameId={game.id} />
			</GridItem>
		</SimpleGrid>
	);
};

export default GameDetailPage;
