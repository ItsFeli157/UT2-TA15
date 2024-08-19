document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('itemList');
    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItemButton');
    const removeItemButton = document.getElementById('removeItemButton');

    addItemButton.addEventListener('click', () => {
        const newItemText = itemInput.value.trim();

        if (newItemText !== "") {
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;
            itemList.appendChild(newItem);
            itemInput.value = "";
        }
    });

    //permite añadir elementos al presionar Enter
    itemInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addItemButton.click();
        }
    });

    removeItemButton.addEventListener('click', () => {
        const lastItem = itemList.lastElementChild;
        if (lastItem) {
            itemList.removeChild(lastItem);
        }
    });
});
