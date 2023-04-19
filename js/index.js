
var apiKey="592549e4a93445c483040a5b9fb34017";

var input;



async function searchRecipes() {
    var userInput=document.getElementById('searchTerm').value;
    const input= JSON.parse(window.localStorage.getItem('input'));
    
   


    if(userInput==input){
        var a=JSON.parse(window.localStorage.getItem("local"));
        const main_parent=document.getElementById('results');
        for (var i=0;i<a.results.length;i++){
        const element_new=document.createElement('div');
        element_new.classList.add('result-card');
        element_new.innerHTML=
        `<div><img src="${a.results[i].image}" alt="${a.results[i].title}"></div>
        <div><h3>${a.results[i].title}</h3></div>`;   
        main_parent.append(element_new);
        for (var j=1;j<a.results[i].missedIngredients.length;j++){
            const element=document.createElement('p');
            // element.classList.add('hide');
            element.style.color="white"
            element.innerHTML=`${j}: ${a.results[i].missedIngredients[j].original}`;
            element_new.append(element);
        }
        }
        // const card=document.getElementsByClassName('result-card')[0];
        // console.log(card);
        // card.addEventListener('click',myfunction);
        // function myfunction(){
        // const ingre=document.getElementsByClassName('hide')[0];
        // ingre.classList.remove('hide');
        // };
    
        }
    else{
        console.log(userInput);
        let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${userInput}&instructionsRequired=true&addRecipeInformation=true&fillIngredients=true&apiKey=${apiKey}`);
        let data = await response.json();
        let result=await data;
        const main_parent=document.getElementById('results');
        for (var i=0;i<result.results.length;i++){
        const element_new=document.createElement('div');
        element_new.classList.add('result-card');
        element_new.innerHTML=
        `<div><img src="${result.results[i].image}" alt="${result.results[i].title}"></div>
        <div><h3>${result.results[i].title}</h3></div>`;   
        main_parent.append(element_new);
        for (var j=1;j<result.results[i].missedIngredients.length;j++){
            const element=document.createElement('p');
            // element.classList.add('hide');
            element.style.color="white"
            element.innerHTML=`${j}: ${result.results[i].missedIngredients[j].original}`;
            element_new.append(element);
        }
        }
        // const card=document.getElementsByClassName('result-card')[0];
        // console.log(card);
        // card.addEventListener('click',myfunction);
        // function myfunction(){
        // const ingre=document.getElementsByClassName('hide')[0];
        // ingre.classList.remove('hide');
        // };
        window.localStorage.setItem("local",JSON.stringify(result));
        window.localStorage.setItem("input",JSON.stringify(userInput));
        
    };
}

