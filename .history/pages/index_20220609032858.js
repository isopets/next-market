const ReadAllItems = () => {
  return (
    <div>
      <h1 className="h1-style"> こんにちは </h1> <h3> さようなら </h3>{" "}
    </div>
  );
};

export const getServerSideProps = () => {
  const response = fetch("http://localhost:3000/api/item/readall");
  const allItems = response.json();
  return {
    props: allItems,
  };
};

export default ReadAllItems;
