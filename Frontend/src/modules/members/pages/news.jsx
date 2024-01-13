import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AxiosInstnace from "../../../utils/Axios/Axiox";

function Membernews() {
  const { id } = useParams();
  const [news, setnews] = useState([]);
  console.log(news)
  const ShowNews = async () => {
    return await AxiosInstnace.get(`/members/${id}/news`);
  };
  const handleSubmit = async () => {
    try {
      const response = await ShowNews();
      setnews(response.data.response.news);
    //   console.log(response.data.response.news);
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, [id]);

  return (
    <>
   <table>
  <thead>
    <tr>
      <th>Title</th>
    </tr>
  </thead>
  <tbody>
    {news.map((e, index) => (
      <>
        <tr>
          <td><img src={` picture : ${index}- ${e.newsPicture}`} alt="not found" /></td>
        </tr>
        <tr>
          <td>{`titile- ${index}- ${e.newsTitle}`}</td>
        </tr>
        <tr>
          <td>{`News-content - ${index}- ${e.newsContent}`}</td>
        </tr>
        {e.newsComents.map((items, commentIndex) => (
          <tr key={commentIndex}>
            <td>
              <h1>{`Comments :${items.comments}`}</h1>
            </td>
          </tr>
          
        ))}
      </>
    ))}
  </tbody>
</table>  
  </>
  );
}

export default Membernews;

// function Membernews() {
//     const { id } = useParams();
//     const [info, setInfo] = useState([]);

//     const showNews = async () => {
//       try {
//         const response = await AxiosInstance.get(`/members/${id}/news`);
//         console.log(response.data); // Log the actual data, not the Promise object
//         setInfo(response.data); // Update state with the fetched data
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     useEffect(() => {
//       showNews();
//     }, [id]);
