const links = [
    {
        label: "Week01 Notes",
        url: "week01/index.html"
    },
    {
        label: "Week02 Notes",
        url: "week02/index.html"
    },
    {
        label: "Week03 Notes",
        url: "week03/index.html"
    }
]

for(let i = 0; i < links.length; i++) {
    let label = document.createElement('li');
    let link = document.createElement('a');
    link.setAttribute('href', links[i].url);
    link.textContent = links[i].label;
    // label.textContent = links[i].label;

    label.appendChild(link);

    document.querySelector('ol#weeksol').appendChild(label);
}