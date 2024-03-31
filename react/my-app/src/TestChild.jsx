import Card from "./card";
import "./TestChild.css";
function TestChild() {
  // let test = [
  //   {
  //     id: 12,
  //     name: "Selvi",
  //     course: "Bca",
  //   },
  //   {
  //     id: 13,
  //     name: "Joel",
  //     course: "BE",
  //   },
  // ];
  // return test.map((detail) => {
  // return (
  //   <div key={detail.id}>
  //     name: {detail.name}, course: {detail.course}
  //   </div>
  // );
  // });
  return (
    <>
      <h1>React Price Card Task</h1>
      <div className="main">
        <Card />
      </div>
    </>
  );
}
export default TestChild;
