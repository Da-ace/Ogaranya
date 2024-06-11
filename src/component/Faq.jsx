import "../styles/faq.css";

const Faq = ({ faq, index, isOpen, onClick }) => {
  return (
    <div className="faq">
      <h5 onClick={() => onClick(index)}>
        <span>0{index + 1}.</span> {faq.question}
      </h5>
      {isOpen && <p className={`hello_${index}`}>{faq.answer}</p>}
    </div>
  );
};

export default Faq;
