import { useState } from "react";
import Head from "next/head";
import useAuth from "../../utils/useAuth";

const CreateItem = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://next-market-fullstack-app.vercel.app/api/item/create", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
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
            alert("アイテム作成失敗");
        }
    };
};