
function delet_element(boton)
{
    let sp = boton.split("_"); 
    let s = [".", sp[0], " a"];
    let res = `.${sp[0]} a`;
    if (boton === "cart")
        res = ".home a";
    document.getElementsByClassName(boton)[0].style.display = "none";
    document.querySelector(res).style.borderBottom = "none";
    document.querySelector(res).style.color = "aliceblue";
}

function rest_element(boton)
{
    let sp = boton.split("_"); 
    let s = [".", sp[0], " a"];
    let res = `.${sp[0]} a`;
    if (boton === "cart")
        res = ".home a";
    document.getElementsByClassName(boton)[0].style.display = "";
    document.querySelector(res).style.borderBottom = "5px solid #90e0ef";
    document.querySelector(res).style.color = "#90e0ef";
}

function project(boton)
{
    delet_element("contact_page");
    delet_element("about_page");
    delet_element("services_page");
    delet_element("cart");
    rest_element(boton);
}

function contact(boton)
{
    delet_element("cart");
    delet_element("project_page");
    delet_element("about_page");
    delet_element("services_page");
    rest_element(boton);
}

function services(boton)
{
    delet_element("cart");
    delet_element("contact_page");
    delet_element("about_page");
    delet_element("project_page");
    rest_element(boton);
}

function about(boton)
{
    delet_element("contact_page");
    delet_element("project_page");
    delet_element("services_page");
    delet_element("cart");
    rest_element(boton);
}

function home(boton)
{
    delet_element("contact_page");
    delet_element("project_page");
    delet_element("services_page");
    delet_element("about_page");
    rest_element(boton);
}