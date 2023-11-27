/* eslint-disable react/prop-types */
import StyleDataCard from "./style";

const DataCard = ({ name, value, icon }) => {
  return (
    <StyleDataCard>
      <img alt="icon" src={icon} />
      <article>
        <p>{name}</p>
        <span>{value}</span>
      </article>
    </StyleDataCard>
  );
};

export default DataCard;
