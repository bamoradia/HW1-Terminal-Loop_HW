//Section 1
/*1. Concatenation add the new string to the end of the original string. 
	 ex. "Concatenation plus " and "new string" would end up "Concatenation plus new string"
Interpolation allows you to add the new string anywhere in the orignal string.
	 ex. "Interpolation new string" and "plus" would end up "Concatenation plus new string"
*/

/* 2. DRY mean don't repeat yourself. We have to pay attention to it 
so that we are making code that is more efficient and easeier to read and edit later on.
To make sure we DRY, we use functions and loops. 
*/


//Section 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a === a != d);
console.log(e === 'Kevin');
console.log(48 == '48');

// Section 3

//Infite Loop 1
//This is a infinite loop becase the evaulation case is always True.

//Infinite Loop 2
//This is not an infinite loop because the evualation case is made false after the first iteration.


//Reading Code
//Before running the code: "AAAAAAAAAAAAAAAAAAAAAA"
let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

//After running the code: "AAAAAAAAAAAAAAAAAAAAA" It's the same as my expected result.


//Section 4

//For Loop
//A For loop runs for a predetermined amount of iterations. A While loop runs until a comparison case turns to False.

//For Loop I
for(var j = 0; j < 1000; j++) {
	console.log(j);
} 

//For Loop Control Statement
//The first part of the control statement is the initializer. This sets the variable that will be changed.
//The second part of the control statement is the comparison. The For Loop runs as long as the comparison is true.
//The third part of the control statement is the changer. This is how the variable is changed after each iteration.


//For Loop in Reverse
for(var k = 999; k >= 0; k--) {
	console.log(k);
}

//More Counting
for(var m = 1; m <= 10; m++) {
	console.log(`The value of i is: ${m} of 10`)
}

//Section 5

//Part 1: Set the Scene

/*
cd documents/funky-ducks/06_11_2018_Command_Line
mkdir homework_part_2
cd homework_part_2
mkdir death_star
touch death_star/darth_vader.txt death_star/princess_leia.txt death_star/storm_trooper.txt
mkdir galaxy_far_far_away
mkdir galaxy_far_far_away/tatooine
touch galaxy_far_far_away/tatooine/luke.txt galaxy_far_far_away/ben_kenobi.txt
mkdir galaxy_far_far_away/tatooine/millenium_falcon
touch galaxy_far_far_away/tatooine/millenium_falcon/han_solo.txt galaxy_far_far_away/tatooine/millenium_falcon/chewbaca.txt
*/

//Part II: MV - Rename

/*  
mv galaxy_far_far_away/ben_kenobi.txt galaxy_far_far_away/obi_wan.txt
*/

//Part III: CP - Copy

/*
cp death_star/storm_trooper.txt galaxy_far_far_away/tatooine/
*/

//Part IV: MV - Move

/* 
mv galaxy_far_far_away/tatooine/luke.txt galaxy_far_far_away/tatooine/millenium_falcon/
mv galaxy_far_far_away/tatooine/obi_wan.txt galaxy_far_far_away/tatooine/millenium_falcon/
mv galaxy_far_far_away/tatooine/millenium_falcon galaxy_far_far_away
mv galaxy_far_far_away/millenium_falcon death_star/
mv death_star/princess_leia.txt death_star/millenium_falcon/
*/ 

//Part V: RM - Remove

/*
rm -rf death_star/millenium_falcon/obi_wan.txt
*/

// Part VI: All Together

/*
mkdir galaxy_far_far_away/yavin_4
mv death_star/millenium_falcon galaxy_far_far_away/yavin_4
mkdir galaxy_far_far_away/yavin_4/x_wing
mv galaxy_far_far_away/yavin_4/millenium_falcon/princess_leia.txt galaxy_far_far_away/yavin_4/
mv galaxy_far_far_away/yavin_4/millenium_falcon/luke.txt galaxy_far_far_away/yavin_4/x_wing
mv galaxy_far_far_away/yavin_4 galaxy_far_far_away 
mv galaxy_far_far_away/yavin_4/millenium_falcon galaxy_far_far_away 
mv galaxy_far_far_away/yavin_4/x_wing galaxy_far_far_away 
mkdir death_star/tie_fighter_1 death_star/tie_fighter_2 death_star/tie_fighter_3
mv death_star/death_star/tie_fighter_1 galaxy_far_far_away
mv death_star/death_star/tie_fighter_2 galaxy_far_far_away
mv death_star/death_star/tie_fighter_3 galaxy_far_far_away
*/

//Part VII: RM -r - Remove Directories

/*
rm -r galaxy_far_far_away/tie_fighter_2
rm -r galaxy_far_far_away/tie_fighter_3
*/

//Part VIII: 

/*
touch galaxy_far_far_away/x_wing/the_force.txt
rm -rf death_star
mv galaxy_far_far_away/millenium_falcon galaxy_far_far_away/yavin_4
mv galaxy_far_far_away/x_wing galaxy_far_far_away/yavin_4
*/