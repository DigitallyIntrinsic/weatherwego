'use strict';

$(document).ready(function () {

    //Pulls the current date
    let NowMoment = moment().format("l");

    //adds days to forecast
    let day1 = moment().add(1, "days").format("l");
    let day2 = moment().add(2, "days").format("l");
    let day3 = moment().add(3, "days").format("l");
    let day4 = moment().add(4, "days").format("l");
    let day5 = moment().add(5, "days").format("l");

    // add global variables
    let city;
    let cities;

    //function to load most recently searched city from local storage
    function loadMostRecent() {
        let lastSearch = localStorage.getItem("mostRecent");
        if (lastSearch) {
            city = lastSearch;
            search();
        } else {
            city = "San Diego";
            search();
        }
    }

    loadMostRecent()

    //function to load recently searched cities from local storage
    function loadRecentCities() {
        let recentCities = JSON.parse(localStorage.getItem("cities"));

        if (recentCities) {
            cities = recentCities;
        } else {
            cities = [];
        }
    }

    loadRecentCities()

    //event handler for search city button
    $("#submit").on("click", (e) => {
        e.preventDefault();
        getCity();
        search();
        $("#city-input").val("");
        listCities();
    });