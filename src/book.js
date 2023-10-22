export const Book = (props) => {
  const { img, title, author,number } = props;
  return (
    <article className="book">
      <img src={img} alt="BLAH BLAH 1" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <span className="number">{`# ${number+1}`}</span>
    </article>
  );
};
