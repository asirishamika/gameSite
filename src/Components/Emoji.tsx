import thumbUp from "../assets/thumb.png";
import trend from "../assets/trend.png";
import favorite from "../assets/favorite.png";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: thumbUp, alt: "thumbUp", boxSize: "25px" },
    4: { src: favorite, alt: "favorite", boxSize: "25px" },
    5: { src: trend, alt: "Trend", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
