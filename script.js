let dropdownMenuItemTitles = document.querySelectorAll('.dropdown-menu-item-title');

dropdownMenuItemTitles.forEach(menuItemTitle => {
  // Add event listener for hover
  menuItemTitle.addEventListener('click', (e) => {
    const menuItemData = e.target.nextElementSibling;
    const isOpen = menuItemData.classList.contains('show');
  
    // Check how many dropdowns are currently open
    const openDropdowns = document.querySelectorAll('.dropdown-menu-item-data.show');

    if (openDropdowns.length > 1 || !isOpen) {
      // Close all dropdowns except the one being hovered over
      document.querySelectorAll('.dropdown-menu-item-data').forEach(item => {
        if (item !== menuItemData) {
          item.style.removeProperty('--openHeight');
          item.classList.remove('show');
          item.classList.add('hide');
        }
      });

      menuItemData.style.setProperty('--openHeight', menuItemData.scrollHeight + 'px');
      menuItemData.classList.toggle('show');
      menuItemData.classList.toggle('hide');
    }
  });

});

// Open the first dropdown menu by default
const firstDropdownMenuItemData = document.querySelector('.dropdown-menu-item-data');
if (firstDropdownMenuItemData) {
  firstDropdownMenuItemData.style.setProperty('--openHeight', firstDropdownMenuItemData.scrollHeight + 'px');
  firstDropdownMenuItemData.classList.add('show');
}
