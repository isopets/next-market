const ReadSingleItem = (this.props) => {
  return <h1> 個別アイテムページ </h1>;
};

export default ReadSingleItem;
export const getServerSideProps = async context => {
  const response = await fetch(
    `http://localhost:3000/api/item/${context.query.id}`
  );
  const singleItem = await response.json();

  return {
    props: singleItem,
  };
};
