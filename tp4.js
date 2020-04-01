//exo1
function sum(numbers)
{
	let somme=0;
	let size=numbers.length;
	if (size<1)
		{
			return 0;
		}
	else 
	{
		for(let i=0; i < size; i++)
		{
			somme=somme+numbers[i]; 
		}
		return somme;
	}
}
function sum1(numbers)
{
	let somme=0;
	let size=numbers.length;
	if (size<1)
		{
			return 0;
		}
	else 
	{
        let i =0;
		for(i in numbers)
		{
            somme=somme+numbers[i]; 
            i++;
            
		}
		return somme;
	}
}
function Testsum(){
console.log( sum1([]) );             // => 0
console.log( sum1([42,404,1337]) );  // => 1783

}
//exo2
function longuestWord(words)
{
	let longuest="a";
	for(let i=0;i<words.length;i++)
	{
		if (longuest.length<words[i].length)
		{
			longuest=words[i];
		}			
	}
	return longuest;
}

function TestWord(){
	console.log( longuestWord(["lot", "of", "words", "of", "different", "sizes"]) );// => different
}
//exo3
function range(min, max, step)
{
	let range=[];
	range[0]=min;
	for (let i=1;i<(max+1-min)/step;i++)
	{
		range[i]=range[i-1]+step;
	}
	return range;
}

function TestRange(){
	console.log( range(3, 8, 1) );      // => [3, 4, 5, 6, 7, 8]
	console.log( range(40, 90, 20) );   // => [40, 60, 80]
}
//exo4
function nbOccurences(wordList, word) 
{ 
	let n=0;
	let words=wordList.split(" ");
	for (i=0;i<words.length;i++)
	{
		if (words[i]==word)
			{
				n++;
			}
	}
	return n;
}

function TestOccurence(){
	let text = "bar qux baz foo bar foo qux foo";
	console.log(nbOccurences(text, "foo"));   // => 3
	console.log(nbOccurences(text,"quux"));// => 0
	console.log(nbOccurences(text, "baz"));// => 1
}
//exo5
function flatten2D(array) {

    let flattened = [];
    for(let subArray of array){
        for(let value of subArray){
            flattened.push(value);
        }
    }

    return flattened;
}

function TestAplatissement(){
	console.log( flatten2D([[1,2], [3,4], [5,6]]));   // [1, 2, 3, 4, 5, 6]
	console.log( flatten2D([[1,2], [3,4,5], [6]]));   // [1, 2, 3, 4, 5, 6]
}
//ex6
function ex6(){
    let tab = ["Bob", "Julien", "Roger"];
    console.log(tab.join(", "));
    tab.pop();
    tab.push("jess");
}
//ex7
function multiple(){
    let tab = [];
    tab.push([" ",1,2,3,4,5,6,7,8,9]);
    for(let i = 1; i < 10; i++){
        let ligne = [];
        ligne.push(i);
        for(let j =1; j < 10; j++){
            ligne.push(i*j);
        }
        tab.push(ligne);
    }
    console.log(tab.join("\n"));
}
//ex8
function chiffrementCesar(message, decalage){
    let resultat = "";
    for(let i = 0; i < message.length; i++){

        if(message[i] != " "){

            if ((message.charCodeAt(i) >= 65) && (message.charCodeAt(i) <= 90)){

				resultat += String.fromCharCode((message.charCodeAt(i)-65+decalage)%26+65);
				
            }else if ((message.charCodeAt(i) >= 97) && (message.charCodeAt(i) <= 122)){

				resultat += String.fromCharCode((message.charCodeAt(i)-97+decalage)%26+97);
				
            }
        }else{
            resultat += " ";
        }
	}
	
    return resultat;
}

function dechiffrementCesar(message, decalage){
    let result = "";
    for(let i = 0; i < message.length; i++){
        if(message[i] != " "){
            if ((message.charCodeAt(i) >= 65) && (message.charCodeAt(i) <= 90)){
                let dec = message.charCodeAt(i)-65-decalage;
                if(dec<0){
                    dec+=26;
                }
                result += String.fromCharCode(dec%26+65);
            }else if ((message.charCodeAt(i) >= 97) && (message.charCodeAt(i) <= 122)){
                let dec = message.charCodeAt(i)-97-decalage;
                if(dec<0){
                    dec+=26;
                }
                result += String.fromCharCode(dec%26+97);
            }
        }else{
            result += " ";
        }
    }
    return result;
}
//ex9
function chiffrementViginere(message, decalage){
    let result = "";
    let tabCle = [];
    while(decalage >= 1){
        tabCle.unshift(Math.trunc(decalage%10));
        decalage = Math.trunc(decalage/10);
    }
    let posCle = 0;
    for(let i = 0; i < message.length; i++){
        if(message[i] != " "){
            if ((message.charCodeAt(i) >= 65) && (message.charCodeAt(i) <= 90)){
                result += String.fromCharCode((message.charCodeAt(i)-65+tabCle[posCle])%26+65);
            }else if ((message.charCodeAt(i) >= 97) && (message.charCodeAt(i) <= 122)){
                result += String.fromCharCode((message.charCodeAt(i)-97+tabCle[posCle])%26+97);
            }
            posCle++;
            if(posCle >= tabCle.length){
                posCle = 0;
            }
        }else{
            result += " ";
        }
    }
    return result;
}

function dechiffrementViginere(message, decalage){
    let result = "";
    let tabCle = [];
    while(decalage >= 1){
        tabCle.unshift(Math.trunc(decalage%10));
        decalage = Math.trunc(decalage/10);
    }
    let posCle = 0;
    for(let i = 0; i < message.length; i++){
        if(message[i] != " "){
            if ((message.charCodeAt(i) >= 65) && (message.charCodeAt(i) <= 90)){
                let dec = message.charCodeAt(i)-65-tabCle[posCle];
                if(dec<0){
                    dec+=26;
                }
                result += String.fromCharCode(dec%26+65);
            }else if ((message.charCodeAt(i) >= 97) && (message.charCodeAt(i) <= 122)){
                let dec = message.charCodeAt(i)-97-tabCle[posCle];
                if(dec<0){
                    dec+=26;
                }
                result += String.fromCharCode(dec%26+97);
            }
            posCle++;
            if(posCle >= tabCle.length){
                posCle = 0;
            }
        }else{
            result += " ";
        }
    }
    return result;
}
function main(){
	//Testsum();
	//TestWord ();
	//TestRange ();
	//TestOccurence ();
	//éTestAplatissement ();
}

main();
