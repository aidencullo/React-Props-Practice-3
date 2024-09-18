export default function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="card-content">
      {props.children}
      </div>
      </div>
    </div>
  );
}
