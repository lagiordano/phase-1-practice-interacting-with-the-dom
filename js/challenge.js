window.onload = () => {



    const timer = document.querySelector('#counter');
    let pause = document.querySelector('#pause');
    let i=0;
    let time = null;
    const form = document.querySelector("#comment-form");
    const buttons = document.getElementsByClassName("disableMe");


// Make timer increment every second once page loaded
   time = setInterval( () => {
            timer.textContent = ++i;
            
        }, 1000);


// Plus and Minus 
    document.querySelector('#plus').addEventListener("click", () => {
        timer.textContent = ++i;
    });

    document.querySelector("#minus").addEventListener("click", () => {
        timer.textContent = --i;;
    });


// Liking functionality

 

    document.querySelector('#heart').addEventListener("click", () => {
        const likesList = document.querySelector("#likes");
        
        if (document.getElementById(`${timer.textContent}`) === null) {
            let li = document.createElement("li");
            li.id = timer.textContent;
            li.dataset.count = 1
            li.textContent = `${timer.textContent} has been liked ${li.dataset.count} times!`;
            likesList.appendChild(li);
        } else {
            let alreadyListed = document.getElementById(`${timer.textContent}`);
            ++alreadyListed.dataset.count;
            alreadyListed.textContent = `${timer.textContent} has been liked ${alreadyListed.dataset.count} times!`;
            
        };
    });          


   
 
    

// Function to pause and resume time
    pause.addEventListener("click", () => {
        if (pause.textContent === " pause ") {
            clearInterval(time); 
            pause.textContent = "resume";
            for (let x=0; x < buttons.length; x++) {
                buttons[x].disabled = true;
            };
        } else {
            time = setInterval( () => {
                timer.textContent = ++i;
            }, 1000);
            pause.textContent = " pause ";
            for (let x=0; x < buttons.length; x++) {
                buttons[x].disabled = false;
            };
        };
    });




// Leave comments
    form.addEventListener("submit", e => {
        e.preventDefault();
        let p = document.createElement("p");
        let comments = document.querySelector("#list");
        p.textContent = document.querySelector("#comment-input").value;
        comments.appendChild(p);
        form.reset();

    })







};


