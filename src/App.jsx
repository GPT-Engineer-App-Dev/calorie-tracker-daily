import { useState } from "react";
import { Button, Input, Table, TableRow, TableCell } from "@/components/ui";
import "./App.css";

function App() {
  const [calories, setCalories] = useState([]);
  const [newCalorie, setNewCalorie] = useState('');
  const [newDate, setNewDate] = useState('');

  const addCalorie = () => {
    if (!newCalorie || !newDate) return;
    const newEntry = { date: newDate, calorie: newCalorie };
    setCalories([...calories, newEntry]);
    setNewCalorie('');
    setNewDate('');
  };

  const deleteCalorie = (index) => {
    const updatedCalories = calories.filter((_, i) => i !== index);
    setCalories(updatedCalories);
  };

  return (
    <>
      <div className="my-4">
        <Input placeholder="Enter calories" value={newCalorie} onChange={(e) => setNewCalorie(e.target.value)} />
        <Input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
        <Button onClick={addCalorie}>Add Calorie Entry</Button>
      </div>
      <Table>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Calories</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
        {calories.map((entry, index) => (
          <TableRow key={index}>
            <TableCell>{entry.date}</TableCell>
            <TableCell>{entry.calorie}</TableCell>
            <TableCell><Button onClick={() => deleteCalorie(index)}>Delete</Button></TableCell>
          </TableRow>
        ))}
      </Table>
    </>
  );
}

export default App;
