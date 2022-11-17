import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from "@mui/material"
import React, { useState } from "react"

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReview: Review[] = [
        {
            name: "Ava",
            text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nulla dolore quae sapiente quo iusto? Pariatur a quidem iste impedit dolores tempora sapiente, cum inventore fugit eaque optio sunt in",
        },
        {
            name: "Stan Wood",
            text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nulla dolore quae sapiente quo iusto? Pariatur a quidem iste impedit dolores tempora sapiente, cum inventore fugit eaque optio sunt in",
        },
    ]
    const [reviews, setReviews] = useState<Review[]>(arrReview)

    const [newReview, setNewReview] = useState<Review>({ name: "", text: "" })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(newReview.name === "" || newReview.text === "") {
            alert("all fields are requaired")
        }
        else {
            setReviews((prevState:Review[]) => {
                return [...prevState, newReview]
            }) 
            setNewReview({
                name:"",
                text:"",
            })
        }
    }

    return (
        <>
            <Typography
                variant="h5"
                sx={{ textAlign: "center", margin: "40px 0" }}
            >
                Reviews
            </Typography>
            {reviews.map(({ name, text }: Review, i) => (
                <Card sx={{ margin: "20 0" }} key={i}>
                    <CardContent>
                        <div>{name}</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            <form onSubmit={onSend}>
                <Typography variant="h6">Please leave a review</Typography>
                <div style={{ margin: "15px 0" }}>
                    <TextField
                        size="small"
                        label="Your name"
                        value={newReview.name}
                        onChange={handleChangeName}
                    />
                </div>
                <TextareaAutosize
                    minRows={5}
                    placeholder="Your message"
                    value={newReview.text}
                    onChange={handleChangeText}
                />
                <div>
                    <Button type="submit" variant="outlined">Send review</Button>
                </div>
            </form>
        </>
    )
}

export default Reviews
