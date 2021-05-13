const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    hero.realName = form.realName.value;
    
    // NOTE: iterating over check boxes
    // hero.powers = [];
    // for (let i=0; i < form.powers.length; i++) {
    //     if (form.powers[i].checked) {
    //         hero.powers.push(form.powers[i].value);
    //     }
    // }
    // This one line below (using spread operator) does the same thing as the lines above.
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    return hero;
}