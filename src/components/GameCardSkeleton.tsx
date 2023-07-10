import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} width='300px'>
      <Skeleton height="200px" borderRadius={10}/>
      <CardBody> 
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
