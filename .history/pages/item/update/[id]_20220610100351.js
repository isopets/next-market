const UpdateItem = props => {};

export default UpdateItem;

export const getServerSideProps = async context => {
    const response = await fetch(
        `https://next-market-fullstack-app.vercel.app//api/item/${context.query.id}`
    );
    const singleItem = await response.json();

    return {
        props: singleItem,
    };
};