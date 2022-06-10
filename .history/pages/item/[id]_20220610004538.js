const ReadSingleItem = () => {
    return <h1> 個別アイテムページ </h1>;
};

export default ReadSingleItem;
export const getServerSideProps = async(context) => {

  const response = fetch('https://next-market-fullstack-app.vercel.app//api/item/${context.query.id}');
};
