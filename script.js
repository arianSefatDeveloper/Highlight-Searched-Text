const $ = document

const inputElem = $.querySelector("input")
const buttonElem = $.querySelector("button")
const paragraphElem = $.querySelector("#paragraph")


const search = ()=>{
    let searchInputValue = inputElem.value
    // let searchRegex = `/${searchInputValue}/g`
    let searchRegex = new RegExp(`${searchInputValue}` , "gi")
    console.log(searchRegex);
    paragraphElem.innerHTML= paragraphElem.textContent.replace(searchRegex , (item)=>`<mark>${item}</mark>`)

}

buttonElem.addEventListener("click", search)
