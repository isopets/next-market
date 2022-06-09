const ReadSingleItem = () => {
  return <h1> 個別アイテムページ </h1>;
};

export default ReadSingleItem;
export const getServerSideProps = (context) => {
  const response = fetch("http://localhost:3000/api/item/context");
};
