// get only unique catagories - Hardest ONe
// iterate over catagories return buttons
// make sure to select buttons when they are available


// item done

// parent item
const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');
// const filterBtn = document.querySelectorAll('.filter-btn');
// console.log(filterBtn); // NodeList []

// when page load
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItem(menu);
    displayMenuButton();

    // console.log('Shake and bake');
    // const catagories = menu.map(function(item){
    //     return item.category;
    // });
    

/* copy and paste then make a function
    let displayMenu = menu.map(function(item){
        // console.log(item);

        // return item;
        // return `<h1>hello world</h1>`;
        // return `<h1>${item.title}</h1>`;
        return `
        <article class="menu-item">
            <img src=${item.img} class="foto" alt=${item.title}>
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">Rp${item.price}.000</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
        </article>
        `;
    });
    displayMenu = displayMenu.join("")
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu; // show data 
*/

});

function displayMenuItem(menuItem){
    let displayMenu = menuItem.map(function(item){
        // console.log(item);

        // return item;
        // return `<h1>hello world</h1>`;
        // return `<h1>${item.title}</h1>`;
        return `
        <article class="menu-item">
            <img src=${item.img} class="foto" alt=${item.title}>
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">Rp${item.price}.000</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
        </article>
        `;
    });
    displayMenu = displayMenu.join("")
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu; // show data 
}

function displayMenuButton(){
    const catagories = menu.reduce(function(value, item){
        if(!value.includes(item.category)) {
            value.push(item.category)
        }
        return value;
    }, 
    ['all']);
    console.log(catagories);


    const catagoryBtn = catagories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}
        </button>
        `;
    })
    .join("");
    
    console.log(catagoryBtn);
    container.innerHTML = catagoryBtn;
    console.log(container)
    const filterBtn = container.querySelectorAll('.filter-btn');
    console.log(filterBtn);

    // filter item 
    filterBtn.forEach(function(btn){
        btn.addEventListener('click', function(e){
            // console.log(e.currentTarget.dataset.id);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                // console.log(menuItem.category);

                if(menuItem.category === category){
                return menuItem;
                }
            });
            // console.log(menuCategory);
            if(category === 'all'){
                displayMenuItem(menu)
            } else {
                displayMenuItem(menuCategory)
            }
        });
    });
}