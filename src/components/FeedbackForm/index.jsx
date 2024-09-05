import React, { useEffect, useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    setFeedbackList(JSON.parse(localStorage.getItem("feedbackList")) || []);
  }, []);

  const handleSubmitFeedback = () => {
    if(name && feedback) {
      setFeedbackList(prevFeedbackList => [...prevFeedbackList, {name, feedback, likes: 0}]);
      localStorage.setItem("feedbackList", JSON.stringify(feedbackList));
    } 

    setName("");
    setFeedback("");
  };

  const handleLikeFeedback = (index) => {
    const newFeedbackList = [...feedbackList];
    newFeedbackList[index].likes += 1;
    setFeedbackList(newFeedbackList);
    localStorage.setItem("feedbackList", JSON.stringify(newFeedbackList));
  };


  return (
    <section className="container mx-auto">
      <div className="mb-4">
        <div className="mb-2">
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary mb-2"
            type="text"
            required
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
            placeholder="Saran Anda..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <button onClick={handleSubmitFeedback} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary focus:outline-none focus:ring focus:ring-secondary">
          Kirim Saran
        </button>
        <div className="mt-6">
        {feedbackList?.map((item, index) => (
          <div
            key={item.name + index}
            className="p-4 border border-gray-200 rounded-md mb-4 flex justify-between items-center"
          >
            <div>
              <p className="font-bold text-xl">{item.name}</p>
              <p>{item.feedback}</p>
            </div>
            <button
              onClick={() => handleLikeFeedback(index)}
              className="px-3 py-1 bg-primary text-white rounded-md hover:bg-secondary"
            >
              {`${item.likes} ${item.likes > 1 ? "Likes" : "Like"}`}
            </button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
