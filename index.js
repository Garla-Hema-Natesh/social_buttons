const Button = (props) => {
  const { buttonText, buttonClassName } = props;
  return <button className={buttonClassName}>{buttonText}</button>;
};

const element = (
  <div className="container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button buttonText="Like" buttonClassName="likebutton" />
      <Button buttonText="Comment" buttonClassName="commentbutton" />
      <Button buttonText="Share" buttonClassName="sharebutton" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
