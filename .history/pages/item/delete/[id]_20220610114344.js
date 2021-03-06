import Image from "next/image";
const DeleteItem = props => {
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://next-market-fullstack-app.vercel.app//api/item/update/${props.singleItem._id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            title: title,
            price: price,
            image: image,
            description: description,
          }),
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("アイテム編集失敗");
    }
  };

  return (
    <div>
      <h1>アイテム削除</h1>
      <form onSubmit={handleSubmit}>
        <h2>{props.singleItem.title}</h2>
        <Image
          src={props.singleItem.image}
          width="750px"
          height="500px"
          alt="item-image"
        />
        <h3>¥{props.singleItem.price}</h3>
        <p>{props.singleItem.description}</p>
        <button>削除</button>
      </form>
    </div>
  );
};
export default DeleteItem;

export const getServerSideProps = async context => {
  const response = await fetch(
    `https://next-market-fullstack-app.vercel.app//api/item/${context.query.id}`
  );
  const singleItem = await response.json();

  return {
    props: singleItem,
  };
};
