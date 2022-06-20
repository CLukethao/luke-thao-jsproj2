
const insertAfter = (newElement, refElement)  => {
    refElement.parentNode.insertBefore(newElement, refElement.nextSibling);
}

const getIP = async () => {

    let fetching = await fetch('http://ip.jsontest.com/')

    let data = await fetching.json()

    let element = document.getElementById('ipHeader')

    let displayResult = document.createElement("p")

    displayResult.innerText = data.ip

    insertAfter(displayResult, element)

}

getIP()

const getHeaders = async () => {

    let fetching = await fetch('http://headers.jsontest.com/')

    let data = await fetching.json()

    let element = document.getElementById('httpHeader')

    let displayResult = document.createElement("p")

    displayResult.innerText = JSON.stringify(data, null, 2)

    insertAfter(displayResult, element)

}

getHeaders()

const getDate = async () => {

    let fetching = await fetch('http://date.jsontest.com')

    let data = await fetching.json()

    let element = document.getElementById('date')

    element.innerText = new Date(data.milliseconds_since_epoch)

    setTimeout(() => {
        getDate()
    }, 1000)
}

getDate()

const verifyJSON = async () => {

    let jsonText = document.getElementById('json').value

    let fetching = await fetch('http://validate.jsontest.com/?json=' + jsonText)

    let data = await fetching.json()

    console.log(data)

    let displayResult = document.getElementById("jsonResults")

    if (data.validate === true) {
        displayResult.innerHTML = "<p class='success'>Valid JSON Object!</p>"
    } else {
        displayResult.innerHTML = `<p class='fail'>${data.error}</p>`
    }
}

const strToMd5 = async () => {

    let string = document.getElementById('md5').value

    let fetching = await fetch("http://md5.jsontest.com/?text=" + string)

    let data = await fetching.json()

    let displayResult = document.getElementById("md5Results")

    displayResult.innerHTML = `<p class='success'>${data.md5}</p>`
}


