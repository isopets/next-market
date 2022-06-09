const ReadAllItems = props => {
  return (
    <div>
      <h1 className="h1-style"> こんにちは </h1>
      {props.allItems.map(item => )}
    </div>
  );
};
export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/item/readall");
  const allItems = await response.json();
  return {
    props: allItems,
  };
};
export default ReadAllItems;
