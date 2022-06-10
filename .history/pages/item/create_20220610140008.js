Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore

@isopets
mod728
/
nextjs-book-fullstack-app
Public
Code
Issues
Pull requests
ZenHub
Actions
1.53 MB
More
nextjs-book-fullstack-app/pages/item/create.js /
@mod728
mod728 Code: Chapter 6-9
Latest commit 924c9f8 2022年4月25日 13:29 JST
 History
 1 contributor
54 lines (49 sloc)  2.13 KB
IntelliJ IDEA
PhpStorm
WebStorm


import { useState } from "react"
import Head from "next/head"
import useAuth from "../../utils/useAuth"

const CreateItem = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch("https://nextjs-book-fullstack-app.vercel.app/api/item/create", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    title: title,
                    price: price,
                    image: image,
                    description: description
                })
            })
            const jsonData = await response.json()
            alert(jsonData.message)
        }catch(err){
            alert("アイテム作成失敗")
        }
    }

    const loginUser = useAuth()

    if(loginUser){
        return (
            <div>
                <Head><title>アイテム作成</title></Head>
                <h1 className="page-title">アイテム作成</h1>
                <form onSubmit={handleSubmit}>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="アイテム名" required/>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" name="price" placeholder="価格" required/>
                    <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="画像" required/>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" rows="15" placeholder="商品説明" required></textarea>
                    <button>作成</button>
                </form>
            </div>
        )
    }
}

export default CreateItem
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete
 Octotree
 Login with GitHub
Ext 