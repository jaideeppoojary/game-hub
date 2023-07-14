import { Image, ImageProps } from "@chakra-ui/react";
import magicWand from '../assets/magicWandEmoji.png';
import bullsEye from '../assets/bullseyeEmoji.png';
import thumbsUp from '../assets/thumbsUpEmoji.png';

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if(rating < 3) return null;
  const emojiMap: {[key: number]: ImageProps} = { 
    3: {src: magicWand, alt:'meh', boxSize: '25px'},
    4: {src: thumbsUp, alt:'recommended', boxSize: '25px'},
    5: {src: bullsEye, alt:'exceptional', boxSize: '35px'},
  };
  return (
    <Image {...emojiMap[rating]} marginTop={1}/>
  );
};

export default Emoji;