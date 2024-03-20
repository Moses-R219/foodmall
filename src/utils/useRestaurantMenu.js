import { useEffect, useState } from "react";
import { MenuURL } from "../../config";
const useRestaurantMenu = (resid) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(MenuURL + resid);
    const ap = await data.json();
    // console.log(ap);
    // console.log(
    //   ap?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card
    //     .itemCards
    // );
    // setMenu(ap?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card
    //       .itemCards);
    setMenu(ap?.data)
    // setMenu(ap.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
  }

  return menu;
};
export default useRestaurantMenu;
