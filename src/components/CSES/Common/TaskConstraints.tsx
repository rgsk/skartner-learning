interface TaskConstraintsProps {
  time: string;
  memory: string;
}
const TaskConstraints: React.FC<TaskConstraintsProps> = ({ time, memory }) => {
  return (
    <div>
      <ul className="flex gap-4 text-sm">
        <li>
          <b>Time limit:</b> {time}
        </li>
        <li>
          <b>Memory limit:</b> {memory}
        </li>
      </ul>
    </div>
  );
};
export default TaskConstraints;
