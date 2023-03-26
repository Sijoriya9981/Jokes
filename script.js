const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c3bf5a1d2cmsh61bf730ed3dfa8dp13d55ejsnfc3a82abe461',
		'X-RapidAPI-Host': 'joke110.p.rapidapi.com'
	}
};
const getjoke =()=>
{

	fetch('https://joke110.p.rapidapi.com/random_joke', options)
	.then(response => response.json())
	.then(response => {
		
		para1.innerHTML=response.setup
		para2.innerHTML=response.punchline
		
	})
	.catch(err => console.error(err));
	const timer = setTimeout(() => {
		emoji();
	  }, 1700);
}




clickhere.addEventListener('click',(e)=>{
	e.preventDefault();
	getjoke();
	
})
function emoji()
{
	let a= document.getElementById("emoji");
	a.hidden =false;
}
getjoke();




