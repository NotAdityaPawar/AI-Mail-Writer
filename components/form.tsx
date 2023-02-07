import React, { useEffect, useState } from "react"
import axios from "axios"

import { OpenAIApi } from "openai"

export default function Form() {
	const [text, setText] = useState('')
	const [apiresponse, setApiresponse] = useState({})

	useEffect(()=>{
		axios.get("https://reqres.in/api/users/3").then((response)=>{
			console.log(response.data.data.email)
		})
	},[])


	return (
		<div className="container m-5 p-3 font-serif  justify-center grid grid-rows-2">
			<div><FormHeading /></div>
			<div className="container">
				<form >
					<label>write texzt</label>
					<input type='text' onChange={(e) => setText(e.target.value)}></input>
					<button >Submit</button>
					
					{text}
				</form>
			</div>
		</div>
	)
}


function FormHeading() {
	return (
		<div>
			Write like pro using the GPT-3 powered model
		</div>
	)
}

