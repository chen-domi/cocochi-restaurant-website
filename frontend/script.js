// Function to handle dropdown selection and fetch from API
async function selectCategory(categoryId, displayName) {
    try {
        // Update the dropdown button to show selected category
        document.getElementById('dropdownButton').textContent = displayName;
        
        // Fetch menu items from your Spring Boot API
        const response = await fetch(`http://localhost:8080/api/menu/${categoryId}`);
        const menuItems = await response.json();
        
        // Display the menu items
        displayMenuItems(menuItems);
        
        // Close the dropdown
        closeDropdown();
        
    } catch (error) {
        console.error('Error loading menu:', error);
        document.getElementById('menu-items-container').innerHTML = '<p>Error loading menu items. Please try again.</p>';
    }
}

// Function to display menu items in the container
function displayMenuItems(items) {
    const container = document.getElementById('menu-items-container');
    
    if (items.length === 0) {
        container.innerHTML = '<p>No items found in this category.</p>';
        return;
    }
    
    container.innerHTML = items.map(item => `
        <div class="menu-item">
            <div class="item-info">
                <h4>${item.itemName}</h4>
            </div>
            <span class="price">$${item.price}</span>
        </div>
    `).join('');
}

// Function to toggle dropdown visibility
function toggleDropdown() {
    console.log('toggleDropdown called'); // Debug line
    const dropdownContent = document.getElementById('dropdownContent');
    console.log('Dropdown element found:', dropdownContent); // Debug line
    
    if (dropdownContent) {
        const currentDisplay = dropdownContent.style.display;
        console.log('Current display:', currentDisplay); // Debug line
        
        dropdownContent.style.display = currentDisplay === 'block' ? 'none' : 'block';
        console.log('New display:', dropdownContent.style.display); // Debug line
    } else {
        console.log('ERROR: dropdownContent element not found');
    }
}

// Function to close dropdown
function closeDropdown() {
    document.getElementById('dropdownContent').style.display = 'none';
}

// Load appetizers by default when page loads
document.addEventListener('DOMContentLoaded', function() {
    selectCategory('appetizers', 'Appetizers');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.matches('#dropdownButton')) {
        closeDropdown();
    }
});