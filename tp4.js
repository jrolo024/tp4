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

function main(){
	Testsum();
	//TestWord ();
	//TestRange ();
	//TestOccurence ();
	//TestAplatissement ();
}

main();