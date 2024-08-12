body{
    font-family: Arial, sans-serif;
    margin: 0px;
    padding: 0px;
    display: grid;
    grid-template-areas: 
    "header header header"
    "nav main aside"
    "footer footer footer";
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 10px;
}
header, nav, main, article, aside, footer {
    padding: 20px;
    border: 1px solid black;
}
header{
    grid-area: header;
    background-color: aqua;
}
nav{
    grid-area: nav;
    background-color: burlywood;
}
main{
    grid-area: main;
    background-color: aquamarine;
}
aside{
    grid-area: aside;
    background-color: chartreuse;
}
footer{
    grid-area: footer;
    background-color: coral;
}
article{
    background-color: darkorange;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid white;
}