const ReadSingleItem = () => {
    return <h1 > 個別アイテムページ < /h1>;
};

export default ReadSingleItem;
export const getServerSideProps = async context => {
    const response = await fetch(
        `https://next-market-fullstack-app.vercel.app//api/item/${context.query.id}`
    );

    console.log(context);
    return {
        props: singleItem,
    };
    c;
};