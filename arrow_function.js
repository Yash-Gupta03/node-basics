const product = (a, b) => a * b;

console.log(product(10, 20));

// Student Object
const Student = {
  fname: "Yash",
  email: "abcd@gmail.com",
  contact: 34864982,
  printInfo() {
    console.log(
      `       Name: ${this.fname};
       Email: ${this.email};
       Contact: ${this.contact}`
    );
  },
};
Student.printInfo();
