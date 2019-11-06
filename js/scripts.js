function readMore(index, title, type, img, date, active) {
    localStorage.setItem("title", title);
    localStorage.setItem("index", index)
    localStorage.setItem("type", type);
    localStorage.setItem("img", img);
    localStorage.setItem("date", date);
    localStorage.setItem("active", active);


    window.open("./pages/caseDetails.html", "_self")

}

var cases = [{
        "title": "Tyveri i Grønland",
        "type": "Ran",
        "img": "case2.jpg",
        "description": "lang text",
        "active": true,
        "date": '2019-10-03'
    },
    {
        "title": "Drap i Grünerløkka",
        "type": "Drap",
        "img": "case1.jpg",
        "description": "lang text",
        "active": false,
        "date": '2019-10-03'
    },
    {
        "title": "Ran i Frogner",
        "type": "Ran",
        "img": "case3.jpg",
        "description": "lang text",
        "active": true,
        "date": '2019-10-03'
    },
    {
        "title": "Kidnapping i Lørenskog",
        "type": "Kidnapping",
        "img": "case4.jpg",
        "description": "lang text",
        "active": true,
        "date": '2019-10-03'
    },
    {
        "title": "Sabotering av kommunevalg",
        "type": "Sabotasje",
        "img": "case6.jpg",
        "description": "lang text",
        "active": true,
        "date": '2019-10-03'
    },
    {
        "title": "Bombetrussel i Oslo City",
        "type": "Terrorisme",
        "img": "case7.jpg",
        "description": "lang text",
        "active": true,
        "date": '2019-10-03'
    },
    {
        "title": "Blindvold i Bygdøy",
        "type": "Blindvold",
        "img": "case8.jpg",
        "description": "lang text",
        "active": true,
        "date": '2019-10-03'
    },
    {
        "title": "Barn kidnappet i Stovner",
        "type": "Kidnapping",
        "img": "case10.jpg",
        "description": "lang text",
        "active": true,
        "date": '2019-10-03'
    },
]

//localStorage.setItem("cases", JSON.stringify(cases));