import { useEffect, useState } from "react";

function ExampleComponent() {
    const [data,setData] =useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(result => response.json())
        return () => {

        };
    },[]);
}
import React from 'react'
import {useState, useEffect} from 'react'
export default function Effect() {

    const[data , setData]=useState(null);

    useEffect(() =>{

    })
  return (
    <div>
        { data? (
            <p>Data: {data}</p>
        ) : (
            <P>Loading..</P>
        )

        }
        </div>
  )
}
