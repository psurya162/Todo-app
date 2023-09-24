var cardcontainer = document.getElementById("cardcontainer")
var cardname = document.getElementById("cardname")
var addtaskpopup = document.getElementById("addtaskpopup")
var parent = document.getElementById("Parent")
var Additempoppup = document.getElementById("Additempoppup")
var notask = document.getElementById("notask")
var singlecard = document.getElementById("singlecard")
var cardNameHead = document.getElementById("cardname_head")
var itemList;



function showAddTask() {
    addtaskpopup.classList.remove('hide')
    parent.classList.add('blur')
   

}

//HIDE TASK
function hideAddTask() {
    addtaskpopup.classList.add('hide')
    parent.classList.remove('blur')
}
//TO ADD CARD
function addcard() {
    notask.classList.add('hide')

    hideAddTask()
    let card = document.createElement('div')
    let cardHeading = document.createElement('h3')
    let line = document.createElement('hr')
     itemList = document.createElement('div')
    let addItems = document.createElement('button')
    let deletebutton = document.createElement('button')

    //Append Elements 
    cardcontainer.appendChild(card)
    card.appendChild(cardHeading)
    card.appendChild(line)
    card.appendChild(itemList)
    card.appendChild(addItems)
    card.appendChild(deletebutton)
    card.classList.add('cardtext')

    //Give Values to Elements
    cardHeading.innerText = cardname.value
    cardname.value = ""  //clear the popup 
    card.classList.add('card')   
    addItems.innerText = ""
    addItems.setAttribute('class', 'fa-solid fa-circle-plus')
    deletebutton.innerText = ""
    deletebutton.setAttribute('class', 'fa-solid fa-trash')

    //DELETE BUTTON
    deletebutton.addEventListener('click', function () {
        card.remove()
        if (cardcontainer.innerText === '')
            notask.classList.remove('hide')
    })

    //ADD ITEM 
    addItems.addEventListener('click', function () {
        Additempoppup.classList.remove('hide')
        parent.classList.add('blur')
        Additempoppup.innerHTML="";

        //CREATE ITEM
        let itemPopupHeading = document.createElement('h3')
        let itemname = document.createElement('input')
        itemname.placeholder = 'Item Name';
        let addbutton = document.createElement('button')
        let closebutton = document.createElement('button')

        //APPEND ELEMENTS
        
        Additempoppup.appendChild(itemPopupHeading)
        Additempoppup.appendChild(itemname)
        Additempoppup.appendChild(addbutton)
        Additempoppup.appendChild(closebutton)

        //GIVING VALUES TO ELEMENTS
        itemPopupHeading.innerText = "Add New Item"
        addbutton.innerText = "add"
        closebutton.innerText = "close"
        addbutton.classList.add('addcloseee')
        closebutton.classList.add('addcloseee')

        closebutton.addEventListener('click', function () {
            Additempoppup.classList.add('hide')
            parent.classList.remove('blur')
        })

        addbutton.addEventListener('click', function () {
            Additempoppup.classList.add('hide')
            parent.classList.remove('blur')

            //CREATE ITEM ELEMENT
            let item = document.createElement('div')
            item.classList.add('additemms')
            let itemtext = document.createElement('span')
            itemtext.classList.add('span1')
            let markdone = document.createElement('button')
            markdone.classList.add('markdonee')

            //APPEND IT
            item.appendChild(itemtext)
            item.appendChild(markdone)
            markdone.addEventListener('click', function () {
                itemtext.style.textDecoration = "line-through";
                markdone.classList.add('hide')
            })

            //GIVING VALUES
            itemtext.innerText = itemname.value
            markdone.innerText = "Mark done"

            //APPENDING TH ITEM IN LIST
            itemList.appendChild(item)
            Additempoppup.innerText = ""

            
        })
    })

    //CARDHEADING LISTENER
    cardHeading.addEventListener('click', function () {
        cardHeading.style.cursor  = 'pointer'
        cardNameHead.classList.remove('hide')
        cardNameHead.innerText = cardHeading.innerText
        singlecard.classList.remove('hide')
        cardcontainer.classList.add('hide')

       


        //CREATE A COPY OF CARD
        let copycard = card.cloneNode(true);
        singlecard.appendChild(copycard);

        copycard.lastElementChild.addEventListener('click', function () {
            card.remove();
            copycard.remove();
            
            if (cardcontainer.innerText === ''){
                notask.classList.remove('hide');
            }
            back()  
            
        });
        //Markdone button
        let markdoneClone = copycard.querySelectorAll('.markdonee'); // Find the cloned markdone button
                    
                    // console.log(markdoneClone)

                    for(let i=0;i<markdoneClone.length;i++){
                        markdoneClone[i].addEventListener('click', function () {
                            markdoneClone[i].previousSibling.style.textDecoration = "line-through";
                            // itemtext.style.textDecoration = "line-through";   
                            markdoneClone[i].classList.add('hide');
                            // markdone.classList.add('hide')
                        });
                    }
                    

        //ITEM ADD FOR THE CLONE CARD
        copycard.lastElementChild.previousElementSibling.addEventListener('click', function () {
            Additempoppup.classList.remove('hide')
            parent.classList.add('blur')
            Additempoppup.innerHTML="";

            //create Item
            let itemPopupHeading = document.createElement('h3')
            let itemname = document.createElement('input')
            itemname.placeholder = 'Item Name';
            let addbutton = document.createElement('button')
            let closebutton = document.createElement('button')

            //APPEND ELEMENTS
            Additempoppup.appendChild(itemPopupHeading)
            Additempoppup.appendChild(itemname)
            Additempoppup.appendChild(addbutton)
            Additempoppup.appendChild(closebutton)

            //GIV VALUES TO ELEMENTS
            itemPopupHeading.innerText = "Add New Item"
            addbutton.innerText = "add"
            closebutton.innerText = "close"
            addbutton.classList.add('addcloseee')
            closebutton.classList.add('addcloseee')

            closebutton.addEventListener('click', function () {
                Additempoppup.classList.add('hide')
                parent.classList.remove('blur')

            })

            
            addbutton.addEventListener('click', function () {
                Additempoppup.classList.add('hide')
                parent.classList.remove('blur')

                //CREATE ITEM IN ELEMENTS
                let item = document.createElement('div')
                item.classList.add('additemms')
                let itemtext = document.createElement('span')
                itemtext.classList.add('span1')
                let markdone = document.createElement('button')
                markdone.classList.add('markdonee')

                //APPEND
                item.appendChild(itemtext)
                item.appendChild(markdone)
                markdone.addEventListener('click', function () {
                    itemtext.style.textDecoration = "line-through";
                    markdone.classList.add('hide');
                });

                //VALUES
                itemList.appendChild(item);
                itemtext.innerText = itemname.value
                markdone.innerText = "Mark done"
                

                // Append the item to item list of the cloned cardsss
                
                Additempoppup.innerHTML = "";
                

                if (singlecard) {
                    let copylist = copycard.querySelector('div');
                    let itemclone = item.cloneNode(true);

                    copylist.appendChild(itemclone);

                    // Find the cloned markdone button
                    let markdoneClone = itemclone.querySelector('.markdonee');

                    // Find the cloned item text
                    let itemtexts = itemclone.querySelector('.span1');

                    // Add an event listener to the cloned markdone button
                    markdoneClone.addEventListener('click', function () {
                        itemtexts.style.textDecoration = "line-through";
                        itemtext.style.textDecoration = "line-through";   
                        markdoneClone.classList.add('hide');
                        markdone.classList.add('hide')
                    });

                    
                   
                    
                }
            })
        })
        

        parent.firstElementChild.classList.remove('hide')
      task.classList.add('hide')
    })
}

function back() {
    cardNameHead.classList.add('hide');
    task.classList.remove('hide');
    parent.firstElementChild.classList.add('hide');
    singlecard.classList.add('hide');
    cardcontainer.classList.remove('hide');
    singlecard.innerText = "";

    if (itemList) {
        // Update line-through styles for items in the original card
        let items = itemList.querySelectorAll('.span1');
        items.forEach(function (item) {
            if (!item.style.textDecoration.includes("line-through")) {
                item.style.textDecoration = "line-through";
            }
        });
         // Hide markdone buttons in the original cards
        let markdoneButtons = itemList.querySelectorAll('.markdonee');
        markdoneButtons.forEach(function (markdone) {
            markdone.classList.add('hide');
        });
    }
}
