import Header from 'components/Header';
import ProductsList from 'components/ProductsList';

const Profile = () => {
  return (
    <>
      <Header
        restaurantTitle="La Dolce Vita Trattoria"
        restaurantType="Italiana"
        img="imgs/image2.png"
      />
      <ProductsList />
    </>
  );
};

export default Profile;
