import {useState} from "react";
const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch("https://next-market-fullstack-app.vercel.app//api/item/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "authorization": "Bearer ${localStorage.getItem("token,")}
        },
        body: JSON.stringify({
          title: title,
          price: price,
          image: image,
          description: description,
        }),
      });
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("アイテム作成失敗");
    }
  };

  return (
    <div>
      <h1>アイテム作成</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          name="title"
          placeholder="アイテム名"
          required
        />
        <input
          value={price}
          onChange={e => setTitle(e.target.value)}
          type="text"
          name="price"
          placeholder="価格"
          required
        />
        <input
          value={image}
          onChange={e => setTitle(e.target.value)}
          type="text"
          name="image"
          placeholder="画像"
          required
        />
        <textarea
          value={description}
          onChange={e => setTitle(e.target.value)}
          type="text"
          name="description"
          rows="15"
          placeholder="商品説明"
          required></textarea>
        <button>作成</button>
      </form>
    </div>
  );
};

export default CreateItem;
