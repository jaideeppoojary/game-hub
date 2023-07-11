import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" borderRadius={10}/>
      <CardBody> 
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
