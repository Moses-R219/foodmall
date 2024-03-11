export const filterrestaurant = (search, restaurants) => {
    const fi = restaurants.filter((res) => res?.info?.name?.toLowerCase()?.includes(search?.toLowerCase()));
    // console.log(fi,search);
    return fi;
  };