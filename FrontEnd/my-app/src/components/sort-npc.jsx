import '../assets/css/sort-npc.css'


function SortNPC({ items, setSortedItems }) {

    
    const handleSortChange = event => {
        const sortBy = event.target.value;
    let sortedItems = [...items];
      console.log(sortedItems)
    if (sortBy === "univers") {
      sortedItems.sort((a, b) => a.univers.localeCompare(b.univers));
    } else if (sortBy === "name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "older") {
      sortedItems.sort((a, b) => a.creationDate - b.creationDate);
    } else if (sortBy === "younger") {
      sortedItems.sort((a, b) => b.creationDate - a.creationDate);
    } else if (sortBy === "age") {
      sortedItems.sort((a, b) => a.age - b.age);
    } else if (sortBy === "likes") {
    sortedItems.sort((a, b) => a.likes + b.likes);
  }

    setSortedItems(sortedItems);
  };

  return (
    <div className="sort-npc-container">
      <label className="sort-npc-label">
        <h3>Filtrer par:</h3>
        <select
          name="sort-by"
          className='filter-input'
          defaultValue={"younger"}
          onChange={handleSortChange}
        >
          <option value="younger">plus récent</option>
          <option value="older">plus ancien</option>
          <option value="likes">Nombre de likes</option>          
          <option value="univers">univers</option>
          <option value="name">nom</option>
          <option value="age">age</option>
        </select>
      </label>
    </div>
  );
}

export default SortNPC;