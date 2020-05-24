
// var users =[
// {
// 	'email': 'anm'
// 	'name':'anmol'
// }
// {
// 	email': 'anmol'
// 	'name':'deep'
// }]

// var checkLogin= function(email,name,allusers){
// 	ifFound=false;
// 	isname=false;

// 	for(currentUser in allusers)
// 	{
// 		if(allusers[currentUser]['email']==email)
// 			if(allusers[currentUser]['name']==name){
// 				ifFound=true;
// 				isname=true;
// 				break;
// 			}
// 	}
// 	if(ifFound==true && isname==true)
// 	{
// 		alert('u have logged in ')
// 	}
// }
// var email = prompt('enter email')
// var name = prompt('enter the name ')
//checkLogin(email,name,users)



 // LoadBannerOnTop()
 // loadProfileInformation()
 // LoadSuggestions()
 // LoaduserFeed()
 // LOadOnTheBottom()


// var strings = "sfjasifgasjfasfsjabf"

// var stringLength=strings.toUpperCase()
// alert(stringLength)





// var someNumber ="546"

// var ConvertedNumber= Number(someNumber)

// alert(typeof(ConvertedNumber))





// var veggie= ["carrots","potatoes", "Spinach"]

// var ConvertedString = veggie.toString()
// //veggie.push("tomato")

// //veggie.pop()

// veggie.shift()
// veggie.unshift("ginger")

// veggie[2]="littce"


// delete veggie[2]


// alert(veggie)




// var day = new Date(Date.now())
// alert(day)

// alert(day.getDate())


// console.log(num)

// let num = 20000;



// let x=1
// for(let x=0;x<10;x++)
// {
// 	console.log(x)
// }
// console.log('x='+x)



// const DiscountPercentage = 10;
// DiscountPercentage=20



// let oldUser = true

// const DiscountPercentage =10
// if(oldUser==true)
// {
// 	const DiscountPercentage =20;
// 	console.log("old percentage"+ DiscountPercentage)
// }
// console.log("new Percentage"+DiscountPercentage)




// let multiply=(x,y) =>{
// 	return x*y
// }
// console.log(multiply(10,20))







// let generateEmail = (name,msg) =>{
// 	let emailMessage="hi "+name+ "this is the message"+msg
// 	return emailMessage;

// }
// console.log(generateEmail("anmol","hello"))



// let multiply=(x=2,y=2) =>{
// 	return x*y
// }
// console.log(multiply())



// let allUersAddress=[]

// let storedAddress= (userId,...addressToStore) =>{

// 	let customerAddress= {userId:userId,userAddress:addressToStore}
// 	allUersAddress.push(customerAddress)

// 	console.log(allUersAddress)
// 	return allUersAddress

// }
// let firstAddress ={
// 	"city":"harihar",
// 	"district":"Davangere"
// }
// let secondAddress ={
// 	"city":"bangalore",
// 	"district":"Bangalore"
// }

// storedAddress("anmol2564",firstAddress,secondAddress)



// let firstName= "anmol"
// let secondName ="deep"

// let name = {firstName,secondName}

// console.log(name)




//IMPORTANT//


// let actualPrice=1000;
// let DiscountPercentage= 12

// let priceOfProduct= {
// 	actualPrice,DiscountPercentage,
// 	calculatePercentage(){
// 		return actualPrice-((actualPrice*DiscountPercentage)/100)
// 	}
// }
// console.log(priceOfProduct)
// console.log(priceOfProduct.calculatePercentage())


// let firstName = "anmol"
// let lastName = " Deep"

// let name = {
// 	firstName,
// 	lastName,
// 	calculateName()
// 	{
// 		return firstName+lastName
// 	}
// }
// console.log(name)
// console.log(name.calculateName())



// let key = "some key"
// let value = "some value"

// let finalObject ={
// 	[key]:value
// }
// console.log(finalObject)


//TEMPLATE LITERALS

// var someParagraph = `the parfjandfajahasf asfnasyhjasfasfaof  jdfyadfjafhafbfubgaou`

// var someOtherParagrph =`cnufasjfnaskfhafiaf ${someParagraph}`

// console.log(someParagraph)
// console.log(someOtherParagrph)


// let generateEmail = (name,msg) =>{
// 	let emailMessage=`hi ${name+" "+msg} this is the message${msg}`
// 	return emailMessage;

// }
// console.log(generateEmail("anmol","hello"))


// let generateEmail = (name,msg) =>{
// 	let emailMessage=`hi \${name+" "+msg} this is the message${msg}`
// 	return emailMessage;

// }
// console.log(generateEmail("anmol","hello"))


/*FOR OF LOOP*/

// var customerAddress=[{
// 	"custid": 1331,
// 	"signedUpDate":'13-2-1985'

// },
// {
// 	"custid":2365,
// 	"signedUpDate":'13-2-1985'
// }
// ]
// //FOR IN 
// for(x in customerAddress)
// {
// 	console.log(x)
	
// }
// //FOR OF
// for(x of customerAddress)
// {
// 	console.log(x)
	
// }



/*2 EXMAPLE ( NOT USED FOR OBJECTS ONLY FOR ARRAYS )*/

// let sinlgleUser= {
// 	name:"anmol",
// 	email :'anmol@gmail.com'
// }

// for(x in sinlgleUser)
// {
// 	console.log(sinlgleUser[x])
// }

// for(x of sinlgleUser)
// {
// 	console.log(sinlgleUser[x])
// }