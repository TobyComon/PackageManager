const packages = [
    {heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', image: 'https://thiscatdoesnotexist.com'}, 
    {heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', image: 'https://thiscatdoesnotexist.com'}, 
    {heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', image: 'https://thiscatdoesnotexist.com'}, 
    {heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', image: 'https://thiscatdoesnotexist.com'}, 
    {heavy: true, priority: true, fragile: true, to: 'Brittany', trackingNumber: 'asdfoij495', image: 'https://thiscatdoesnotexist.com'}, 
    {heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', image: 'https://thiscatdoesnotexist.com'}, 
    {heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', image: 'https://thiscatdoesnotexist.com'},
    {heavy: true, priority: true, fragile: false, to: 'Marley', trackingNumber: 'Bingo', image: 'https://thiscatdoesnotexist.com'}
]

let sortedPackages = []

function viewPackages() {
    sortedPackages = JSON.parse(JSON.stringify(packages))
    const index = Math.floor(Math.random() * (sortedPackages.length - 1))
    sortedPackages[index].missing = true

    drawPackages()
}


    function drawPackages() {

     let template = ``
    for (let i = 0; i < sortedPackages.length; i++) {
        const package = sortedPackages[i];
        
        template += `
        <div class="col-3 p-2">
            <div class="bg-dark text-light rounded text-center package-card" onclick="find"('${package.trackingNumber})')">
                <img class="img-fluid card" src="${package.image}" alt="">
                <h3 class="p-2"><b>${package.trackingNumber}</b></h3>
                </div>
            </div>
        `
       
    }
    document.getElementById('packages').innerHTML = template
}


function sort(attribute) {
    let missingPackage = sortedPackages.find(p => p.missing)

   sortedPackages =  sortedPackages.filter(p => p[attribute] === missingPackage[attribute])
drawPackages()
}

function guess(trackingNumber)
let missingPackage = sortedPackages.find(p => p.missing)
if (missingPackage.trackingNumber == trackingNumber) {
    console.log("You found the missing package!")
    
}



viewPackages()
