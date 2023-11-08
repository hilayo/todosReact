import { createContext, useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const [feedback, setFeddback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchFeedback();
  }, []); //[] run only once on load

  //fatch feedback
  const fetchFeedback = async () => {
    const response = await fetch("/feedback?_sort=id&_order=desc");
    const data = await response.json();
    setFeddback(data);
    setIsLoading(false);
  };
  const deleteItem = async (id) => {
    if (window.confirm("do you want to delete?")) {
      console.log(id);
      const response = await fetch(`/feedback/${id}`, {
        method: "DELETE"
      });
      setFeddback(feedback.filter((item) => item.id !== id));
    }
  };

  const addNewFeedback = async (note) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const data = await response.json();
    //note.id=uuidv4();
    setFeddback([data, ...feedback]);
  };

  const updateFeedback =async (id, upitem) => {
    const response = fetch(`/feedback/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upitem),
    });
    
    const data = await response;
    setFeddback(
      feedback.map((item) => (item.id == id ? { ...item, ...upitem } : item))
    );
  };
  const editFeedback = (item) => {
    setfeedbackEdit({ item, edit: true });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
        deleteItem,
        addNewFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
