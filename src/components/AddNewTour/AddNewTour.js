import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewTour.css';

const AddNewTour = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data =>{ 
        console.log(data);
        axios.post('http://localhost:5000/tours',data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Successfully added');
                reset();
            }
        })
    }
    return (
        <div className="addedTourStyle">
            <h1>Add New tour</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("place", { required: true, maxLength: 20 })}  placeholder="Tour Spot"/>
                <input {...register("key", { required: true, maxLength: 20 })}  placeholder="Uniq Id"/>
                <input type="number" {...register("person")} placeholder="Person"/>
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")}  placeholder="Image Url"/>
                <textarea {...register("description")} placeholder="Tour Description" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewTour;