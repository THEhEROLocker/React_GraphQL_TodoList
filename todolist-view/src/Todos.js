import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_TODOS = gql`
  {
    todoes {
      id,
      description,
      isCompleted
    }
  }
`;

const Todos = () => (
  <Query query={GET_TODOS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.todoes.map(({ id, description, isCompleted }) => (
        <h4 key={id}>{description}</h4>
      ));
    }}
  </Query>
);

export default Todos;