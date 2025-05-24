let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let requestBodyEl = document.getElementById("requestBody");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

sendPostRequestBtnEl.onclick = function() {
    loadingEl.classList.toggle("d-none");
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 5765f9b614246a84fa7e1637815b14b8a02fe748480c9a93ce293ccf94a24c66"

        },
        body: requestBodyEl.value
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            loadingEl.classList.toggle("d-none");
            requestStatusEl.textContent = jsonData.code;
            httpResponseEl.textContent = JSON.stringify(jsonData);
        })
}