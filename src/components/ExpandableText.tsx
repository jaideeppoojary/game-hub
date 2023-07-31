import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
	children: string;
}

const ExpandableText = ({ children }: Props) => {
	const MAX = 300;
	const [expanded, setExpanded] = useState(false);

	if (!children) return null;

	if (children.length <= MAX) return <Text>{children}</Text>;
	const summary = expanded ? children : children.substring(0, MAX) + '...';
	return (
		<>
			<Text>
				{summary}
				<Button
					size='xs'
					colorScheme='yellow'
					marginLeft={2}
					onClick={() => setExpanded(!expanded)}
				>
					{expanded ? 'Show less' : 'Read More'}
				</Button>
			</Text>
		</>
	);
};

export default ExpandableText;
