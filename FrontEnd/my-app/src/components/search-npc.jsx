
function SearchNPC({ items, setSortedItems }) {


    const searchChange = event => {
        const searchBy = event.target.value.toLowerCase()
        let searchItems = searchBy ? items.filter(item => item.name.toLowerCase().includes(searchBy)) : items
        setSortedItems(searchItems)
        console.log(searchBy)
        console.log(searchItems)
    }

    return (
        <div className="sort-npc-container">
            <form className="sort-npc-form">
                <label className="sort-npc-label">
                    <h3>Rechercher:</h3>
                    <input type="text" name="name" onInput={searchChange} className='filter-input'  />
                </label>
            </form>
        </div>
    );
}

export default SearchNPC;