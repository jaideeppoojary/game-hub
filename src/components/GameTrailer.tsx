import React from 'react';
import useTrailer from '../hooks/useTrailers';

interface Props {
	gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
	const { data, isLoading, error } = useTrailer(gameId);
	if (isLoading) return null;
	if (error) throw error;
	const first = data?.results[0];

	return first ? (
		<video
			src={first.data[480]}
			poster={first.preview}
      controls={true}
		/>
	) : null;
};

export default GameTrailer;
