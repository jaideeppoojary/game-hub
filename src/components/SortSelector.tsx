import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const sortOrder = useGameQueryStore(s=> s.gameQuery.sortOrder);
  const setSetsortOrder = useGameQueryStore(s=> s.setsortOrder);
  const currentSortOrder: string = sortOrders.find(x=> x.value===sortOrder)?.label || 'Relevance';
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentSortOrder}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem onClick={()=> setSetsortOrder(order.value)} key={order.value}>{order.label}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
