const ReadAllItems = () => {
    return ( <
        div >
        <
        h1 className = "h1-style" > こんにちは < /h1> <h3> さようなら </h
        3 > { " " } <
        /div>
    );
};

export const getServerSideProps = async() => {
    const response = await fetch(
        "https://next-market-fullstack-app.vercel.app//api/item/readall"
    );
    const allItems = response.json();
    return {
        props: allItems,
    };
};

export default ReadAllItems;
export default ReadAllItems;