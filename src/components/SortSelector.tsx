import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelecrSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelecrSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder: string = sortOrders.find(x=> x.value===sortOrder)?.label || 'Relevance';
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentSortOrder}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem onClick={()=> onSelecrSortOrder(order.value)} key={order.value}>{order.label}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
