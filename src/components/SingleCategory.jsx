import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewsByCategories } from "../utils/API";

export const SingleCategory = () => {
  const { slug } = useParams();
  const [SingleCategory, setSingleCategory] = useState([]);
  useEffect(() => {
    fetchReviewsByCategories(slug).then((reviewCategory) => {
        console.log(reviewCategory);
      setSingleCategory(reviewCategory);
    });
  }, [slug]);

  return (
    <ul className="review-card">
      {SingleCategory.map((chosenReview) => {
        return <div>
            <li className="itemCard" key={chosenReview.review_id}>
            <h2 className="review-title">
                {chosenReview.review_id}: {chosenReview.title}
            </h2>
            <img src={chosenReview.review_img_url} alt={chosenReview.title} className='reviewsImage' />
            <h3 className="review-votes">Votes:{chosenReview.votes}</h3>
            <h4 className="review-owner"> {chosenReview.owner}</h4>
            <p className="review-category">{chosenReview.category}</p>
        </li>
        </div>
      })}
    </ul>
  );
};