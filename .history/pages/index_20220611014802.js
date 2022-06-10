import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const ReadAllItems = props => {
  const [itemData, setItemData] = useState("");

  useEffect(() => {
    const getAllData = async () => {
      const response = await fetch("http://localhost:3000/api/item/readall");
      const allItems = await response.json();
      setItemData(allItems);
    };

    getAllData();
  }, []);

  return (
    <div>

      <Head>
        <title>Next Market</title>
      </Head>
      <div className="grid-container-in">
      {itemData && itemData.allItems.map(item =>
          <Link href={`/item/${item._id}`} key={item._id}>
            <a className="card">
              <Image
                src={item.image}
                width="750px"
                height="500px"
                alt="item-image"
              />
              <div className="texts-area">
                <h2> ¥{item.price} </h2> <h3> {item.title} </h3>
                <p> {item.description.substring(0, 80)}... </p>
              </div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ReadAllItems;

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://next-market-fullstack-app.vercel.app/api/item/readall"
  );
  const allItems = await response.json();

  return {
    props: allItems,
  };
};
