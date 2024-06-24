import axios from "axios";
const searchImages = async (term) =>{
   const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID MhA99_pAwFfk4e3ajsORYE01Ma0E-8gkGLNyMi2TNNY' 
        },
        params: {
            query : term
        }
    })

    return response.data.results;
}
export default searchImages;