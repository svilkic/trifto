import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormContainer from "./../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { getUserDetails, updateUser } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "./../components/Loader";
import { USER_UPDATE_RESET } from "../constants/userConstants";

const UserEditScreen = ({ match, history }) => {
  const userId = match.params.id;

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const { loading, error, user } = useSelector((state) => state.userDetails);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = useSelector((state) => state.userUpdate);

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push(`/admin/users`);
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [dispatch, history, user, userId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        _id: userId,
        name,
        email,
        isAdmin,
      })
    );
  };

  return (
    <>
      <Link to={`/admin/users/`} className="btn btn-light btn-sm my-3">
        Go Back
      </Link>

      <FormContainer>
        <h1>Edit User </h1>
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loadingUpdate ? (
          <Loader />
        ) : loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isadmin">
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditScreen;
