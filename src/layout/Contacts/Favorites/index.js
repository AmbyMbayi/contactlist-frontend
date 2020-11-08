import React, { useRef } from "react";
import { Placeholder, Icon } from "semantic-ui-react";
import ImageThumb from "../../../components/ImageThumb";
import "./style.css";
const Favorites = ({ favorites, loading }) => {
  const listRef = useRef(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -200,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="slide-container">
      <Icon name="caret left" size="huge" onClick={scrollLeft}></Icon>
      {favorites.length > 0 && (
        <div className="items-container" ref={listRef}>
          {Array.isArray(favorites) &&
            favorites.map((item, i) => (
              <div key={item.id} className="single-item-container">
                <ImageThumb
                  firstName={item.first_name}
                  lastName={item.last_name}
                  src={item.contact_picture}
                  style={{ width: 45, height: 45 }}
                />
                <p className="name">
                  {item.first_name}
                  {item.last_name}
                </p>
              </div>
            ))}
        </div>
      )}

      {loading && (
        <>
          {" "}
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        </>
      )}
      <Icon name="caret right" size="huge" onClick={scrollRight}></Icon>
    </div>
  );
};

export default Favorites;
