const restaurantData = `{
    "restaurants": [{
        "id": 1,
        "name": "Mission Chinese Food",
        "photograph": "h1.jpg",
        "address": "171 E Broadway, New York, NY 10002",
        "latlng": {
          "lat": 40.713829,
          "lng": -73.989667
        },
        "tags": ["Asian","Healthy"],
        "ETA" : "35 mins",
        "rating" : 4
      },{
        "id": 2,
        "name": "Hello Food",
        "photograph": "h2.jpg",
        "address": "171 E Broadway, New York, NY 10002",
        "latlng": {
          "lat": 40.713829,
          "lng": -73.989667
        },
        "tags": ["Asian","Healthy"],
        "ETA" : "40 mins",
        "rating" : 4
      },{
        "id": 3,
        "name": "Eat It",
        "photograph": "h3.jpg",
        "address": "171 E Broadway, New York, NY 10002",
        "latlng": {
          "lat": 40.713829,
          "lng": -73.989667
        },
        "tags": ["Asian","Healthy"],
        "ETA" : "35 mins",
        "rating" : 3
      }]
}`;
class Restaurant {
    id;
    name;
    photograph;
    address;
    latlng = {};
    tags = [];
    ETA;
    rating;
    addedFav;
    constructor(id,name,photograph,address,latlng,tags,ETA,rating,addedFav){
        this.id = id;
        this.name = name;
        this.photograph = photograph;
        this.address = address;
        this.latlng = latlng;
        this.tags = tags;
        this.ETA = ETA;
        this.rating = rating;
        this.addedFav = addedFav;
    }
}
const searchBar = document.querySelector('.searchBar');
const parentSection = document.querySelector('.parentSection');
const attachHTML = document.querySelector('.attachHTML');
const submitButton = document.querySelector('.submitButton');
const searchText = document.getElementById('searchText');
const searchList = document.querySelector('.searchList');
const attachSugg = document.querySelector('.attachSugg');

class RestaurantList{
    #allData = [];
    #fav = [];
    constructor(){
        this._getData();
        this._setList();
        
        parentSection.addEventListener('click',this._addToFav.bind(this));
        searchText.addEventListener('input',this._renderSearchResult.bind(this));
        submitButton.addEventListener('click',this._getSearchedHotel.bind(this));
        // searchList click event listener -> searchText.value = name from id
    }
    _getList = () =>{
        //console.log(searchText.value);
        let restName = searchText.value;
        if(restName){
            // set drop down items
            searchList.style.display = "block";
        }else{
            searchList.style.display = "none";
        }
    }
    _debounce = function(fn,d){
        let timer;
        return function(){
            let context = this;
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(context);
            },d);
        }
    }
    _renderSearchResult = this._debounce(this._getList,1000);

    _addToFav(e){
        console.log(e.target.id);
        let checkId = e.target.id.split('-');
        let tempList = JSON.parse(localStorage.getItem("favList"));
        if(!tempList)
            tempList = [];
        this.#allData.some(dt => {
            if(dt.id == checkId[1]){
                dt.addedFav = true;
                tempList.push(dt);
                return true;
            }
        });
        localStorage.setItem("favList",JSON.stringify(tempList));
        location.reload();
    }
    _getData = () => {
        let data = JSON.parse(restaurantData).restaurants;
        this.#fav = JSON.parse(localStorage.getItem("favList"));
        console.log(this.#fav);
        var favSet = new Set();
        if(this.#fav){
            this.#fav.forEach(fv =>{
                favSet.add(fv.id);
            });
        }
        data.forEach(dt =>{
            if(favSet.has(dt.id)){
                dt.addedFav = true;
            }else{
                dt.addedFav = false;
            }
        })
        this.#allData = data;
        console.log(this.#allData);
    }
    _setList = ()=> {
        let finalHtml = `<section>`;
        this.#allData.forEach(it => {
            finalHtml += this._getCard(it);
        });
        finalHtml += `</section>`;
        attachHTML.insertAdjacentHTML('afterend',finalHtml);
    }
    _getCard = (hotel) =>{
        let html = `<article>`;
        if(hotel.addedFav){
            html +=  `<span title="Added To Favourite"><div class="favBtn fa fa-star" id="favBtn-${hotel.id}"></div></span>`
        }
        else{
            html += `<button class="favBtn" id="favBtn-${hotel.id}">Add to Fav</button>`;
        }
        html += `
            <div><img src="${hotel.photograph}"/></div> 
                <div>${hotel.name}</div>
                <div>${hotel.address}</div>
                <div style="visibility:hidden">${hotel.id}</div>
            </article>`;

        return html;
    }
    _getSearchedHotel(){
        var searchHotel = searchText.value;
        console.log(searchHotel);
        if(!searchHotel){
            //show all
        }else{
            // search name in data

            //if found then return
            // else - no results found
        }
    }
}

rl = new RestaurantList();