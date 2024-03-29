import "./card.css";

function Card() {
  let cardData = [
    {
      title: "FREE",
      month: "$0/month",
      cardDetails: [
        { text: "Single User", correct: true },
        { text: "50GB Storage", correct: true },
        { text: "Unlimited Public Projects", correct: true },
        { text: "Community Access", correct: false },
        { text: "Dedicated Phone Support", correct: false },
        { text: "Free Subdomain", correct: false },
        { text: "Monthly Status Reports", correct: false },
      ],
    },
    {
      title: "PLUS",
      month: "$9/month",
      cardDetails: [
        { text: "5 Users", correct: true },
        { text: "50GB Storage", correct: true },
        { text: "Unlimited Public Projects", correct: true },
        { text: "Community Access", correct: true },
        { text: "Dedicated Phone Support", correct: true },
        { text: "Free Subdomain", correct: true },
        { text: "Monthly Status Reports", correct: false },
      ],
    },
    {
      title: "PRO",
      month: "$49/month",
      cardDetails: [
        { text: "Ultimated USers", correct: true },
        { text: "50GB Storage", correct: true },
        { text: "Unlimited Public Projects", correct: true },
        { text: "Community Access", correct: true },
        { text: "Dedicated Phone Support", correct: true },
        { text: "Free Subdomain", correct: true },
        { text: "Monthly Status Reports", correct: true },
      ],
    },
  ];
  // cardData.map((data, index) => {
  //   return (
  //     <div className="box" key={`card-${index}`}>
  //       <h4>{data.title}</h4>
  //       <h2>{data.month}</h2>
  //       {data.cardDetails.map((detail, index) => {
  //         return <p key={`${data.title}-${index}`}>{detail.text}</p>;
  //       })}
  //       <button>BUTTON</button>
  //     </div>
  //   );
  // });
  return cardData.map((data, index) => {
    return (
      <div className="box" key={`card-${index}`}>
        <h4>{data.title}</h4>
        <h2>{data.month}</h2>
        {data.cardDetails.map((detail, index) => {
          return (
            <div key={`${data.title}-${index}`} style={{ display: "flex" }}>
              {detail.correct ? <span> &#10004;</span> : <span>&#10006;</span>}
              <p
                style={{
                  color: detail.correct ? "inherit" : "rgb(211,211,211)",
                }}
              >
                {detail.text}
              </p>
            </div>
          );
        })}
        <button>BUTTON</button>
      </div>
    );
  });
}

export default Card;
