import 'dotenv/config';
import axios from 'axios';

const clusteredData=async(points)=>{
    const data={
        "formatVersion": "0.0.12",
        "routes": [
            {
                "legs": [
                    {
                        "points": []
                    }
                ]
            }
        ]
    }
    
    for(let i=0;i<points.length;i++){
       data.routes[0].legs[0].points.push({latitude:points[i].lat,longitude:points[i].lng})
    }
    const response=await axios.post('http://localhost:5000/cluster',data);
    const result=await response.data;
    return result;
}

export {clusteredData};