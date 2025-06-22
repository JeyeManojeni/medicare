import React from "react";

const GreetingCard = () => {
  const currentHour = new Date().getHours();

  const getGreeting = () => {
    if (currentHour < 12) return "Good Morning!";
    if (currentHour < 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  return (
    <div className="greeting-box">
      <h1>{getGreeting()}</h1>
      <p>Ready to stay on track with your medication?</p>
    </div>
  );
};

export default GreetingCard;