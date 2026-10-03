function TaskCard({ title, category }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Category: {category}</p>
    </div>
  );
}

export default TaskCard;