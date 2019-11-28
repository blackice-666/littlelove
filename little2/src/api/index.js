import axios from "axios"


export let getBooklist = function(){
    return axios.get('../static/books.json')
}
