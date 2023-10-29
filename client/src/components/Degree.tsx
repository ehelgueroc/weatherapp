type DegreeProps = {
  temp: number;
};

const Degree = ({ temp }: DegreeProps): JSX.Element => (
  <>
    <span>
      {temp}
      <sup>o</sup>
    </span>
  </>
);

export default Degree;
