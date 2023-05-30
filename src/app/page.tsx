import AddTask from "components/AddTask";
import Card from "components/Card";
import Item from "components/Item";

export default function Home() {
  return (
    <main className="container min-h-[70vh] flex-col items-end justify-center p-24">
      <AddTask />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Tarefa 1">
          <Item id="001" title="Subtarefa-001">
            Subtarefa-001
          </Item>
          <Item id="001" title="Subtarefa-001">
            Subtarefa-001
          </Item>
        </Card>
      </div>
    </main>
  );
}
