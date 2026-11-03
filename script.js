
// SPACE CAFE - MENU DATA

const menuItems = [
    // ================= COFFEE =================
    {
        name: 'Espresso',
        category: 'Coffee',
        description: 'A rich and intense coffee shot',
        price: 45,
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Americano',
        category: 'Coffee',
        description: 'Espresso topped with hot water',
        price: 55,
        image: 'https://images.unsplash.com/photo-1551030173-122a61ea2c93?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Cappuccino',
        category: 'Coffee',
        description: 'Espresso with creamy steamed milk',
        price: 70,
        image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Cafe Latte',
        category: 'Coffee',
        description: 'Smooth espresso and silky milk',
        price: 75,
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Spanish Latte',
        category: 'Coffee',
        description: 'Espresso with sweet creamy milk',
        price: 85,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Mocha',
        category: 'Coffee',
        description: 'Coffee blended with chocolate',
        price: 85,
        image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Caramel Macchiato',
        category: 'Coffee',
        description: 'Espresso, milk and caramel',
        price: 90,
        image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Iced Coffee',
        category: 'Coffee',
        description: 'Chilled coffee served over ice',
        price: 80,
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80'
    },

    // ================= DRINKS =================
    {
        name: 'Fresh Lemonade',
        category: 'Drinks',
        description: 'Fresh lemon with a cool taste',
        price: 55,
        image: 'https://images.unsplash.com/photo-1513558161293-c070f1fbf6e8?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Mango Juice',
        category: 'Drinks',
        description: 'Sweet and refreshing mango',
        price: 65,
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Strawberry Juice',
        category: 'Drinks',
        description: 'Fresh strawberry blended smooth',
        price: 65,
        image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Orange Juice',
        category: 'Drinks',
        description: 'Freshly squeezed orange juice',
        price: 60,
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Iced Tea',
        category: 'Drinks',
        description: 'Cold tea with a hint of lemon',
        price: 55,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Cola',
        category: 'Drinks',
        description: 'Chilled classic soft drink',
        price: 35,
        image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Oreo Shake',
        category: 'Drinks',
        description: 'Creamy vanilla shake with cookies',
        price: 90,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Iced Spanish Latte',
        category: 'Drinks',
        description: 'Sweet iced espresso and milk',
        price: 90,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80'
    },

    // ================= DESSERTS =================
    {
        name: 'Chocolate Milkshake',
        category: 'Desserts',
        description: 'A delicious chocolate blend',
        price: 90,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Cheesecake',
        category: 'Desserts',
        description: 'Creamy cheesecake slice',
        price: 95,
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Chocolate Cake',
        category: 'Desserts',
        description: 'Soft cake with rich chocolate',
        price: 85,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Waffles',
        category: 'Desserts',
        description: 'Golden waffles with sweet toppings',
        price: 100,
        image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Brownie',
        category: 'Desserts',
        description: 'Fudgy chocolate brownie',
        price: 65,
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Donut',
        category: 'Desserts',
        description: 'Soft donut with a sweet glaze',
        price: 45,
        image: 'https://images.unsplash.com/photo-1551024506-0bc5e6e0f5c2?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Molten Cake',
        category: 'Desserts',
        description: 'Warm chocolate cake with a soft center',
        price: 110,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Ice Cream',
        category: 'Desserts',
        description: 'Cold and creamy scoops',
        price: 60,
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80'
    },

    // ================= FOOD =================
    {
        name: 'Chicken Sandwich',
        category: 'Food',
        description: 'Grilled chicken with fresh vegetables',
        price: 120,
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Classic Burger',
        category: 'Food',
        description: 'Beef burger with cheese and sauce',
        price: 150,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Crispy Chicken',
        category: 'Food',
        description: 'Crispy chicken fillet sandwich',
        price: 130,
        image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Club Sandwich',
        category: 'Food',
        description: 'Triple-layer toasted sandwich',
        price: 140,
        image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Margherita Pizza',
        category: 'Food',
        description: 'Tomato, mozzarella and basil',
        price: 135,
        image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'French Fries',
        category: 'Food',
        description: 'Golden crispy potato fries',
        price: 55,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Chicken Alfredo',
        category: 'Food',
        description: 'Creamy pasta with grilled chicken',
        price: 155,
        image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Chicken Wrap',
        category: 'Food',
        description: 'Chicken, fresh vegetables and sauce',
        price: 115,
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80'
    }
];


// ================= MENU RENDERING =================

const menuGrid = document.getElementById('menuGrid');
const categoryButtons = document.querySelectorAll('.category');

const fallbackImage = 'assets/menu-fallback.svg';

function renderMenu(category) {
    if (!menuGrid) return;

    const items = menuItems.filter(item => item.category === category);

    menuGrid.innerHTML = items.map(item => `
        <article class="menu-item">
            <img
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
                onerror="this.onerror=null; this.src='${fallbackImage}'"
            >

            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">${item.price} EGP</span>
            </div>
        </article>
    `).join('');
}


// ================= CATEGORY BUTTONS =================

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(item => {
            item.classList.remove('active');
        });

        button.classList.add('active');
        renderMenu(button.dataset.category);
    });
});


// ================= MENU BUTTON =================

const menuButton = document.getElementById('menuButton');

if (menuButton) {
    menuButton.addEventListener('click', () => {
        const menuSection = document.getElementById('menu');

        if (menuSection) {
            menuSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}


// ================= FOOTER YEAR =================

const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ================= INITIAL MENU =================

renderMenu('Coffee');
