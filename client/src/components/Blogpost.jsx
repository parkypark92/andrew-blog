import PropTypes from "prop-types";

export default function Blogpost({ data }) {
  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </>
  );
}

Blogpost.propTypes = {
  data: PropTypes.object,
};
