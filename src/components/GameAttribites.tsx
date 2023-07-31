import React from 'react';
import Game from '../entities/Game';
import { SimpleGrid, Text } from '@chakra-ui/react';
import CriticScore from './CriticScore';
import DefinationItem from './DefinationItem';

interface Props {
	game: Game;
}
const GameAttribites = ({ game }: Props) => {
	return (
		<SimpleGrid
			columns={2}
			as="dl"
		>
			<DefinationItem term="Platform">
				{game.parent_platforms?.map(({ platform }) => (
					<Text key={platform.id}>{platform.name}</Text>
				))}
			</DefinationItem>
			<DefinationItem term="Meta Score">
				<CriticScore score={game.metacritic} />
			</DefinationItem>
			<DefinationItem term="Genre">
				{game.genres?.map((genre) => (
					<Text key={genre.id}>{genre.name}</Text>
				))}
			</DefinationItem>
			<DefinationItem term="Publisher">
				{game.publishers?.map((pusblisher) => (
					<Text key={pusblisher.id}>{pusblisher.name}</Text>
				))}
			</DefinationItem>
		</SimpleGrid>
	);
};

export default GameAttribites;
