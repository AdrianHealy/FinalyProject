import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { ClientContext } from "../contexts/ClientProvider";
import "../styles/ReviewPage.css";
// import Review from "../image/commet.jpg";

const ReviewPage = () => {
  const { getReview, review, addReview } = React.useContext(ClientContext);

  const [newReview, setNewReview] = useState({
    name: "",
    last: "",
    comment: "",
  });

  useEffect(() => {
    getReview();
  }, []);
  console.log(review);

  if (!review) {
    return <h2>Один момент</h2>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // for (const key in newReview) {
    //   if (!newReview[key]) {
    //     alert("Не чего не забыли? ");
    //     return;
    //   }
    // }
    addReview(newReview);
    getReview();
    setNewReview({
      name: "",
      last: "",
      city: "",
      comment: "",
    });
  };

  return (
    <>
      <Container>
        <div className="review__body">
          {review.map((item) => (
            <Card.Body>
              <Card.Title>{item.comment}</Card.Title>

              <Card.Subtitle className="mb-2 text-muted">
                {item.name} {item.last}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                г {item.city}
              </Card.Subtitle>
            </Card.Body>
          ))}
        </div>

        <div className="review__form__body">
          <form className="review__form__body-form" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Ваше имя"
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Фамилия"
                onChange={(e) =>
                  setNewReview({ ...newReview, last: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Город"
                onChange={(e) =>
                  setNewReview({ ...newReview, city: e.target.value })
                }
              />
            </div>

            <div>
              <input
                type="checkbox  "
                placeholder="Отзыв"
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
              />
            </div>
            <div className="review-btn">
              <button type="submit">Оставить отзыв</button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default ReviewPage;
