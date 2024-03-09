import ListGroup from "./components/ListGroup";

function App() {
  const listOfCities = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];
  const listOfColors = [
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'White',
    'Black'
  ]
  const showSelectedValue = (selectedValue: string) => console.log(selectedValue)
  return <div>
    <ListGroup list={listOfCities} heading="Cities" onSelectedItem={showSelectedValue} />
    <ListGroup list={listOfColors} heading="Colors" onSelectedItem={showSelectedValue} />
  </div>
}

export default App;