// let a = "abc"
// console.log(a);

// class form  {
//     constructor(name,train,adress,cell){
//         this.name = name;
//         this.train = train;
//         this.adress = adress;
//         this.cell = cell;
//     }

//     preview(){
//         console.log(`${this.name} form and your train num is ${this.train} . Adress Is ${this.adress} . cell is ${this.cell} :!:`)
//     }
//     submit(){
//         console.log(`${this.name} form is submited and your train num is ${this.train} . Adress Is ${this.adress} . cell is ${this.cell} :!:`)
//     }
//     cancel(){
//         console.log(`${this.name} form is canceled and your train num is ${this.train} . Adress Is ${this.adress} . cell is ${this.cell} :!:`);
//         this.train = 0;
//     }
// }

// let ansar = new form('Ansar',123,'punjab', 100);
// let ali = new form('Ali',456,'sindh',200);
// let zafar = new form('Zafar',123,'balochistan',300);

// ansar.preview();
// ansar.submit();
// ali.cancel();
// ali.submit();
// zafar.submit();

// class animal {

// }

// class animal {
//     constructor(name,role,mindeset){
//         this.name = name ;
//         this.role = role;
//         this.mindeset = mindeset;
//     }
//     info(){
//         console.log( 'Name is ==> ' + this.name + " :: role is ==> " + this.role);

//     }
//     mind(){
//         console.log('mind set is ' + this.mindeset);
//     }
// }

// let animal1 = new animal('dog','barking');
// // animal1.info();

// class monkey extends animal{

//     eating(eating){
//         this.eat = eating
//         console.log( 'Name is => ' + this.name + " :: role is => " + this.role + " :: " + this.name +' eat ' + this.eat );
//     }

// }

// let monkey1 = new monkey('monkey','jump','sharp')

// // monkey1.info()
// monkey1.eating('banana')

// let cat = new monkey('cat','run','Cute')

// cat.eating('meat')

//inheritence in oop ///

// class person {
//     name;
//     gender;
//     country;
//     constructor(name,gender,country){
//         this.name = name;
//         this.gender = gender;
//         this.country = country
//     }
// }

// class numb extends person { // inherit from id class // numb parent is id & id parent is person class //
//     num;
//     constructor(name,gender,country,num){
//         super(name,gender,country)
//         this.num = num;
//     }
// }
// class role extends numb { // inherit from numb class // role class parent is numb & numb parent is id class //
//     role;
//     constructor(name,gender,country,num,role){
//         super(name,gender,country,num)
//     this.role = role;
//     }
// }
// const p1 = new role("Ali","male","pakistan","jazz","husband")
// const p2 = new role("Amal","female","pakistan","zong","wife")
// console.log(p1)
// console.log(p2)

//     //  encapsulation  //

// class employe {

//     name;
//     id;
//     leaves;
//     #gen;
//     constructor(name,id,leaves,gender){
//         this.name = name;
//         this.id = id;
//         this.leaves = leaves;
//         this.#gen = gender;
//     }
//     login(){
//         console.log(`${this.name} employe logged in ! : id is ${this.id} : `);
//     }
//     logout(){
//         console.log(`${this.name}  employe logged out ! : id is  ${this.id} :` );
//     }
//     reqleaves(){
//         console.log(`${this.name} request leaves ! ( ${this.leaves} ) :`)
//     }
//     gender(){
//         console.log(`Coder is ${this.#gen}`);

//     }
// }

// class coder extends employe{

//     cofe(){
//         console.log(this.name + " take coffee for your work !!");

//     }
//     genderreq(){
//         this.gender()
//     }

// }

// let emp = new coder("ansar",45,3,"male");

// emp.name = "ali";
// emp.gen = "female"
// emp.login();
// // console.log(emp);
// // emp.logout();
// // emp.reqleaves();
// // emp.cofe();
// emp.genderreq();

//1/11/2025//
/// saturday//

class person {
  name;
  city;
  val;
  constructor(name,city,val) {
    this.name = name;
    this.city = city;
    this.val = val;
  }

  login() {
    console.log("city name is " + this.city);
  }
  textcapital(){
      this.val = this.val.charAt(0).toUpperCase()+this.val.slice(1)    
    console.log(this.val);
}
}
// nam = nam.charAt(0).toUpperCase()+nam.slice(1)}

// class id extends person {
//   constructor(name, city, id) {
//     super(name, city, id);
//     this.id = id;
//   }
//   userid(){
//     console.log( this.name + " user id is " + this.id);
//   }
// }

let person1 = new person("ansar","quetta","q-value");
console.log(person1);
person1.login();
// person1.userid();
person1.textcapital();

// person1.city = "lahore";

// let nam = "malik ansar";
//  nam = nam.charAt(0).toUpperCase()+nam.slice(1);
// console.log(nam);

