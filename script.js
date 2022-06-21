
const insertAfter = (newElement, refElement)  => {
    refElement.parentNode.insertBefore(newElement, refElement.nextSibling);
}

const getInfo = async (url) => {
    let fetching = await fetch(url)
    return await fetching.json()
}

const getIP = async () => {

    const info = await getInfo('http://ip.jsontest.com/')

    let element = document.getElementById('ipHeader')

    let displayResult = document.createElement("p")

    displayResult.innerText = info.ip

    insertAfter(displayResult, element)

}

getIP()

const getHeaders = async () => {

    const info = await getInfo('http://headers.jsontest.com/')

    let element = document.getElementById('httpHeader')

    let displayResult = document.createElement("p")

    displayResult.innerText = JSON.stringify(info, null, 2)

    insertAfter(displayResult, element)

}

getHeaders()

const getDate = async () => {

    const info = await getInfo('http://date.jsontest.com')

    let element = document.getElementById('date')

    element.innerText = new Date(info.milliseconds_since_epoch)

    setTimeout(getDate, 1000)
}

getDate()

const verifyJSON = async () => {

    let jsonText = document.getElementById('json').value

    const info = await getInfo('http://validate.jsontest.com/?json=' + jsonText)

    let displayResult = document.getElementById("jsonResults")

    if (info.validate === true) {
        displayResult.innerHTML = "<p class='success'>Valid JSON Object!</p>"
    } else {
        displayResult.innerHTML = `<p class='fail'>${info.error}</p>`
    }
}

const strToMd5 = async () => {

    let string = document.getElementById('md5').value

    const info = await getInfo("http://md5.jsontest.com/?text=" + string)

    let displayResult = document.getElementById("md5Results")

    displayResult.innerHTML = `<p class='success'>${info.md5}</p>`
}


