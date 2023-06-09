import { useState, useEffect } from 'react'
import useFetch from './components/restDataService/useFetch';
import './App.css'

const url = 'https://api.realworld.io/api//articles/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863';

function App() {
  const { data, loading, error, refetch} = useFetch(url); 

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  return (
    <>
      <div>
      <div className="App">
      <h1>
        Something
      </h1>

      <div>{data?.article.title}</div>

      <button onClick={refetch}> Refetch</button>
    </div>
      </div>
      
    </>
  )
}

export default App
