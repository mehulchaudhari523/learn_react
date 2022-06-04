import ApiService from "../../services/ApiService";
import Request from "../../services/Request";
import {useEffect} from 'react';

function Index(props){
    useEffect(() => {
        postIndex();
    });

    async function postIndex(){
        const response = await ApiService.postCall(Request.index);
        console.log(response);
    }


    return <h1>Index</h1>
}

export default Index;