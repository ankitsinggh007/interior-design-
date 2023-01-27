import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import classes from "./Modular.module.css"
import Product from '../Product'
import { FaHeart } from "react-icons/fa"
import { User } from '../App'
import Swal from 'sweetalert2'
import { doc, updateDoc } from "firebase/firestore";
import db from '../Component/Firbase';
function Modular() {
    const [data, setdata] = useState([]);
    const { LoggedInUserData, setLoggedInUserData } = useContext(User);
    const LikedImage = async (obj, e) => {
        const array1 = [];
        const array = LoggedInUserData.Liked.forEach((obj) => array1.push(obj.id))
        console.log(array1, "array1");

        if (LoggedInUserData.isAuthrized) {
            console.log(LoggedInUserData.Liked.includes(obj.id),obj.id)
            if (array1.includes(obj.id)) {
                const index = LoggedInUserData.Liked.findIndex((obj1) => obj1.id === obj.id);
                console.log(LoggedInUserData.Liked,"before")
                console.log(index,"index")
                LoggedInUserData.Liked.splice(index, 1);
                console.log(LoggedInUserData.Liked,"after")

                const obj1 = {
                    ...LoggedInUserData,
                    Liked: [...LoggedInUserData.Liked]
                }
                setLoggedInUserData({ ...obj1 });
                const washingtonRef = doc(db, "User", LoggedInUserData.id);
                await updateDoc(washingtonRef, {
                    Liked: obj1.Liked,
                });
                await Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Removed from wishlist',
                    showConfirmButton: true,
                    timer: 1500
                })

            }
            else {
                const obj1 = {
                    ...LoggedInUserData,
                    Liked: [...LoggedInUserData.Liked, obj]
                }
                setLoggedInUserData({ ...obj1 });
                const washingtonRef = doc(db, "User", LoggedInUserData.id);
                await updateDoc(washingtonRef, {
                    Liked: obj1.Liked,
                });
                await Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Added to wishlist',
                    showConfirmButton: true,
                    timer: 1500
                })
            }
        }
        else {
            await Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'please log in',
                showConfirmButton: true,
                timer: 1500
            })

        }
    }
    console.log(LoggedInUserData)
    return (
        <div className={classes.Container}>
            {Product.map((obj, index) => {
                const array1 = [];
                const array = LoggedInUserData.Liked.forEach((obj) => array1.push(obj.id))
                console.log(array1, "array1");
                return (
                    <div key={index} className={classes.item}>
                        <img src={obj.image} className={classes.img} />
                        <FaHeart onClick={(e) => LikedImage(obj, e)} className={classes.icons}
                            color={array1.includes(obj.id) ? "red" : "grey"}

                        />

                        <span className={classes.title}>{obj.name}</span>
                        <span className={classes.specs}>Size | {obj.size}</span>

                    </div>
                )
            })
            }



        </div>
    )
}

export default Modular