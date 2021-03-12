import React from "result";
import { Row, Col } from "../components/Grid"
import Jumbotron from "./components/Jumbotron"

function SearchResults() {
  return (
    <Row>
      <Col size="sm-12">
        <Jumbotron>
          <h1>This are the items that we have for you!</h1>
        </Jumbotron>
        {books.length ? (
          <List>
            {books.map((book) => (
              <ListItem key={book._id}>
                <Link to={"/books/" + book._id}>
                  <strong>
                    {book.title} by {book.author}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => deleteBook(book._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Col>
    </Row>
  );
}

export default SearchResults;
