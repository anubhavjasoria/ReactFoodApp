// import { useState } from "react"

// async function sendHttpRequest(url,config) {
//     const response = await fetch(url , config)
//     const resData = await response.json()
//     if(!response.ok)
//         throw new Error("Error sending Http requests")

//     return resData
// }
// export default function useHttp(){
//     const [isLoading,setIsLoading] = useState(false)
//     const [error,setError] = useState()
//     const [data,setData] = useState()
//     async function sendRequest(){
//         setIsLoading(true)
//         try {
//         const resData = await sendHttpRequest()
//         setData(resData)
//         } catch (error) {
//             setError(error.message)
//         }

//         setIsLoading(false)
//     }
// }