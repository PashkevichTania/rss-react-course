import React, {useEffect, useState} from 'react';
import axios from "../../Services/api";
const API_KEY = 'b3f3853c39804a67b2b35f7e2ad0f4c6';


const DetailsPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [arts, setArts] = useState([]);

    async function apiGet(artTitle) {
        setIsLoading(true);
        try {
            const response = await axios.get(
              `https://newsapi.org/v2/everything?q=${artTitle}&apiKey=${API_KEY}&pageSize=100`,
            );
            setArts(response.data.articles);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        let artTitle;
        const url =  window.location.href.toString().match(/details\/(.*)/gm)
        if (url[0]){
            artTitle = url[0].split('%20').join(' ').slice(8)
        }
        console.log(artTitle)
       apiGet(artTitle).then(()=>{
           console.log('then',arts)
       })
    },[])

    return (
      <div  className={'ArticleDetails'}>
        { (arts[0]) ? (
          <div>
            <h3>{arts[0].source.name}</h3>
            <h2>{arts[0].title}</h2>
            <p>
              Author:
              {arts[0].author}
            </p>
            <p>
              Published at:
              {arts[0].publishedAt}
            </p>
            <p>{arts[0].description}</p>
            <div>{arts[0].title}</div>
            <img className="articles_img" width={200} src={arts[0].urlToImage} alt={arts[0].title}/>
          </div>
        ) : (
          <div>
              {isLoading? 'loading....' : 'someting whent wrong' }
          </div>
        )}
      </div>
    )
};

export default DetailsPage;
