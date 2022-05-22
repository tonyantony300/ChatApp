
import React from "react";
import axios from "axios";

export default axios.create({ 
    baseURL:'https://api.unsplash.com',
    headers:{Authorization: 'Client-ID pdViI5Zzuuxko93JyQUp_pzITcctnm0HGf0W6oi4a90'  }

});