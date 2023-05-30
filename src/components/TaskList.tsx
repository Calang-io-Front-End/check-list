import { FC } from "react";
import { ITask } from "../interfaces/ITask";
import Card from "./Card";
import Item from "./Item";

interface TaskListProps {
  tasks: ITask[];
}

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((currentTask) => (
        // eslint-disable-next-line react/jsx-key
        <Card title={currentTask.title}>
          <Item id={"placeholder"} title={"placeholder"}>
            Sub-001
          </Item>
        </Card>
      ))}
    </div>
  );
};
